import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery/gallery';
import Blog from './components/Blog/blog';

function Home() {
  return <div className='homepage-title'>Home Page</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-bar'>
          <h1 className="title">MINIONS!</h1>
          <div className="menu">
          <Link to="/"><span className="homepage">Home</span></Link>
          <Link to="/gallery"><span className="menu-Gallery">Gallery</span></Link>
          <Link to="/blog"><span className="menu-Blog">Blog</span></Link>

          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
