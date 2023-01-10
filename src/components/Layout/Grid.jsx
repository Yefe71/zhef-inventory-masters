import styled from "styled-components"
import Card from "./CardParent";
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 0.3fr 2.3fr 2.3fr 2.3fr 2.3fr;
    
        
    grid-template-areas:
    "header header header header"
    /* "top1 top2 top3 top4" */
    "chart1 chart1 chart2 chart2"
    "chart1 chart1 chart2 chart2"
    "chart3 chart3 chart4 chart4"
    "chart3 chart3 chart4 chart4"
    ;
    gap: 1rem;
    `;

export const StyleTotalRevenue= styled(Card)`
    grid-area: top1;
    padding: 0;
    

    
    
    `;

export const StyleTotalOrders= styled(Card)`
    grid-area: top2;
    padding: 0;

    `;


export const StyleNewCustomers= styled(Card)`
    grid-area: top3;
    padding: 0;

    `;

export const StyleBestSellingItem= styled(Card)`
    grid-area: top4;
    padding: 0;
    `;

export const StyleRevenueChart= styled(Card)`
    background: #1c2473;
    grid-area: chart1;
    `;

export const StyleOrderSummaryChart= styled(Card)`
    background: #1c2473;
    grid-area: chart2;
    `;

export const StyleDaysChart= styled(Card)`
    background: #1c2473;
    grid-area: chart3;
    `;

export const StyleDaysChart2= styled(Card)`
    background: #1c2473;
    grid-area: chart4;
    `;


export const StyleOrderDataTable= styled(Card)`
    background: #1c2473;
    width: 100%;
    margin-top: 1rem;
 
    box-shadow: 0 0 0 6 8px #ccc   `;

export const StyleHeader = styled.div`
   
    span.red {
        color: #dc001e;
      }

    grid-area: header;
    font-weight: 800;
    font-size: 40px;
    

    color: #1c2473;
    

    `;










