import { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-50 border-t border-yellow-200 p-4 z-50">
      <div className="flex items-center justify-center space-x-2 text-yellow-800">
        <WifiOff className="w-5 h-5" />
        <span>You are currently offline. Some features may be limited.</span>
      </div>
    </div>
  );
}

export default OfflineIndicator;