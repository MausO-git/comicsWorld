import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import logo from "./logo_comicsworld.png"
import AllComics from './pages/AllComics/AllComics';

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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
