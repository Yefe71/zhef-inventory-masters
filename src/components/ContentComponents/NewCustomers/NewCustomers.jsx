import React from 'react';
import './NewCustomers.css'
import check from '../../../scenes/Dashboard/images/check.svg'
import SkillsBar from '../../Charts/ChartTotalOrders/ChartTotalOrders.';
import Card from '../NewCustomers/Card/Card';
import { CardsData } from '../../../Data/Data';



const TotalOrders = () => {

        {
          const card = CardsData[2];
            return(
            <div>
              <Card title = {card.title}
              color = {card.color}
              barValue = {card.barValue}
              value = {card.value}
              png = {card.png}
              series = {card.series}
              gridArea = {card.gridArea}
              />
            </div>
            )   
        }
   
    

}

export default TotalOrders;