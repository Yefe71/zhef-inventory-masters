import React from 'react';
import ChartSales from '../../Charts/MostPopularDays/MostPopularDays';
import './MostPopularTime.css'
const MostPopularTime = () => {

        {
            return(
                
            <div>
                <h1>Most Popular Days</h1>
                  <ChartSales />

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

export default MostPopularTime;