import React from "react";
import DailyProductsSoldChart from "../../Charts/DailyProductsSoldChart/DailyProductsSoldChart";
import "./DailyProductsSold.css";

const DailyProductsSold = ({month}) => {
  return (
    <div>
      <DailyProductsSoldChart month = {{month}}/>
    </div>
  );
};

export default DailyProductsSold;
