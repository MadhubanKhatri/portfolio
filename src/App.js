import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollProgress />
        <header className="App-header">
          
          <Navbar />
          
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
          <nav>
          </nav>
          
        </header>

        
      </Router>
    </div>
  );
}

export default App;
