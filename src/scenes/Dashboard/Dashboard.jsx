// Imports
import "./Dashboard.css"
import profileImg from './images/dp.jpg'
import {Grid, StyleHeader1, StyleHeader2, StyleHeader3, StyleChart1, StyleChart2, StyleChart3, StyleChart4, StyleChart5, StyleChart6, StyleChart7, StyleChart8, StyleTable} from '../../components/Layout/Grid'
import Container from '../../components/Layout/Container'
import Table from "../../components/ContentComponents/Table/Table"
import logo from "./images/logo.png"

import WeeklyProductSales from '../../components/ContentComponents/WeeklyProductSales/WeeklyProductSales'
import WeeklyProductsSold from "../../components/ContentComponents/WeeklyProductsSold/WeeklyProductsSold"
import DailyProductSales from "../../components/ContentComponents/DailyProductSales/DailyProductSales"
import DailyProductsSold from "../../components/ContentComponents/DailyProductsSold/DailyProductsSold"
import WeeklyYearlyProductSales from "../../components/ContentComponents/WeeklyYearlyProductSales/WeeklyYearlyProductSales"
import WeeklyYearlyProductsSold from "../../components/ContentComponents/WeeklyYearlyProductsSold/WeeklyYearlyProductsSold"
import MonthlyProductSales from "../../components/ContentComponents/MonthlyProductSales/MonthlyProductSales"
import MonthlyProductsSold from "../../components/ContentComponents/MonthlyProductsSold/MonthlyProductsSold"


import React from "react";
import { Component } from "react";





