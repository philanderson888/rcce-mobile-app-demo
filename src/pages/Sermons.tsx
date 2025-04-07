import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';
import ShareButton from '../components/ShareButton';
import { usePullToRefresh } from '../hooks/usePullToRefresh';
import { YOUTUBE_CONFIG } from '../config/youtube';

interface YouTubeVideo {
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

function Sermons() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchChannelVideos = async () => {
    try {
      setIsRefreshing(true);
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const channelId = YOUTUBE_CONFIG.channelId;
      
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        const error = await channelResponse.json();
        throw new Error(error.error.message);
      }

      const channelData = await channelResponse.json();

      if (!channelData.items || channelData.items.length === 0) {
        throw new Error('Channel not found');
      }

      const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${uploadsPlaylistId}&key=${apiKey}`
      );

      if (!videosResponse.ok) {
        const error = await videosResponse.json();
        throw new Error(error.error.message);
      }

      const data = await videosResponse.json();
      setVideos(data.items);
      setApiStatus('success');
    } catch (error) {
      console.error('YouTube API Error:', error);
      setApiStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchChannelVideos();
  }, []);

  usePullToRefresh(fetchChannelVideos);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Sermons</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {isRefreshing && (
          <div className="text-center text-sm text-gray-600 mb-4">
            Refreshing...
          </div>
        )}
        
        {apiStatus === 'loading' && <LoadingSpinner />}
        
        {apiStatus === 'error' && (
          <div className="bg-white rounded-xl shadow-sm p-6 text-red-600">
            <p>Failed to load sermons</p>
            <p className="mt-2 text-sm">{errorMessage}</p>
          </div>
        )}
        
        {apiStatus === 'success' && (
          <div className="space-y-6">
            {videos.map((video) => (
              <div key={video.snippet.resourceId.videoId} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 flex-shrink-0">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(video.snippet.publishedAt)}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {video.snippet.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {video.snippet.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-w-[44px] min-h-[44px]"
                      >
                        Watch on YouTube
                      </a>
                      <ShareButton
                        title={video.snippet.title}
                        text={video.snippet.description}
                        url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Sermons;