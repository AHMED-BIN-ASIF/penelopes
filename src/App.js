import './App.css';
// import './css/fonts.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Routes instead of Switch
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
