import { Link, useLocation } from 'react-router-dom';
import { Home, Radio, Users, Calendar as CalendarIcon, Church, Heart, Mail, PartyPopper } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function Navigation() {
  const location = useLocation();
  const { currentTheme } = useTheme();
  
  const menuItems = [
    { title: 'Home', icon: <Home className="w-6 h-6" />, path: '/' },
    { title: 'Livestream', icon: <Church className="w-6 h-6" />, path: '/livestream' },
    { title: 'Sermons', icon: <Radio className="w-6 h-6" />, path: '/sermons' },
    { title: 'Connect', icon: <Users className="w-6 h-6" />, path: '/connect' },
    { title: 'Events', icon: <PartyPopper className="w-6 h-6" />, path: '/events' },
    { title: 'Calendar', icon: <CalendarIcon className="w-6 h-6" />, path: '/calendar' },
    { 
      title: 'Giving', 
      icon: <Heart className="w-6 h-6" />, 
      path: 'https://rcce.churchsuite.com/donate',
      external: true 
    },
    { title: 'Contact', icon: <Mail className="w-6 h-6" />, path: '/contact' },
  ];

  const mobileMenuItems = [
    menuItems[0], // Home
    menuItems[1], // Livestream
    menuItems[2], // Sermons
    menuItems[6], // Giving
    menuItems[4], // Events
  ];

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        nav: 'bg-gunmetal shadow-lg',
        text: 'text-platinum',
        activeText: 'text-lavender',
        hoverText: 'hover:text-uranian',
        mobileNav: 'bg-gunmetal border-t border-french',
        mobileText: 'text-platinum',
        mobileActiveText: 'text-lavender'
      };
    }
    return {
      nav: 'bg-white shadow-sm',
      text: 'text-gray-600',
      activeText: 'text-gray-900',
      hoverText: 'hover:text-gray-900',
      mobileNav: 'bg-white border-t border-gray-200',
      mobileText: 'text-gray-600',
      mobileActiveText: 'text-blue-600'
    };
  };

  const styles = getThemeStyles();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block ${styles.nav}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src="/pwa-64x64.png" alt="RCCE Logo" className="h-8 w-8" />
            </Link>
            
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                item.external ? (
                  <a
                    key={item.title}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm font-medium ${styles.text} ${styles.hoverText} min-w-[44px] min-h-[44px] px-3`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`flex items-center space-x-2 text-sm font-medium min-w-[44px] min-h-[44px] px-3 ${
                      location.pathname === item.path
                        ? styles.activeText
                        : `${styles.text} ${styles.hoverText}`
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 md:hidden z-50 ${styles.mobileNav}`}>
        <div className="grid grid-cols-5 gap-1 px-2">
          {mobileMenuItems.map((item) => (
            item.external ? (
              <a
                key={item.title}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center py-3 min-w-[44px] min-h-[44px] ${styles.mobileText}`}
              >
                <span>{item.icon}</span>
                <span className="text-xs mt-1">{item.title}</span>
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.path}
                className={`flex flex-col items-center justify-center py-3 min-w-[44px] min-h-[44px] ${
                  location.pathname === item.path
                    ? styles.mobileActiveText
                    : styles.mobileText
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-xs mt-1">{item.title}</span>
              </Link>
            )
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;