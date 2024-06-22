import React from "react";
import "./QuestionsSection.css";

const QuestionsSection = () => {
  return (
    <div className="questions-section">
      <div className="tabs">
        <button className="tab">Case Desc</button>
        <button className="tab">Acts & Laws</button>
        <button className="tab">Judgement</button>
        <button className="tab">Templates</button>
        <button className="tab active">Questions</button>
        <button className="tab">Support</button>
      </div>
      <div className="questions-container">
        <div className="question-toggle">
          <button className="toggle active">By Petitioner</button>
          <button className="toggle">By Respondant</button>
        </div>
        <div className="questions-list">
          {questions.map((question, index) => (
            <div key={index} className="question-item">
              <h4>
                {index + 1}. {question.question}
              </h4>
              <p className="reason-title">Reason -</p>
              <p>{question.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const questions = [
  {
    question:
      "Was the dog on a leash or under the control of the owner at the time of the incident?",
    reason:
      "This question aims to establish whether the owner was negligent in controlling the dog, which is crucial for proving liability.",
  },
  {
    question:
      "Did the dog show any signs of aggression or previous violent behaviour before the incident?",
    reason:
      "This question is important to demonstrate the owner's knowledge of the dog's aggressive tendencies, which can support the claim of negligence.",
  },
  {
    question:
      "Were there any warning signs or notices indicating the presence of a dangerous dog on the owner's property?",
    reason:
      "This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger posed by the dog.",
  },
  {
    question:
      "Has the dog been involved in similar incidents of biting or aggression in the past?",
    reason:
      "This question is relevant to establish a pattern of behaviour and the owner's awareness of the dog's propensity for aggression.",
  },
  {
    question:
      "Did the owner take immediate steps to assist or provide medical aid to the victim after the dog bite incident?",
    reason:
      "This question addresses the owner's duty of care and responsibility towards the victim following the incident.",
  },
  {
    question:
      "Can you provide any evidence of communication or interaction with the owner regarding the dog's behaviour prior to the incident?",
    reason:
      "This question seeks to gather information on any prior knowledge or warnings communicated to the owner about the dog's behaviour.",
  },
];

export default QuestionsSection;