class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      toggled: "Monthly",
      toggles: ["Monthly", "Yearly"],
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
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
      ]
    };
  }

  moveBackwardMonth() {
    let currentIndex = this.state.months.indexOf(this.state.month);
    if (currentIndex !== 0) {
      this.setState({
        month: this.state.months[currentIndex - 1],
      });
    }
  }

  moveForwardMonth() {
    let currentIndex = this.state.months.indexOf(this.state.month);
    if (currentIndex !== 11) {
      this.setState({
        month: this.state.months[currentIndex + 1],
      });
    }
  }

  moveBackwardYear() {
    let currentIndex = this.state.years.indexOf(this.state.year);
    if (currentIndex !== 0) {
      this.setState({
        year: this.state.years[currentIndex - 1],
      });
    }
  }

  moveForwardYear() {
    let currentIndex = this.state.years.indexOf(this.state.year);
    if (currentIndex !== 4) {
      this.setState({
        year: this.state.years[currentIndex + 1],
      });
    }
  }

  moveBackwardNav() {
    let currentIndex = this.state.toggles.indexOf(this.state.toggled);
    if (currentIndex !== 0) {
      this.setState({
        toggled: this.state.toggles[currentIndex - 1],
      });
    }
  }
      
  moveForwardNav() {
    let currentIndex = this.state.toggles.indexOf(this.state.toggled);
    if (currentIndex !== 1) {
      this.setState({
        toggled: this.state.toggles[currentIndex + 1],
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

          {this.state.toggled === "Monthly" ? 
            <Grid>


            {this.state.toggled === "Monthly" ? 
                <div>

                  <StyleHeader1>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "navContainer">


                        <div className = "navButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardNav();
                            }}
                            type="button"
                            className="backBtRootNav"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardNav();
                            }}
                            type="button"
                            className="forwardBtRootNav"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleNav">
                        <div className = "">{this.state.toggled}</div>
                      </div>              
                  </StyleHeader1>

                  <StyleHeader2>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "monthContainer">


                        <div className = "monthButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardMonth();
                            }}
                            type="button"
                            className="backBtRootMonth"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardMonth();
                            }}
                            type="button"
                            className="forwardBtRootMonth"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleMonth">
                        <div className = "">{this.state.month}</div>
                      </div>              
                  </StyleHeader2>

                  <StyleHeader3>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "yearContainer">


                        <div className = "yearButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardYear();
                            }}
                            type="button"
                            className="backBtRootYear"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardYear();
                            }}
                            type="button"
                            className="forwardBtRootYear"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleyear">
                        <div className = "">{this.state.year}</div>
                      </div>              
                  </StyleHeader3>

                  <div className="vl"></div>

                </div>
              : null}

              {this.state.toggled === "Yearly" ? 
                <div>
                   <StyleHeader1>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "navContainer">


                        <div className = "navButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardNav();
                            }}
                            type="button"
                            className="backBtRootNav"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardNav();
                            }}
                            type="button"
                            className="forwardBtRootNav"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleNav">
                        <div className = "">{this.state.toggled}</div>
                      </div>              
                   </StyleHeader1>

                   <StyleHeader3>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "yearContainer">


                        <div className = "yearButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardYear();
                            }}
                            type="button"
                            className="backBtRootYear"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardYear();
                            }}
                            type="button"
                            className="forwardBtRootYear"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleyear">
                        <div className = "">{this.state.year}</div>
                      </div>              
                  </StyleHeader3>
                </div>
              : null}

              <StyleChart1>
                <WeeklyProductSales month = {this.state.month} year = {this.state.year}/>
              </StyleChart1>

              <StyleChart2>
                <WeeklyProductsSold month = {this.state.month} year = {this.state.year}/>
              </StyleChart2>

              <StyleChart3>
                <DailyProductSales month = {this.state.month} year = {this.state.year}/>
              </StyleChart3>

              <StyleChart4>
                <DailyProductsSold month = {this.state.month} year = {this.state.year}/>
              </StyleChart4>


            </Grid>
            : null}


          {this.state.toggled === "Yearly" ? 

            <Grid>

            {this.state.toggled === "Monthly" ? 
                <div>

                  <StyleHeader1>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "navContainer">


                        <div className = "navButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardNav();
                            }}
                            type="button"
                            className="backBtRootNav"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardNav();
                            }}
                            type="button"
                            className="forwardBtRootNav"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleNav">
                        <div className = "">{this.state.toggled}</div>
                      </div>              
                  </StyleHeader1>

                  <StyleHeader2>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "monthContainer">


                        <div className = "monthButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardMonth();
                            }}
                            type="button"
                            className="backBtRootMonth"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardMonth();
                            }}
                            type="button"
                            className="forwardBtRootMonth"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleMonth">
                        <div className = "">{this.state.month}</div>
                      </div>              
                  </StyleHeader2>

                  <StyleHeader3>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "yearContainer">


                        <div className = "yearButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardYear();
                            }}
                            type="button"
                            className="backBtRootYear"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardYear();
                            }}
                            type="button"
                            className="forwardBtRootYear"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleyear">
                        <div className = "">{this.state.year}</div>
                      </div>              
                  </StyleHeader3>

                  <div className="vl"></div>

                </div>
              : null}

              {this.state.toggled === "Yearly" ? 
                <div>
                   <StyleHeader1>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "navContainer">


                        <div className = "navButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardNav();
                            }}
                            type="button"
                            className="backBtRootNav"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardNav();
                            }}
                            type="button"
                            className="forwardBtRootNav"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleNav">
                        <div className = "">{this.state.toggled}</div>
                      </div>              
                   </StyleHeader1>

                   <StyleHeader3>
                    <img className="logo" src={logo} alt="" />DASHBOARD
                    <div className = "yearContainer">


                        <div className = "yearButtons">

                          <button
                            onClick={() => {
                              this.moveBackwardYear();
                            }}
                            type="button"
                            className="backBtRootYear"
                          >
                            &lt;
                          </button>

              
                          <button
                            onClick={() => {
                              this.moveForwardYear();
                            }}
                            type="button"
                            className="forwardBtRootYear"
                          >
                            &gt;
                          </button>
              
                        </div>
                      </div>  

                      <div className = "titleyear">
                        <div className = "">{this.state.year}</div>
                      </div>              
                  </StyleHeader3>
                </div>
              : null}

              <StyleChart5>
                <MonthlyProductSales month = {this.state.month} year = {this.state.year}/>
              </StyleChart5>

              <StyleChart6>
                <MonthlyProductsSold month = {this.state.month} year = {this.state.year}/>
              </StyleChart6>

              {/* <StyleChart7>
                <WeeklyYearlyProductSales month = {this.state.month} year = {this.state.year}/>
              </StyleChart7>

              <StyleChart8>
                <WeeklyYearlyProductsSold month = {this.state.month} year = {this.state.year}/>
              </StyleChart8> */}


            </Grid>
            : null}
            

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