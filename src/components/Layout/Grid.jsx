import styled from "styled-components"
import Card from "./CardParent";
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1.3fr 2.3fr 2.3fr 2.3fr 2.3fr;
    position: relative;
        
    grid-template-areas:
    "header header header header"
    "chart1 chart1 chart2 chart2"
    "chart1 chart1 chart2 chart2"
    "chart3 chart3 chart4 chart4"
    "chart3 chart3 chart4 chart4"
    ;
    gap: 1rem;
    `;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1.3fr 2.3fr 2.3fr;
  position: relative;

  grid-template-areas:
    "header header header header"
    "chart1 chart1 chart2 chart2"
    "chart1 chart1 chart2 chart2";
  gap: 1rem;
`;

export const StyleTotalRevenue= styled(Card)`
    grid-area: top1;
    padding: 0;

    `;

export const StyleTable = styled(Card)`
  background: #1c2473;
  width: 100%;
  margin-top: 1rem;

  box-shadow: 0 0 0 6 8px #ccc;
`;

export const StyleHeader1 = styled.div`
  position: absolute;
  grid-area: header;
  font-weight: 800;
  font-size: 40px;
  color: #1c2473;
`;

export const StyleHeader2 = styled.div`
  position: absolute;
  grid-area: header;
  font-weight: 800;
  font-size: 40px;
  color: #1c2473;
`;

export const StyleHeader3 = styled.div`
  position: absolute;
  grid-area: header;
  font-weight: 800;
  font-size: 40px;
  color: #1c2473;
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

export const StyleChart1= styled(Card)`
    background: #1c2473;
    grid-area: chart1;
    `;

export const StyleChart2= styled(Card)`
    background: #1c2473;
    grid-area: chart2;
    `;

export const StyleChart3= styled(Card)`
    background: #1c2473;
    grid-area: chart3;
    `;

export const StyleChart4= styled(Card)`
    background: #1c2473;
    grid-area: chart4;
    `;


export const StyleChart5= styled(Card)`
    background: #1c2473;
    grid-area: chart1;
    `;

export const StyleChart6= styled(Card)`
    background: #1c2473;
    grid-area: chart2;
    `;

export const StyleChart7= styled(Card)`
    background: #1c2473;
    grid-area: chart3;
    `;

export const StyleChart8= styled(Card)`
    background: #1c2473;
    grid-area: chart4;
    `;


export const StyleMonthCard = styled.div`


`;












