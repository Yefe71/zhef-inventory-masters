// Imports
import "./Dashboard.css"
import profileImg from './images/dp.jpg'
import {Grid, StyleTotalRevenue, StyleTotalOrders, StyleNewCustomers, StyleBestSellingItem, StyleHeader, StyleRevenueChart, StyleOrderSummaryChart, StyleOrderDataTable} from '../../components/Layout/Grid'
import Container from '../../components/Layout/Container'
import TotalRevenue from "../../components/ContentComponents/TotalRevenue/TotalRevenue"
import Revenue from '../../components/ContentComponents/Revenue/Revenue'
import OrderDataTable from '../../components/ContentComponents/OrderDataTable/OrderDataTable'
import OrderSummary from '../../components/ContentComponents/OrderSummary/OrderSummary'
import TotalOrders from "../../components/ContentComponents/TotalOrders/TotalOrders"
import NewCustomers from "../../components/ContentComponents/NewCustomers/NewCustomers"
import BestSellingItem from "../../components/ContentComponents/BestSellingItem/BestSellingItem"
import MostPopularTime from "../../components/ContentComponents/MostPopularTime/MostPopularTime"
import Table from "../../components/ContentComponents/Table/Table"


const Dashboard = () => {

    return (
        
        <div>
            <div className="wrapper">
                <div className="aside-container">
                  <div className="info-container">
                    <img src={profileImg} alt="" />
                    <h1 className="username">Zhef</h1>
                    <h3 className="email">zhef71@gmail.com</h3>
                  </div>
                  <div className="nav-links">
                    <li>
                      <ul><p className='p1 pointer'>Dashboard</p></ul>
                      <ul><p className='p2 pointer'>About Us</p></ul>
                      <ul><p className='p3 pointer'>Signout</p></ul>
                    </li>
                  </div>
                </div>

                <Container>

                  <Grid>
                    <StyleHeader>Dashboard</StyleHeader>
                    <StyleTotalRevenue> <TotalRevenue/> </StyleTotalRevenue>
                    <StyleTotalOrders>  <TotalOrders/> </StyleTotalOrders>   
                    <StyleNewCustomers> <NewCustomers/></StyleNewCustomers>
                    <StyleBestSellingItem> <BestSellingItem/> </StyleBestSellingItem>
                    {/*  

                     

                    

                    <StyleBestSellingItem>  </StyleBestSellingItem> */}

                    <StyleRevenueChart> <Revenue/> </StyleRevenueChart>

                    <StyleOrderSummaryChart> <MostPopularTime/> </StyleOrderSummaryChart>

                  </Grid>
                   
                  <StyleOrderDataTable> <Table/> </StyleOrderDataTable>

                </Container>
              </div>
        </div>
    )

}


export default Dashboard;