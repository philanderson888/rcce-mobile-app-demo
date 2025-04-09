import { Link, useLocation } from 'react-router-dom';
import { Home, Radio, Users, Calendar as CalendarIcon, Church, Heart, Mail, PartyPopper } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  
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

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-white shadow-sm hidden md:block">
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
                    className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 min-w-[44px] min-h-[44px] px-3"
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
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="grid grid-cols-5 gap-1 px-2">
          {menuItems.slice(0, 5).map((item) => (
            item.external ? (
              <a
                key={item.title}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-3 min-w-[44px] min-h-[44px]"
              >
                <span className="text-gray-600">{item.icon}</span>
                <span className="text-xs mt-1 text-gray-600">{item.title}</span>
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.path}
                className={`flex flex-col items-center justify-center py-3 min-w-[44px] min-h-[44px] ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600'
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