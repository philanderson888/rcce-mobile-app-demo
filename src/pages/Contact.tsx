import { MapPin, Phone, Mail, Globe, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const { currentTheme } = useTheme();

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        link: 'text-uranian hover:text-lavender',
        icon: 'text-platinum',
        button: 'bg-gunmetal text-platinum hover:bg-french border-french',
        serviceCard: 'bg-gunmetal/50'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      link: 'text-gray-600 hover:text-gray-900',
      icon: 'text-gray-600',
      button: 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300',
      serviceCard: 'bg-gray-100'
    };
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.title}`}>Contact Us</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${styles.card} rounded-xl shadow-sm p-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className={`text-2xl font-semibold ${styles.title} mb-4`}>Visit Us</h2>
                <div className={`flex items-start space-x-4 ${styles.text}`}>
                  <MapPin className={`w-6 h-6 mt-1 flex-shrink-0 ${styles.icon}`} />
                  <div>
                    <p className="font-medium">The Revive Centre</p>
                    <p>47 London Road</p>
                    <p>Enfield</p>
                    <p>London</p>
                    <p>EN2 6DS</p>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="mt-4 rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.5751797441835!2d-0.09398748456186774!3d51.65284397966053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f0a1b506b67%3A0x5f32c1926e8a73f!2s47%20London%20Rd%2C%20Enfield%20EN2%206DS!5e0!3m2!1sen!2suk!4v1647356789012!5m2!1sen!2suk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location Map"
                  ></iframe>
                </div>

                {/* Get Directions Link */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=47+London+Road+Enfield+EN2+6DS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 mt-4 border rounded-md text-sm font-medium ${styles.button}`}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
              
              <div>
                <h2 className={`text-2xl font-semibold ${styles.title} mb-4`}>Get in Touch</h2>
                <div className="space-y-4">
                  <a 
                    href="tel:02083665007" 
                    className={`flex items-center space-x-4 transition-colors ${styles.link}`}
                  >
                    <Phone className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                    <span>0208 366 5007</span>
                  </a>

                  <a 
                    href="tel:07534625399" 
                    className={`flex items-center space-x-4 transition-colors ${styles.link}`}
                  >
                    <Smartphone className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                    <span>07534 625399</span>
                  </a>
                  
                  <a 
                    href="mailto:info@rcceenfield.org"
                    className={`flex items-center space-x-4 transition-colors ${styles.link}`}
                  >
                    <Mail className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                    <span>info@rcceenfield.org</span>
                  </a>
                  
                  <a 
                    href="https://rccenfield.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 transition-colors ${styles.link}`}
                  >
                    <Globe className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                    <span>rccenfield.org</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`${styles.serviceCard} rounded-lg p-6`}>
              <h2 className={`text-2xl font-semibold ${styles.title} mb-4`}>Service Times</h2>
              <div className={`space-y-4 ${styles.text}`}>
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p>Morning Service: 11:00 AM</p>
                </div>
                <div>
                  <p className="font-medium">Friday Service</p>
                  <p>Evening Prayer Service: 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;