import React from "react";
import DailyProductsSoldChart from "../../Charts/DailyProductsSoldChart/DailyProductsSoldChart";
import "./DailyProductsSold.css";

const DailyProductsSold = ({month, year}) => {
  return (
    <div>
      <DailyProductsSoldChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default DailyProductsSold;
