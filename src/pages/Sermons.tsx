import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';
import ShareButton from '../components/ShareButton';
import { usePullToRefresh } from '../hooks/usePullToRefresh';
import { YOUTUBE_CONFIG } from '../config/youtube';
import { useTheme } from '../contexts/ThemeContext';

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
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        date: 'text-french',
        button: {
          primary: 'bg-gunmetal text-lavender hover:bg-french border-french',
          secondary: 'bg-gunmetal text-platinum hover:bg-french border-french'
        },
        error: 'text-red-400'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      date: 'text-gray-500',
      button: {
        primary: 'bg-red-600 text-white hover:bg-red-700 border-transparent',
        secondary: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
      },
      error: 'text-red-600'
    };
  };

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

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page} pb-20 md:pb-0`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.text}`}>Sermons</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {isRefreshing && (
          <div className={`text-center text-sm ${styles.text} mb-4`}>
            Refreshing...
          </div>
        )}
        
        {apiStatus === 'loading' && <LoadingSpinner />}
        
        {apiStatus === 'error' && (
          <div className={`${styles.card} rounded-xl shadow-sm p-6 ${styles.error}`}>
            <p>Failed to load sermons</p>
            <p className="mt-2 text-sm">{errorMessage}</p>
          </div>
        )}
        
        {apiStatus === 'success' && (
          <div className="space-y-6">
            {videos.map((video) => (
              <div key={video.snippet.resourceId.videoId} className={`${styles.card} rounded-xl shadow-sm overflow-hidden`}>
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
                    <div className={`text-sm ${styles.date} mb-2`}>
                      {formatDate(video.snippet.publishedAt)}
                    </div>
                    <h2 className={`text-xl font-semibold ${styles.title} mb-2`}>
                      {video.snippet.title}
                    </h2>
                    <p className={`${styles.text} mb-4 line-clamp-2`}>
                      {video.snippet.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-w-[44px] min-h-[44px] ${styles.button.primary}`}
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