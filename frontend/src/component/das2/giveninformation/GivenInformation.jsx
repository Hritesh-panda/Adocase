import React from "react";
import "./Giveninformation.css"; // Importing the CSS file

const GivenInformation = () => {
  return (
    <div className="given-informations">
      <div className="given-inf">
        <div className="leftgivi">
          <i class="bi bi-chevron-left"></i>
        </div>
        <button className="back-buttonn">Back to home</button>
      </div>
      <div className="content">
        <h2>Given information</h2>
        <div className="text-entered">
          <h3>Text Entered</h3>
          <p>
            I’m researching environmental regulations. Can you summarize the
            Clean Air Act and its objectives with details.
          </p>
        </div>
        <div className="uploads">
          <h3>Uploads</h3>
          <div className="uploaded-files">
            <p>
              Uploaded file <span className="file-count">5/5</span>
            </p>
            <div className="file-list">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div className="file-item" key={index}>
                    <i class="bi bi-file-earmark-pdf-fill"></i>
                    <p>Case document.pdf</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivenInformation;
