import { Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeCustomizer() {
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Default', color: 'bg-blue-500' },
    { id: 'royal', name: 'Royal', color: 'bg-purple-500' },
    { id: 'nature', name: 'Nature', color: 'bg-emerald-500' },
    { id: 'warm', name: 'Warm', color: 'bg-amber-500' },
  ] as const;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center justify-center mb-6">
        <Palette className="w-8 h-8 text-gray-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Customize App Theme</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentTheme === theme.id
                ? 'border-gray-900 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-full h-8 rounded-md ${theme.color} mb-2`} />
            <span className="text-sm font-medium text-gray-900">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeCustomizer;