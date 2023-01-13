import React from "react";
import WeeklyProductsSoldChart from "../../Charts/WeeklyProductsSoldChart/WeeklyProductsSoldChart";
import "./WeeklyProductsSold.css";

const WeeklyProductsSold = ({month}) => {
  return (
    <div>
      <WeeklyProductsSoldChart month = {{month}}/>
    </div>
  );
};

export default WeeklyProductsSold;
