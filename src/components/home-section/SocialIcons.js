import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="social-icon animate-slide"
      style={{ animationDelay: "0.8s", animationDuration: "1s" }}
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="social-icon animate-slide"
      style={{ animationDelay: "1.2s", animationDuration: "1s" }}
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="social-icon animate-slide"
      style={{ animationDelay: "1.7s", animationDuration: "1s" }}
    >
      <i className="fab fa-x-twitter"></i>
    </a>
    <a
      href="https://telegram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram"
      className="social-icon animate-slide"
      style={{ animationDelay: "2.2s", animationDuration: "1s" }}
    >
      <i className="fab fa-telegram"></i>
    </a>
  </div>

  );
};

export default SocialIcons;
