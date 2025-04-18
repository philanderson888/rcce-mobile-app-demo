import { Facebook, Instagram, Youtube, Twitter, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

function Connect() {
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        socialCard: 'border-french hover:border-lavender',
        socialText: 'text-lavender',
        socialHover: {
          facebook: 'hover:text-uranian',
          instagram: 'hover:text-uranian',
          youtube: 'hover:text-uranian',
          twitter: 'hover:text-uranian',
          website: 'hover:text-uranian'
        }
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      socialCard: 'border-gray-200 hover:border-gray-300',
      socialText: 'text-gray-900',
      socialHover: {
        facebook: 'hover:text-blue-600',
        instagram: 'hover:text-pink-600',
        youtube: 'hover:text-red-600',
        twitter: 'hover:text-gray-800',
        website: 'hover:text-blue-600'
      }
    };
  };

  const socialLinks = [
    {
      name: 'Website',
      icon: <Globe className="w-8 h-8" />,
      url: 'https://rccenfield.org',
      hoverKey: 'website'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8" />,
      url: 'https://www.facebook.com/rccenfield',
      hoverKey: 'facebook'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://www.instagram.com/rccenfield',
      hoverKey: 'instagram'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      url: 'https://www.youtube.com/c/RevivalChristianChurchofEnfield',
      hoverKey: 'youtube'
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-8 h-8" />,
      url: 'https://x.com/rccenfield',
      hoverKey: 'twitter'
    },
  ];

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.text}`}>Connect With Us</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${styles.card} rounded-xl shadow-sm p-8`}>
          <p className={`text-xl ${styles.text} mb-8 text-center`}>
            Stay connected with Revival Christian Church of Enfield through our social media channels
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${styles.socialCard}`}
              >
                <div className={styles.socialHover[link.hoverKey]}>{link.icon}</div>
                <span className={`mt-4 text-lg font-medium ${styles.socialText}`}>{link.name}</span>
              </a>
            ))}
          </div>
          
          <p className={`text-center mt-8 ${styles.text}`}>
            Follow us to stay updated with our latest events, sermons, and community activities
          </p>
        </div>
      </main>
    </div>
  );
}

export default Connect;