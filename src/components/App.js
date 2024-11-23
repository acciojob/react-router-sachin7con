//SGN
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import './../styles/App.css';

const Home = () => <h2>Welcome to my website!</h2>;
const About = () => {
  return(
    <div>
      <h2>About</h2>
      <p>This page is About my website </p>
    </div>
  )
}


const Switch = () => {
  return(
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

const App = () => {
  return (
    <div>
        {/*ONS Do not remove the main div */}
        <Switch />
    </div>
  )
}

export default App
