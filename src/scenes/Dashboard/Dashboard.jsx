// Imports
import "./Dashboard.css"
import profileImg from './images/dp.jpg'
import {Grid, StyleHeader, StyleChart1, StyleChart2, StyleChart3, StyleChart4,StyleTable, StyleMonth, StyleMonthCard} from '../../components/Layout/Grid'
import Container from '../../components/Layout/Container'
import Table from "../../components/ContentComponents/Table/Table"
import logo from "./images/logo.png"

import WeeklyProductSales from '../../components/ContentComponents/WeeklyProductSales/WeeklyProductSales'
import WeeklyProductsSold from "../../components/ContentComponents/WeeklyProductsSold/WeeklyProductsSold"
import DailyProductSales from "../../components/ContentComponents/DailyProductSales/DailyProductSales"
import DailyProductsSold from "../../components/ContentComponents/DailyProductsSold/DailyProductsSold"

import React from "react";
import { Component } from "react";





class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      month: "December",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      year: "2022",
      years:[
        "2022",
        "2021",
        "2020",
        "2019",
        "2018"
      ]
    };
  }

  moveBackward() {
    let currentIndex = this.state.months.indexOf(this.state.month);
    if (currentIndex !== 0) {
      this.setState({
        month: this.state.months[currentIndex - 1],
      });
    }
  }

  moveForward() {
    let currentIndex = this.state.months.indexOf(this.state.month);
    if (currentIndex !== 11) {
      this.setState({
        month: this.state.months[currentIndex + 1],
      });
    }
  }

  render() {
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

                <StyleMonthCard>
                  <StyleMonth>

                    <button
                      onClick={() => {
                        this.moveBackward();
                      }}
                      type="button"
                      className="backBtRoot"
                    >
                      &lt;
                    </button>

                    
                    <button
                      onClick={() => {
                        this.moveForward();
                      }}
                      type="button"
                      className="forwardBtRoot"
                    >
                      &gt;
                    </button>
                    {this.state.month} {this.state.year}

                  </StyleMonth>
                </StyleMonthCard>

              </StyleHeader>

              <StyleChart1>
                <WeeklyProductSales month = {this.state.month}/>
              </StyleChart1>

              <StyleChart2>
                <WeeklyProductsSold month = {this.state.month}/>
              </StyleChart2>

              <StyleChart3>
                <DailyProductSales month = {this.state.month}/>
              </StyleChart3>

              <StyleChart4>
                <DailyProductsSold month = {this.state.month}/>
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
}

export default Dashboard;