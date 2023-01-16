import React from "react";
import MonthlyProductSalesChart from "../../Charts/MonthlyProductSalesChart/MonthlyProductSalesChart";
import "./MonthlyProductSales.css";

const MonthlyProductSales = ({month, year}) => {
  return (
    <div>
      <MonthlyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default MonthlyProductSales;
