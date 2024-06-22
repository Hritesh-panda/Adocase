import React from "react";
import "./Dashboardsecond.css";
import QuestionsSection from "../../component/das2/questions/QuestionsSection";
import GivenInformation from "../../component/das2/giveninformation/GivenInformation";
import Header from "../../component/header/Header";
const Dashboardsecond = () => {
  return (
    <>
      <Header />
      <div className="dashboard-all">
        <div className="container">
          <div className="dashboard-second">
            <GivenInformation />
            <QuestionsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardsecond;
