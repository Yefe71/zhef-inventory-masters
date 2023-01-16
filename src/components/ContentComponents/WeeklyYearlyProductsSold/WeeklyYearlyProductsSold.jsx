import React from "react";
import WeeklyYearlyProductsSoldChart from "../../Charts/WeeklyYearlyProductsSoldChart/WeeklyYearlyProductsSoldChart";
import "./WeeklyYearlyProductsSold.css";

const WeeklyYearlyProductsSold = ({month, year}) => {
  return (
    <div>
      <WeeklyYearlyProductsSoldChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default WeeklyYearlyProductsSold;
