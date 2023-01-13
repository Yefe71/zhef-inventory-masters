import React from "react";
import "./WeeklyProductSales.css";
import WeeklyProductSalesChart from "../../Charts/WeeklyProductsSalesChart/WeeklyProductSalesChart";

const WeeklyProductSales = ({month}) => {
  return (
    <div>
      <WeeklyProductSalesChart month = {{month}}/>
    </div>
  );
};

export default WeeklyProductSales;
