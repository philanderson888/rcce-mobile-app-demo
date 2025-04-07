import { useEffect, useState } from 'react';
import { type BeforeInstallPromptEvent } from '../types/pwa';

function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    const result = await deferredPrompt.prompt();
    console.log('Install prompt result:', result);
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">Install RCCE App</h3>
          <p className="mt-1 text-sm text-gray-500">
            Install our app for a better experience
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowPrompt(false)}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Not now
          </button>
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}

export default PWAPrompt;