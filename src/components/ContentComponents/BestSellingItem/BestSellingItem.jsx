import React from 'react';
import './BestSellingItem.css'
import check from '../../../scenes/Dashboard/images/check.svg'
import Card from '../BestSellingItem/Card/Card';
import { CardsData } from '../../../Data/Data';



const BestSellingItem = () => {

        
          const card = CardsData[3];
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

export default BestSellingItem;