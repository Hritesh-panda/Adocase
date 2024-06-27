import React from "react";
import "./GivenInformations.css";

const GivenInformations = () => {
  const recents = [
    {
      type: "DEEDS",
      title: "The Cyberbullying Consp...",
      status: "Completed",
      time: "10 min",
    },
    {
      type: "CONTRACT",
      title: "The Data Breach Dilemma",
      status: "In progress",
      time: "1 hour ago",
    },
    {
      type: "COURT ORDER",
      title: "The Green Tech Scandal",
      status: "Failed",
      time: "1 day ago",
    },
    {
      type: "DEEDS",
      title: "The Cyberbullying Consp...",
      status: "Completed",
      time: "2 days ago",
    },
  ];

  return (
    <div className="recents-list">
      <div className="given-information">
        <div className="qus-i">
          <button className="back-button">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button className="backqui">Back to home</button>
        </div>
        <h2>Given information</h2>
        <div className="search-result">
          <h3>Your search</h3>
          <p>Habeas Corpus</p>
        </div>
        <div className="recents">
          <h3>Recents</h3>
          {recents.map((item, index) => (
            <div
              key={index}
              className={`recent-item ${item.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              <div className="item-header">
                <span className="type">{item.type}</span>
                <span className="status">{item.status}</span>
              </div>
              <div className="item-body">
                <span className="title">{item.title}</span>
              </div>
              <div className="item-footer">
                <span className="time">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GivenInformations;
