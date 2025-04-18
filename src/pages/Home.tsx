import { Link } from 'react-router-dom';
import { Radio, Users, Calendar as CalendarIcon, Church, Heart, Mail, PartyPopper, HandHeart, Palette, BookOpen, MessageSquare, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

interface BibleVerse {
  text: string;
  reference: string;
}

const encouragingVerses: BibleVerse[] = [
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
  { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9" },
  { text: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
  { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", reference: "Psalm 55:22" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", reference: "Isaiah 40:31" },
  { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", reference: "John 14:27" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" }
];

function Home() {
  const { currentTheme } = useTheme();
  const [verse, setVerse] = useState<BibleVerse | null>(null);

  useEffect(() => {
    // Get a random verse from the array
    const randomIndex = Math.floor(Math.random() * encouragingVerses.length);
    setVerse(encouragingVerses[randomIndex]);
  }, []);

  const baseMenuItems = [
    { 
      title: 'Livestream', 
      icon: <Church className="w-8 h-8" />, 
      path: '/livestream',
    },
    { 
      title: 'Sermons', 
      icon: <Radio className="w-8 h-8" />, 
      path: '/sermons',
    },
    { 
      title: 'Connect', 
      icon: <Users className="w-8 h-8" />, 
      path: '/connect',
    },
    { 
      title: 'Events', 
      icon: <PartyPopper className="w-8 h-8" />, 
      path: '/events',
    },
    { 
      title: 'Calendar', 
      icon: <CalendarIcon className="w-8 h-8" />, 
      path: '/calendar',
    },
    { 
      title: 'Giving', 
      icon: <Heart className="w-8 h-8" />, 
      path: 'https://rcce.churchsuite.com/donate',
      external: true 
    },
    { 
      title: 'Community', 
      icon: <HandHeart className="w-8 h-8" />, 
      path: '/community',
    },
    { 
      title: 'Feedback', 
      icon: <MessageSquare className="w-8 h-8" />, 
      path: '/feedback',
    },
    { 
      title: 'Testimonies', 
      icon: <MessageCircle className="w-8 h-8" />, 
      path: '/testimonies',
    },
    { 
      title: 'Contact', 
      icon: <Mail className="w-8 h-8" />, 
      path: '/contact',
    },
    { 
      title: 'Customize App', 
      icon: <Palette className="w-8 h-8" />, 
      path: '/customize',
    },
  ];

  const getThemeStyles = () => {
    if (currentTheme === 'grey') {
      return {
        page: 'bg-french',
        header: 'bg-gunmetal text-lavender shadow-lg',
        card: 'bg-gunmetal',
        text: 'text-platinum',
        title: 'text-lavender',
        welcome: 'bg-gunmetal text-platinum',
        verseCard: 'bg-gunmetal/50 text-lavender',
        verseReference: 'text-uranian',
        verseIcon: 'text-uranian'
      };
    }
    return {
      page: 'bg-gray-50',
      header: 'bg-white shadow-sm',
      card: 'bg-white',
      text: 'text-gray-600',
      title: 'text-gray-900',
      welcome: 'bg-white text-gray-600',
      verseCard: 'bg-blue-50 text-gray-700',
      verseReference: 'text-blue-600',
      verseIcon: 'text-blue-600'
    };
  };

  const styles = getThemeStyles();
  const menuItems = baseMenuItems.map(item => ({
    ...item,
    bgColor: styles.card,
    iconColor: styles.text,
    textColor: styles.title
  }));

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <Navigation />
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center">
          <img src="/pwa-192x192.png" alt="RCCE Logo" className="h-12 w-12 mr-4" />
          <h1 className={`text-3xl font-bold ${styles.title}`}>Welcome</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
        {/* Welcome Message */}
        <div className={`${styles.welcome} rounded-xl shadow-sm p-6 mb-8`}>
          <p className="text-lg">
            Welcome to RCCE where we pray you will be blessed by visiting our church and find help and content that you need through this app.
          </p>
        </div>

        {/* Daily Verse */}
        {verse && (
          <div className={`${styles.verseCard} rounded-xl shadow-sm p-6 mb-8`}>
            <div className="flex items-center mb-4">
              <BookOpen className={`w-6 h-6 ${styles.verseIcon} mr-2`} />
              <h2 className="text-lg font-semibold">Verse of Encouragement</h2>
            </div>
            <p className="text-lg mb-2">"{verse.text}"</p>
            <p className={`${styles.verseReference} font-medium`}>{verse.reference}</p>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            item.external ? (
              <a
                key={item.title}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${item.bgColor}`}
              >
                <div className={item.iconColor}>{item.icon}</div>
                <span className={`mt-4 text-lg font-medium ${item.textColor}`}>{item.title}</span>
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.path}
                className={`flex flex-col items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${item.bgColor}`}
              >
                <div className={item.iconColor}>{item.icon}</div>
                <span className={`mt-4 text-lg font-medium ${item.textColor}`}>{item.title}</span>
              </Link>
            )
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;