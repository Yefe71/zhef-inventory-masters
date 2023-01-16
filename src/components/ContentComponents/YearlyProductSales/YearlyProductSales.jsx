import React from "react";
import "./YearlyProductSales.css";
import YearlyProductSalesChart from "../../Charts/YearlyProductSalesChart/YearlyProductSalesChart";

const YearlyProductSales = ({month, year}) => {
  return (
    <div>
      <YearlyProductSalesChart month = {{month}} year = {{year}}/>
    </div>
  );
};

export default YearlyProductSales;
