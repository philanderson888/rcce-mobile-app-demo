import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink, LayoutGrid, List } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Image {
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
}

interface Location {
  name: string;
  type: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  url: string | null;
}

interface Event {
  id: number;
  identifier: string;
  sequence_id: number | null;
  name: string;
  starts_at: string;
  ends_at: string;
  all_day: boolean;
  status: string;
  description: string;
  image: Image;
  location: Location;
  url: string;
}

function Calendar() {
  const [view, setView] = useState<'custom' | 'embed'>('custom');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        button: {
          active: 'bg-gunmetal text-lavender border-gunmetal',
          inactive: 'bg-gunmetal text-platinum border-french hover:border-lavender'
        },
        error: 'bg-gunmetal border-red-400 text-red-400',
        icon: 'text-platinum',
        link: 'text-uranian hover:text-lavender'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      button: {
        active: 'bg-gray-900 text-white border-gray-900',
        inactive: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
      },
      error: 'bg-yellow-50 border-yellow-400 text-yellow-700',
      icon: 'text-gray-500',
      link: 'text-blue-600 hover:text-blue-800'
    };
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://rcce.churchsuite.com/-/calendar/8e403f2a-abc8-4f3c-b807-2760583bccf9/json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        
        // Filter events for the next 60 days
        const now = new Date();
        const sixtyDaysFromNow = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000));
        
        const filteredEvents = data.events.filter((event: Event) => {
          const eventDate = new Date(event.starts_at);
          return eventDate <= sixtyDaysFromNow;
        });

        setEvents(filteredEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Showing fallback data.');
        setEvents(generateStaticEvents());
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const styles = getThemeStyles();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className={`text-3xl font-bold ${styles.title}`}>Calendar</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setView('custom')}
                className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                  view === 'custom' ? styles.button.active : styles.button.inactive
                }`}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Custom View
              </button>
              <button
                onClick={() => setView('embed')}
                className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                  view === 'embed' ? styles.button.active : styles.button.inactive
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Embedded View
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'custom' ? (
          <div className="space-y-6">
            {loading && <LoadingSpinner />}
            
            {error && (
              <div className={`border-l-4 p-4 mb-4 ${styles.error}`}>
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {!loading && events.map((event) => (
              <div key={event.identifier} className={`${styles.card} rounded-xl shadow-sm overflow-hidden`}>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className={`text-xl font-semibold ${styles.title} mb-2`}>
                        {event.name}
                      </h2>
                      <div className="space-y-2">
                        <div className={`flex items-center ${styles.text}`}>
                          <CalendarIcon className={`w-5 h-5 mr-2 ${styles.icon}`} />
                          <span>{formatDate(event.starts_at)}</span>
                        </div>
                        <div className={`flex items-center ${styles.text}`}>
                          <Clock className={`w-5 h-5 mr-2 ${styles.icon}`} />
                          <span>
                            {event.all_day ? 
                              'All Day' : 
                              `${formatTime(event.starts_at)} - ${formatTime(event.ends_at)}`
                            }
                          </span>
                        </div>
                        {event.location && event.location.address && (
                          <div className={`flex items-center ${styles.text}`}>
                            <MapPin className={`w-5 h-5 mr-2 ${styles.icon}`} />
                            <span>{event.location.address}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${styles.button.inactive}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`${styles.card} rounded-xl shadow-sm overflow-hidden`}>
            <iframe
              src="https://rcce.churchsuite.com/embed/calendar"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="yes"
              style={{ borderWidth: 0 }}
              title="Church Calendar"
            />
          </div>
        )}
      </main>
    </div>
  );
}

// Static event data as fallback
const generateStaticEvents = () => {
  const events: Event[] = [];
  const location: Location = {
    name: "The Revive Centre",
    type: "physical",
    address: "47 London Road, Enfield, London, EN2 6DS",
    latitude: 51.6528,
    longitude: -0.0918,
    url: null
  };

  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);

  // Find the next Friday
  while (startDate.getDay() !== 5) {
    startDate.setDate(startDate.getDate() + 1);
  }

  // Generate 5 weeks of events
  for (let week = 0; week < 5; week++) {
    // Friday Prayer Meeting
    const fridayDate = new Date(startDate);
    fridayDate.setDate(fridayDate.getDate() + (week * 7));
    fridayDate.setHours(19, 0, 0, 0); // 7 PM

    events.push({
      id: week * 2 + 1,
      identifier: `static-${week}-1`,
      sequence_id: null,
      name: "Prayer Meeting",
      starts_at: fridayDate.toISOString(),
      ends_at: new Date(fridayDate.getTime() + (2.5 * 60 * 60 * 1000)).toISOString(),
      all_day: false,
      status: "confirmed",
      description: "Join us for our weekly prayer meeting where we come together as a church family to pray and seek God's presence.",
      image: {
        thumbnail: "",
        small: "",
        medium: "",
        large: ""
      },
      location: location,
      url: "https://rcce.churchsuite.com/events/prayer-meeting"
    });

    // Sunday Service
    const sundayDate = new Date(fridayDate);
    sundayDate.setDate(sundayDate.getDate() + 2);
    sundayDate.setHours(11, 0, 0, 0);

    events.push({
      id: week * 2 + 2,
      identifier: `static-${week}-2`,
      sequence_id: null,
      name: "Sunday Service",
      starts_at: sundayDate.toISOString(),
      ends_at: new Date(sundayDate.getTime() + (2 * 60 * 60 * 1000)).toISOString(),
      all_day: false,
      status: "confirmed",
      description: "Join us for our Sunday morning service as we worship together, hear God's Word, and experience His presence.",
      image: {
        thumbnail: "",
        small: "",
        medium: "",
        large: ""
      },
      location: location,
      url: "https://rcce.churchsuite.com/events/sunday-service"
    });
  }

  return events;
};

export default Calendar;