import styled from "styled-components"
import Card from "./Card";
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 0.5fr 3fr 2.5fr 2.5fr;
    
        
    grid-template-areas:
    "header header header header"
    "top1 top2 top3 top4"
    "chart1 chart1 chart2 chart2"
    "chart1 chart1 chart2 chart2"
    ;
    gap: 1rem;
    `;

export const StyleTotalOrder= styled(Card)`
    background: white;
    grid-area: top1;
    `;

export const StyleMostPopularDays= styled(Card)`
    background: white;
    grid-area: top2;
    `;


export const StyleMostPopularTime= styled(Card)`
    background: white;
    grid-area: top3;
    `;

export const StyleBestSellingItem= styled(Card)`
    background: white;
    grid-area: top4;
    `;

export const StyleRevenueChart= styled(Card)`
    background: white;
    grid-area: chart1;
    `;

export const StyleOrderSummaryChart= styled(Card)`
    background: white;
    grid-area: chart2;
    `;


export const StyleOrderDataTable= styled(Card)`
    background: white;
    width: 100%;
    margin-top: 1rem;
    height: 30rem;
    `;

export const StyleHeader = styled.div`
   
    grid-area: header;
    font-weight: 600;
    font-size: 40px;
    padding-bottom: 10px;
    color: #262A41;
    

    `;








