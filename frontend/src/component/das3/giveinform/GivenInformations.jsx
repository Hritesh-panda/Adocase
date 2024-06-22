import React from "react";
import "./GivenInformations.css";

const GivenInformations = () => {
  return (
    <div className="given-info-container">
      <button className="back-button">Back to home</button>
      <div className="given-info-content">
        <h2>Given information</h2>
        <p>Your search</p>
        <p className="search-term">Habeas Corpus</p>
        <p>Recents</p>
        <div className="recent-item">
          <div className="givrec-i">
            <div className="givred-i1">
              <span className="type-tag deeds">DEEDS</span>
            </div>
            <div className="givred-i2">
              <span className="status completed">Completed</span>
            </div>
          </div>
          <div className="givred-b">
            <p className="title">The Cyberbullying Consp...</p>
            <span className="time">10 min</span>
          </div>
        </div>
        <div className="recent-item">
          <div className="givrec-i">
            <div className="givred-i1">
              <span className="type-tag contract">CONTRACT</span>
            </div>
            <div className="givred-i2">
              <span className="status in-progress">In progress</span>
            </div>
          </div>
          <div className="givred-b">
            <p className="title">The Data Breach Dilemma</p>
            <span className="time">1 hour ago</span>
          </div>
        </div>
        <div className="recent-item">
          <div className="givrec-i">
            <div className="givred-i1">
              <span className="type-tag court-order">COURT ORDER</span>
            </div>
            <div className="givred-i2">
              <span className="status failed">Failed</span>
            </div>
          </div>
          <div className="givred-b">
            <p className="title">The Green Tech Scandal</p>
            <span className="time">1 day ago</span>
          </div>
        </div>
        <div className="recent-item">
          <div className="givrec-i">
            <div className="givred-i1">
              <span className="type-tag deeds">DEEDS</span>
            </div>
            <div className="givred-i2">
              <span className="status completed">Completed</span>
            </div>
          </div>
          <div className="givred-b">
            <p className="title">The Cyberbullying Consp...</p>
            <span className="time">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivenInformations;
