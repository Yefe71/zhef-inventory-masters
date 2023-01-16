import React from "react";
import YearlyProductsSoldChart from "../../Charts/YearlyProductsSoldChart/YearlyProductsSoldChart";
import "./YearlyProductsSold.css";

const YearlyProductsSold = ({month, year}) => {
  return (
    <div>
      <YearlyProductsSoldChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default YearlyProductsSold;
