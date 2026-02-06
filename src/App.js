import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import logo from "./logo_comicsworld.png"
import AllComics from './pages/AllComics/AllComics';
import Footer from './components/Footer/Footer';
import Comics from './pages/Comics/Comics';

function App() {
  return (
    <Router>
      <Navbar 
        logo={logo}
      />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comics' element={<AllComics />} />
          <Route path='/comics/:id' element={<Comics />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
