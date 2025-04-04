import React from "react";
import "./Contact.css"; 
// CONTACT JS
const TronContactForm = () => {
  return (
    <div className="cyber-frame">
      <div className="contact-grid">
        <div className="hex-grid"></div>
        <div className="neon-pulse"></div>
        <div className="data-stream"></div>

        <div className="contact-header">
          <h1>SYSTEM CONNECTION</h1>
          <p id="access-contact">ACCESS CODE REQUIRED [SECURITY TIER: OMEGA]</p>
        </div>

        <form className="input-grid">
          <div className="input-row">
            <input type="text" required />
            <label>NAME</label>
          </div>

          <div className="input-row">
            <input type="email" required />
            <label>EMAIL</label>
          </div>

          <div className="input-row">
            <input type="text" required />
            <label>SUBJECT</label>
          </div>

          <div className="input-row">
            <textarea rows="5" required></textarea>
            <label>MESSAGE</label>
          </div>

          <button type="submit" className="submit-btn">ENGAGE PROTOCOL</button>
        </form>
      </div>
    </div>
  );
};

export default TronContactForm;
