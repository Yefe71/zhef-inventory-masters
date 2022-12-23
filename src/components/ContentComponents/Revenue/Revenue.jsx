import React from 'react';
import './Revenue.css'
import ChartSales from '../../Charts/ChartSales/ChartSales';
const Revenue = () => {

        {
            return(
                
            <div>
                <h1 className = "title">Sales</h1>
                <ChartSales/>
                <div className = "labelsy">
                    <div className="labelsy2">
                          <h2>100</h2>
                          <h2>80</h2>
                          <h2>60</h2>
                          <h2>40</h2>
                          <h2>20</h2>
                    </div>

                  </div>
                <div className = "labels">
                      <h3>Mon</h3>
                      <h3>Tue</h3>
                      <h3>Wed</h3>
                      <h3>Thu</h3>
                      <h3>Fri</h3>
                      <h3>Sat</h3>
                      <h3>Sun</h3>
                  </div>

            </div>
            )   
        }
   
    

}

export default Revenue;