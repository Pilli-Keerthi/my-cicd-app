import React, { useState } from 'react';
import './App.css';

const quotes = [
  "Believe in yourself!",
  "Every day is a fresh start.",
  "You are capable of amazing things.",
  "Push yourself, no one else will.",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal.",
  "The only way to do great work is to love what you do.",
  "Your limitation—it's only your imagination.",
  "Great things never come from comfort zones.",
  "Don't stop when you're tired. Stop when you're done."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-icon">✨</span>
          <span className="brand-text">MotivateMe</span>
        </div>
        <div className="nav-greeting">
          <span className="greeting-text">Hi there! Welcome, I'm Keerthi 👋</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="hero-section">
          <h1 className="title">
            <span className="title-gradient">Daily Motivation</span>
            <span className="title-emoji">🌟</span>
          </h1>
          <p className="subtitle">Get inspired with powerful quotes to brighten your day</p>
        </div>

        <div className="quote-container">
          <div className="quote-card">
            <div className="quote-icon">💭</div>
            <p className="quote">"{quote}"</p>
            <div className="quote-decoration"></div>
          </div>
        </div>

        <div className="button-container">
          <button className="new-quote-btn" onClick={handleNewQuote}>
            <span className="btn-icon">🎯</span>
            Get New Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by Keerthi | Keep pushing forward!</p>
      </footer>
    </div>
  );
}

export default App;