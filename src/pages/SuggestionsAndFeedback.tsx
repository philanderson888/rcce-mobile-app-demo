import { MessageSquare, Star, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

function SuggestionsAndFeedback() {
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
        icon: 'text-platinum'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      link: 'text-blue-600 hover:text-blue-800',
      icon: 'text-gray-600'
    };
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.title}`}>Suggestions & Feedback</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${styles.card} rounded-xl shadow-sm p-8`}>
          <div className="flex items-center justify-center mb-8">
            <MessageSquare className={`w-12 h-12 ${styles.icon}`} />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className={`${styles.text} text-lg mb-6`}>
              Thank you for visiting our church and our website. We value your input and feedback on all aspects of church life and would welcome your input.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Star className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                <div>
                  <h2 className={`text-lg font-semibold ${styles.title} mb-2`}>Leave a Review</h2>
                  <p className={`${styles.text} mb-3`}>
                    Please feel free to give the church a public review on Google:
                  </p>
                  <a
                    href="https://maps.app.goo.gl/QRqUenB6fxTAWEMA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${styles.link}`}
                  >
                    Review us on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className={`w-6 h-6 flex-shrink-0 ${styles.icon}`} />
                <div>
                  <h2 className={`text-lg font-semibold ${styles.title} mb-2`}>Send Us Your Suggestions</h2>
                  <p className={`${styles.text} mb-3`}>
                    Feel free to email us internally with suggestions and improvements that you feel would help the church:
                  </p>
                  <a
                    href="mailto:info@rcceenfield.org?subject=Feedback for suggestions and improvements"
                    className={`inline-flex items-center ${styles.link}`}
                  >
                    Email your suggestions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SuggestionsAndFeedback;