import React from "react";
import "./QuestionsSection.css";

const QuestionsSection = () => {
  return (
    <div className="questions-container2">
      <div className="top-buttons">
        <button className="top-button">Case Desc</button>
        <button className="top-button">Acts & Laws</button>
        <button className="top-button">Judgement</button>
        <button className="top-button">Templates</button>
        <button className="top-button active">Questions</button>
        <button className="top-button">Support</button>
      </div>
      <div className="ques-u">
        <h2 className="questions-heading">Questions</h2>
        <div className="by-buttons">
          <button className="by-button active">By Petitioner</button>
          <button className="by-button">By Respondent</button>
        </div>
        <div className="questions-list">
          <div className="question-item">
            <h3>
              1. Was the dog on a leash or under the control of the owner at the
              time of the incident?
            </h3>
            <p>
              <strong>Reason -</strong>
            </p>
            <p>
              This question aims to establish whether the owner was negligent in
              controlling the dog, which is crucial for proving liability.
            </p>
          </div>
          <div className="question-item">
            <h3>
              2. Did the dog show any signs of aggression or previous violent
              behaviour before the incident?
            </h3>
            <p>
              <strong>Reason -</strong>
            </p>
            <p>
              This question is important to demonstrate the owner's knowledge of
              the dog's aggressive tendencies, which can support the claim of
              negligence.
            </p>
          </div>
          <div className="question-item">
            <h3>
              3. Were there any warning signs or notices indicating the presence
              of a dangerous dog on the owner's property?
            </h3>
            <p>
              <strong>Reason -</strong>
            </p>
            <p>
              This question seeks to determine if the owner took reasonable
              precautions to warn others about the potential danger posed by the
              dog.
            </p>
          </div>
          <div className="question-item">
            <h3>
              4. Has the dog been involved in similar incidents of biting or
              aggression in the past?
            </h3>
            <p>
              <strong>Reason -</strong>
            </p>
            <p>
              This question is relevant to establish a pattern of behaviour and
              the owner's awareness of the dog's propensity for aggression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
