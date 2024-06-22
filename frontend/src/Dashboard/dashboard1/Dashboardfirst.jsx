import React from "react";
import Header from "../../component/header/Header";
import RecentStudies from "../../component/recentfile/RecentStudies";
import FileUpload from "../../component/fileupload/FileUpload";
import "./Dashboardfirst.css";
const Dashboardfirst = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="recent-studies-section">
          <RecentStudies />
        </div>
        <div className="file-upload-section">
          <FileUpload />
        </div>
      </div>
    </>
  );
};

export default Dashboardfirst;
