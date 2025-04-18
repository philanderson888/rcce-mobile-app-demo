import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

function Events() {
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-900',
      title: 'text-gray-900'
    };
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.title}`}>Events</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${styles.card} rounded-xl shadow-sm overflow-hidden`}>
          <iframe 
            src="https://rcce.churchsuite.com/embed/calendar/events?body_bgcolor=F5F6F7&categories=&event_bgcolor=FFFFFF&event_border=&featured=NULL&filters_bgcolor=FFFFFF&heading_color=444444&icon_color=BBBBBB&layout=grid&merge=signup_to_sequence&num_results=&show_categories=0&show_search=0&show_sites=0&text_color=666666" 
            className="events-iframe"
            title="Church Events Calendar"
          />
        </div>
      </main>
    </div>
  );
}

export default Events;