import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TodoPage from './components/Todo';
import ShoppingCart from './components/ShoppingCart';
import Movies from './components/Movies';
import { useEffect,useState } from 'react';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      
      <Router>
        {/* Navigation Component */}
      <Nav />
      {/* created Routes for each page */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/movies" element={<Movies/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
