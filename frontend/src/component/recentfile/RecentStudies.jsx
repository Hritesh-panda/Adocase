import React from "react";
import "./RecentStudies.css";

const studies = [
  { title: "Dog Bite Complaint", time: "2 days ago", status: "Completed" },
  {
    title: "The Cyberbullying Conspiracy",
    time: "2 days ago",
    status: "Completed",
  },
  { title: "The Data Breach Dilemma", time: "2 days ago", status: "Completed" },
  {
    title: "The Data Breach Dilemma",
    time: "2 days ago",
    status: "In progress",
  },
  { title: "The Data Breach Dilemma", time: "2 days ago", status: "Failed" },
];

const RecentStudies = () => {
  return (
    <div className="recent-studies">
      <h3>Recent Studies</h3>
      {studies.map((study, index) => (
        <div key={index} className="study-item">
          <h4>{study.title}</h4>
          <div className="recenttime">
            <p>{study.time}</p>
            <span
              className={`status ${study.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {study.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentStudies;
