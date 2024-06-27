import React from "react";
import "./Dashboardthird.css";
import Header from "../../component/header/Header";
import GivenInformations from "../../component/das3/giveinform/GivenInformations";
import CaseFlow from "../../component/das3/caseflow/CaseFlow";
import ProgressSteps from "../../component/das3/progresstep/ProgressSteps";
const Dashboardthird = () => {
  return (
    <>
      <Header />
      <div className="dashboard-third-container">
        <div className="container">
          <div className="dashboard-third-content">
            <GivenInformations />
            <CaseFlow />
            <ProgressSteps />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardthird;
