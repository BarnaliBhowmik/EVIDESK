import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Evidesk Logo" className="logo-image" />
          <h1 className="logo-text">evidesk</h1>
        </div>
        <div className="nav-links">
          <button>Research Hub</button>
          <button>Get Started</button>
          <button>Featured Authors</button>
          <button>Join Us</button>
          <button>More Info</button>
        </div>
        <div className="profile-icon">
          <img src="/profile-icon.png" alt="Profile" />
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ELEVATE YOUR RESEARCH JOURNEY</h1>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="/research-illustration.png" alt="Research Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
