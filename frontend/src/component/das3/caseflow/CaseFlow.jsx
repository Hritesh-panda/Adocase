import React from "react";
import "./CaseFlow.css";

const CaseFlow = () => {
  return (
    <div className="case-flow-container">
      <h2>Case flow</h2>
      <p className="instruction">Select the document for drafting</p>
      <div className="section">
        <div className="section-title">
          <span className="dot pre-litigation"></span>
          Pre litigation
        </div>
        <div className="item">
          <p className="title">Legal Notice</p>
          <p className="description">
            Notifies the opposing party of the dispute and demands resolution.
          </p>
        </div>
        <div className="item">
          <p className="title">Reply to Legal Notice</p>
          <p className="description">
            A response to a legal notice received from the opposing party.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <span className="dot litigation"></span>
          Litigation
        </div>
        <div className="item">
          <p className="title">Plaint/Complaint</p>
          <p className="description">
            Initiates the lawsuit, detailing the plaintiff's claims.
          </p>
        </div>
        <div className="item">
          <p className="title">Vakalatnama</p>
          <p className="description">
            Authorizes a lawyer to represent the client in court.
          </p>
        </div>
        <div className="item">
          <p className="title">Written Statement/Answer</p>
          <p className="description">
            The defendant's formal response to the plaint.
          </p>
        </div>
        <div className="item">
          <p className="title">Reply to Written Statement</p>
          <p className="description">
            Addresses points raised in the defendant's written statement.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <span className="dot interlocutory"></span>
          Interlocutory Applications
        </div>
        <div className="item">
          <p className="title">Application for Temporary Injunction</p>
          <p className="description">
            Seeks immediate court intervention to preserve status quo.
          </p>
        </div>
        <div className="item">
          <p className="title">Counter-Affidavit to Opposition's Application</p>
          <p className="description">
            Responds to interlocutory applications from the opposing party.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseFlow;
