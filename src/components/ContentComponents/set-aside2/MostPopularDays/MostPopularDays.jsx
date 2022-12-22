
import React from 'react';
import './MostPopularDays.css'
import check from '../../../scenes/Dashboard/images/check.svg'
import SkillsBar from '../../../Charts/ChartTotalOrders/ChartTotalOrders.';
import Card from '../../Card/Card';
import { CardsData } from '../../../../Data/Data';
const MostPopularDays = () => {
  {
    const card = CardsData[1];
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

export default MostPopularDays