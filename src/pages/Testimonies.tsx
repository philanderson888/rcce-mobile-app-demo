import { MessageCircle, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

const testimonyScriptures = [
  {
    text: "And they overcame him by the blood of the Lamb and by the word of their testimony, and they did not love their lives to the death.",
    reference: "Revelation 12:11"
  },
  {
    text: "Come and hear, all you who fear God, and I will declare what He has done for my soul.",
    reference: "Psalm 66:16"
  },
  {
    text: "Return to your own house, and tell what great things God has done for you.",
    reference: "Luke 8:39"
  },
  {
    text: "I will praise You, O Lord, with my whole heart; I will tell of all Your marvelous works.",
    reference: "Psalm 9:1"
  }
];

function Testimonies() {
  const { currentTheme } = useTheme();
  const randomScripture = testimonyScriptures[Math.floor(Math.random() * testimonyScriptures.length)];

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        verseCard: 'bg-gunmetal/50 text-lavender',
        verseReference: 'text-uranian',
        verseIcon: 'text-uranian',
        button: 'bg-gunmetal text-platinum hover:bg-french border-french'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      verseCard: 'bg-blue-50 text-gray-700',
      verseReference: 'text-blue-600',
      verseIcon: 'text-blue-600',
      button: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
    };
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold ${styles.title}`}>Testimonies</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${styles.card} rounded-xl shadow-sm p-8`}>
          {/* Scripture Quote */}
          <div className={`${styles.verseCard} rounded-xl p-6 mb-8`}>
            <div className="flex items-center mb-4">
              <BookOpen className={`w-6 h-6 ${styles.verseIcon} mr-2`} />
              <h2 className="text-lg font-semibold">Scripture of Testimony</h2>
            </div>
            <p className="text-lg mb-2">"{randomScripture.text}"</p>
            <p className={`${styles.verseReference} font-medium`}>{randomScripture.reference}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <MessageCircle className={`w-12 h-12 ${styles.icon}`} />
            </div>

            <div className={`${styles.text} space-y-6`}>
              <p className="text-lg">
                We pray you are being blessed by being an active member of our church, and truly the Lord is moving in our midst. John's Gospel states that if all the books in the world were to be written, they still would not have room to contain all the mighty works that God is doing on the earth!!! And so it is today, we rejoice in the multitude of testimonies which abound in our services and in God's people.
              </p>

              <p className="text-lg">
                Feel free to share any feedback or testimony which glorifies God, that we may pray and rejoice with the Lord with you!!!
              </p>

              <div className="flex justify-center pt-6">
                <a
                  href="mailto:info@rcceenfield.org?subject=Testimony for God's Glory"
                  className={`inline-flex items-center px-6 py-3 border rounded-md shadow-sm text-base font-medium ${styles.button}`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Share Your Testimony
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Testimonies;