import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import logo from "./logo_comicsworld.png"
import AllComics from './pages/AllComics/AllComics';
import Footer from './components/Footer/Footer';
import Comics from './pages/Comics/Comics';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar 
        logo={logo}
      />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comics' element={<AllComics />} />
          <Route path='/comics/:id' element={<Comics />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
