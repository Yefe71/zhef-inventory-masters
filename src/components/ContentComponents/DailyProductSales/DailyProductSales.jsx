import React from "react";
import DailyProductSalesChart from "../../Charts/DailyProductSalesChart/DailyProductSalesChart";
import "./DailyProductSales.css";

const DailyProductSales = ({month}) => {
  return (
    <div>
      <DailyProductSalesChart month = {{month}}/>
    </div>
  );
};

export default DailyProductSales;
