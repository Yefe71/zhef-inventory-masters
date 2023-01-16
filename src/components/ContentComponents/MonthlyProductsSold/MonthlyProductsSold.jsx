import React from "react";
import MonthlyProductsSoldChart from "../../Charts/MonthlyProductSoldChart/MonthlyProductSoldChart";
import "./MonthlyProductsSold.css";

const MonthlyProductsSold = ({month, year}) => {
  return (
    <div>
      <MonthlyProductsSoldChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default MonthlyProductsSold;
