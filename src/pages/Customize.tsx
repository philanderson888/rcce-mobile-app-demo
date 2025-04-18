import { ArrowLeft, Palette, Sun, Moon, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

function Customize() {
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { 
      id: 'grey', 
      name: 'Grey Theme (Default)', 
      description: 'Elegant grey and lavender accents', 
      color: 'bg-gunmetal text-white',
      icon: <Moon className="w-5 h-5" />,
      textColor: 'text-white'
    },
    { 
      id: 'default', 
      name: 'Light', 
      description: 'Clean, minimal white theme', 
      color: 'bg-white border-2 border-gray-200',
      icon: <Sun className="w-5 h-5" />,
      textColor: 'text-gray-900'
    }
  ] as const;

  const handleThemeChange = (themeId: typeof themes[number]['id']) => {
    setTheme(themeId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Customize Appearance</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-center mb-8">
            <Palette className="w-8 h-8 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Theme</h2>
          </div>

          <div className="grid gap-6">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`w-full p-6 rounded-lg transition-all ${
                  currentTheme === theme.id
                    ? 'ring-2 ring-gray-900 shadow-md'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-md ${theme.color} flex items-center justify-center`}>
                    {theme.icon}
                  </div>
                  <div className="text-left ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{theme.name}</h3>
                    <p className="text-sm text-gray-500">{theme.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Suggestions For Improvement</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                The current 'grey' theme is inspired by this color palette:{' '}
                <a 
                  href="https://coolors.co/eae8ff-d8d5db-adacb5-2d3142-b0d7ff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://coolors.co/eae8ff-d8d5db-adacb5-2d3142-b0d7ff
                </a>
              </p>

              <p className="text-gray-600 mb-4">
                Have a suggestion for a better color scheme? Generate your own palette at{' '}
                <a 
                  href="https://coolors.co/generate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://coolors.co/generate
                </a>{' '}
                and send it to us at the church office for the attention of the website team.
              </p>

              <div className="flex items-center mt-6">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <a 
                  href="mailto:info@rcceenfield.org?subject=FAO Web Team : Suggestions For Website Improvement"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Send us your suggestions
                </a>
              </div>

              <p className="text-gray-600 mt-6">
                Please also send any other suggestions for improvement regarding any aspect of this app to the above email address, 
                we would love to hear from you!!! This will really help us improve our app over time if we receive feedback from you, thanks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Customize;