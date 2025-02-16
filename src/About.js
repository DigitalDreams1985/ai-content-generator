import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to AI Content Generator! We provide AI-powered tools to help you create amazing content.</p>
    </div>
  );
};

export default About;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to AI Content Generator 🚀</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
