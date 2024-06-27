import React, { useState } from "react";
import "./FileUpload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileWord } from "@fortawesome/free-solid-svg-icons";
const FileUpload = () => {
  const [files, setFiles] = useState([
    { name: "Case document.pdf", type: "pdf" },
    { name: "Case document.docx", type: "docx" },
    { name: "Case document.docx", type: "docx" },
  ]);

  const handleFileRemove = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FontAwesomeIcon icon={faFilePdf} />;
      case "docx":
        return <FontAwesomeIcon icon={faFileWord} />;

      default:
        return null;
    }
  };

  return (
    <div className="file-upload-container">
      <h3>
        <i class="bi bi-journal"></i>Get Complete info about any case from
        AI-driven research assistance
      </h3>
      <textarea
        name=""
        id=""
        placeholder="Ex: Land dispute, Mumbai, recent judgments."
      ></textarea>

      <div className="upload-area">
        <div className="upload-placeholder">
          <div>
            <i class="bi bi-upload"></i>
          </div>
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
              <span className={`file-icon ${file.type}`}>
                {getFileIcon(file.type)}
              </span>
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
