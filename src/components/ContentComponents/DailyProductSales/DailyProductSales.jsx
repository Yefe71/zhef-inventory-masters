import React from "react";
import DailyProductSalesChart from "../../Charts/DailyProductSalesChart/DailyProductSalesChart";
import "./DailyProductSales.css";

const DailyProductSales = ({month, year}) => {
  return (
    <div>
      <DailyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default DailyProductSales;
