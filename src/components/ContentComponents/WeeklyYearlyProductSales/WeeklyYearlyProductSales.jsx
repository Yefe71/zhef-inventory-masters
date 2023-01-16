import React from "react";
import WeeklyYearlyProductSalesChart from "../../Charts/WeeklyYearlyProductSalesChart/WeeklyYearlyProductSalesChart";
import "./WeeklyYearlyProductSales.css";

const WeeklyYearlyProductSales = ({month, year}) => {
  return (
    <div>
      <WeeklyYearlyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default WeeklyYearlyProductSales;
