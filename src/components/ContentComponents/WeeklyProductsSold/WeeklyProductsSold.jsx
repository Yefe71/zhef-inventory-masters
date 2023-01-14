import React from "react";
import WeeklyProductsSoldChart from "../../Charts/WeeklyProductsSoldChart/WeeklyProductsSoldChart";
import "./WeeklyProductsSold.css";

const WeeklyProductsSold = ({month, year}) => {
  return (
    <div>
      <WeeklyProductsSoldChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default WeeklyProductsSold;
