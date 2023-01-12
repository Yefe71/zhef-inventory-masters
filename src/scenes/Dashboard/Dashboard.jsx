// Imports
import "./Dashboard.css"
import profileImg from './images/dp.jpg'
import {Grid, StyleHeader, StyleChart1, StyleChart2, StyleChart3, StyleChart4,StyleTable} from '../../components/Layout/Grid'
import Container from '../../components/Layout/Container'
import Table from "../../components/ContentComponents/Table/Table"
import logo from "./images/logo.png"

import TopProductSales from '../../components/ContentComponents/TopProductSales/TopProductSales'
import TopProductsSold from "../../components/ContentComponents/TopProductsSold/TopProductsSold"
import DailyProductSales from "../../components/ContentComponents/DailyProductSales/DailyProductSales"
import DailyProductsSold from "../../components/ContentComponents/DailyProductsSold/DailyProductsSold"



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
                <ul>
                  <p className="p1 pointer">Dashboard</p>
                </ul>
                <ul>
                  <p className="p2 pointer">About Us</p>
                </ul>
                <ul>
                  <p className="p3 pointer">Signout</p>
                </ul>
              </li>
            </div>
          </div>

          <Container>

            <Grid>

                <StyleHeader>                
                  <img className="logo" src={logo} alt="" />DASHBOARD
                  
                </StyleHeader>

                <StyleChart1>
                  <TopProductSales />
                </StyleChart1>

                <StyleChart2>
                  <TopProductsSold />
                </StyleChart2>

                <StyleChart3>
                  <DailyProductSales />
                </StyleChart3>

                <StyleChart4>
                  <DailyProductsSold />
                </StyleChart4>

            </Grid>

                <StyleTable>
                  <Table />
                </StyleTable>

          </Container>
        </div>
      </div>
    );

}


export default Dashboard;