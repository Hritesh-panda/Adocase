import React from "react";
import "./ProgressSteps.css";

const ProgressSteps = () => {
  const steps = [
    { name: "Start", completed: true },
    { name: "Continue", completed: true },
    { name: "Analysis", completed: true },
    { name: "Additional Documents", completed: false },
    { name: "Relief", completed: false },
    { name: "Suggestions", completed: false },
    { name: "First Draft", completed: false },
    { name: "Q&A", completed: false },
    { name: "Final Draft", completed: false },
  ];

  return (
    <div className="progress-steps-container">
      <ul className="steps-list">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step-item ${step.completed ? "completed" : ""}`}
          >
            <span className="step-text">{step.name}</span>
          </li>
        ))}
      </ul>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default ProgressSteps;
