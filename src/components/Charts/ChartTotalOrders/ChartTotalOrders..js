 import React from "react";
 import './ChartTotalOrders.css';




 function SkillsBar ({cuswidth}) {
    console.log(cuswidth);
    return (
        <div className="container">
            <div className="skill-box">
                <span className="title">Goal: 100 orders</span>
                <div className="skill-bar">
                    <span className="skill-per html" style= {{width: cuswidth }}>
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            </div>
            
    )
 }

 export default SkillsBar;