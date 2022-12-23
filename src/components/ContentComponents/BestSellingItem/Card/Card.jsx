import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import './Card2.css'
import New from './new.svg'


const Card = (props) => {

    const [expanded, setExpanded] = useState(false)


  return (
    <AnimateSharedLayout>
        {
           expanded? 
            <ExpandedCard param = {props} setExpanded = {() => setExpanded(false)}/>
            :
           <CompactCard param = {props} setExpanded = {() => setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}


//CompactCard
function CompactCard ({param, setExpanded}){
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
        style = {{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
            
        }}
        layoutId = 'expandableCard'
        onClick = {setExpanded}
        >
            <div className="radialBar">
                <img src = {New} alt="" />
                <span>Most<br/>Popular Dish</span>
                
            </div>
            <div className="detail">
                <Png/>
                <span>{param.value}</span>
                <span>of all time</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard ({param, setExpanded}){
    const data = {
        options: {
            
        }
    }
    return (
        <motion.div className="ExpandedCard"
             style = {{background: param.color.backGround,
                       boxShadow: param.color.boxShadow,
                       
                     }}
                     layoutId = 'expandableCard' >
            
            <div
                style = {{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}
                >
                <UilTimes onClick = {setExpanded}
                />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series = {param.series} type = 'donut' options = {data.options}/>
            </div>
            <span>Last 24 hours</span>

            
        </motion.div>
    )
}






export default Card