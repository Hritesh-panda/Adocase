import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([
    { name: "Case document.pdf", type: "pdf" },
    { name: "Case document.docx", type: "docx" },
    { name: "Case document.docx", type: "docx" },
  ]);

  const handleFileRemove = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="file-upload-container">
      <h3>
        Get Complete info about any case from AI-driven research assistance
      </h3>
      <input
        type="text"
        placeholder="Ex: Land dispute, Mumbai, recent judgments."
        maxLength="80"
      />
      <div className="upload-area">
        <div className="upload-placeholder">
          <span>
            Drag and drop here or click here to{" "}
            <a href="#upload">Upload a file</a>
          </span>
        </div>
        <p>Maximum uploads: 1</p>
        <p>File formats: JPG, PNG, docx, Pdf etc.</p>
      </div>
      <div className="uploaded-files">
        <h4>
          Uploaded files <span>{files.length}/5</span>
        </h4>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="file-item">
              <span className={` ${file.type}`}></span>
              {file.name}
              <button onClick={() => handleFileRemove(index)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="start-button">Start</button>
    </div>
  );
};

export default FileUpload;
