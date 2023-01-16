import React from "react";
import "./MonthlyProductSales.css";
import MonthlyProductSalesChart from "../../Charts/MonthlyProductSalesChart/MonthlyProductSalesChart";

const MonthlyProductSales = ({month, year}) => {
  return (
    <div>
      <MonthlyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default MonthlyProductSales;
