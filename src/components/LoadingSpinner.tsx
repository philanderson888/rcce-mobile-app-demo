import { Loader2 } from 'lucide-react';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
    </div>
  );
}

export default LoadingSpinner;