import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sermons from './pages/Sermons';
import Connect from './pages/Connect';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Livestream from './pages/Livestream';
import CommunityEngagement from './pages/CommunityEngagement';
import FoodPantry from './pages/FoodPantry';
import CAP from './pages/CAP';
import TownHallBreakfast from './pages/TownHallBreakfast';
import CareHomeVisits from './pages/CareHomeVisits';
import Customize from './pages/Customize';
import SuggestionsAndFeedback from './pages/SuggestionsAndFeedback';
import Testimonies from './pages/Testimonies';
import PWAPrompt from './components/PWAPrompt';
import OfflineIndicator from './components/OfflineIndicator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<CommunityEngagement />} />
        <Route path="/community/food-pantry" element={<FoodPantry />} />
        <Route path="/community/cap" element={<CAP />} />
        <Route path="/community/town-hall-breakfast" element={<TownHallBreakfast />} />
        <Route path="/community/care-home-visits" element={<CareHomeVisits />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/feedback" element={<SuggestionsAndFeedback />} />
        <Route path="/testimonies" element={<Testimonies />} />
      </Routes>
      <PWAPrompt />
      <OfflineIndicator />
    </Router>
  );
}

export default App;