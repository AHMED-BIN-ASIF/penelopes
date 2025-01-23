import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Events from './pages/Events';
import BlogPage from './pages/BlogPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
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
          <Route path="/events" element={<Events />} /> {/* Home page */}
          <Route path="/events/:slug" element={<BlogPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
