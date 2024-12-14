import './App.css';
// import './css/fonts.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Routes instead of Switch
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import ContactPage from './pages/ContactPage';
import DonorsSponsorsPage from './pages/DonorsSponsorsPage';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* Home page */}
          <Route path="/programs" element={<Programs />} /> {/* Home page */}
          <Route path="/donate" element={<Donate />} /> {/* Home page */}
          <Route path="/contact" element={<ContactPage />} /> {/* Home page */}
          <Route path="/donors" element={<DonorsSponsorsPage />} /> {/* Home page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
