import React from "react";
import "./WeeklyProductSales.css";
import WeeklyProductSalesChart from "../../Charts/WeeklyProductsSalesChart/WeeklyProductSalesChart";

const WeeklyProductSales = ({month, year}) => {
  return (
    <div>
      <WeeklyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default WeeklyProductSales;
