import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Calendar, Play } from 'lucide-react';
import { YOUTUBE_CONFIG } from '../config/youtube';
import { useTheme } from '../contexts/ThemeContext';

interface LiveStreamStatus {
  isLive: boolean;
  videoId?: string;
}

function Livestream() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liveStatus, setLiveStatus] = useState<LiveStreamStatus>({ isLive: false });
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        link: 'text-uranian hover:text-lavender',
        button: 'text-platinum bg-gunmetal hover:bg-french border-french',
        errorCard: 'bg-gunmetal text-red-400'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      link: 'text-blue-600 hover:text-blue-800',
      button: 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300',
      errorCard: 'bg-white text-red-600'
    };
  };

  const checkLiveStream = async () => {
    try {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      
      if (!apiKey) {
        throw new Error('YouTube API key is not configured');
      }

      const channelId = YOUTUBE_CONFIG.channelId;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to check livestream status');
      }

      const data = await response.json();
      const isLive = data.items && data.items.length > 0;
      
      setLiveStatus({
        isLive,
        videoId: isLive ? data.items[0].id.videoId : undefined
      });
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check livestream status');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLiveStream();
    const interval = setInterval(checkLiveStream, 30000);
    return () => clearInterval(interval);
  }, []);

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.text}`}>Livestream</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className={`${styles.card} rounded-xl shadow-sm p-6`}>
            <p className={styles.text}>Checking livestream status...</p>
          </div>
        ) : error ? (
          <div className={`${styles.card} rounded-xl shadow-sm p-6`}>
            <div className="text-center py-12">
              <Calendar className={`w-16 h-16 ${styles.text} mx-auto mb-4`} />
              <h2 className={`text-2xl font-semibold ${styles.text} mb-2`}>No Live Stream Available</h2>
              <p className={`${styles.text} mb-6`}>
                Please check our <Link to="/calendar" className={styles.link}>calendar</Link> and{' '}
                <Link to="/events" className={styles.link}>events</Link> pages for upcoming services and church meetings.
              </p>
              <p className="text-red-600 text-sm mb-2">Error checking livestream status</p>
              <p className={`${styles.text} text-sm`}>{error}</p>
            </div>
          </div>
        ) : liveStatus.isLive ? (
          <div className="space-y-4">
            <div className={`${styles.card} rounded-xl shadow-sm p-6`}>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${liveStatus.videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Live Church Service"
                ></iframe>
              </div>
              <div className="mt-4">
                <p className="text-green-600 font-semibold flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
                  Live Now
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.card} rounded-xl shadow-sm p-6`}>
            <div className="text-center py-12">
              <Calendar className={`w-16 h-16 ${styles.text} mx-auto mb-4`} />
              <h2 className={`text-2xl font-semibold ${styles.text} mb-2`}>No Live Stream Available</h2>
              <p className={`${styles.text} mb-6`}>
                There is no live stream at present. Please check our{' '}
                <Link to="/calendar" className={styles.link}>calendar</Link> and{' '}
                <Link to="/events" className={styles.link}>events</Link> pages for upcoming services and church meetings.
              </p>
              <div className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md cursor-not-allowed ${styles.button}`}>
                <Play className="w-5 h-5 mr-2" />
                Livestream Not Available
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Livestream;