import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./MonthlyProductSalesChart.css";
import moment from "moment";

function shortenLabelsPesos(value) {
  if (value >= 1000000) {
    return "P" + (value / 1000000).toFixed(1) + "m";
  } else if (value >= 1000) {
    return "P" + (value / 1000).toFixed(1) + "k";
  } else {
    return value;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueIncVat: ["wat"],
      yearProp: this.props.year.year,
      monthProp: this.props.month.month.toLowerCase().slice(0,3),

      currentWeekData: [
        {
          name: "",
          data: [
           
          ],
        }

      ],
      currentWeekNum: "January",
      currentWeek: "2022-12-01",
      currentWeekEnd: "2022-12-07",
      currentWeekDefault: "01",

      options: {
        colors: ["#ed1b2f", "#ffffff", "#ffffff"],

        grid: {
          borderColor: "#0401cf",
          padding: {
            left: 0,
            right: 0,
          },
          show: true, // you can either change hear to disable all grids
          xaxis: {
            lines: {
              show: false,
              //or just here to disable only x axis grids
            },
          },
        },
        dataLabels: {
          formatter: function (value) {
            return shortenLabelsPesos(value);
          },
          enabled: true
        },
        chart: {
          id: "basic-line",
          sparkline: {
            enabled: false,
          },
        },

        yaxis: {
          min: 0,
          max: 3000000,
          tickAmount: 5,
          labels: {
            formatter: function (value) {
              return shortenLabelsPesos(value);
            },
            style: {
              colors: "white",
              fontFamily: "Poppins",
              fontSize: "16px",
            },
          },
        },

        xaxis: {
          axisTicks: {
            color: "#363636",
          },
          categories: ["ADO", "ADO T", "E10", "KERO", "XCS", "XUB"],

          labels: {
            style: {
              colors: "white",
              fontFamily: "Poppins",
              fontSize: "16px",
            },
          },
        },
      },

      series: [

      ],
    };
  }

  //back and forward buttons

  moveBackward() {
    console.log(this.state.monthProp)
    if (this.state.currentWeek !== "2022-12-01") {
      const currentWeek = this.state.currentWeek;
      const currentWeekMoment = moment(currentWeek, "YYYY-MM-DD");
      const previousWeekMoment = currentWeekMoment.subtract(1, "week");
      const previousWeek = previousWeekMoment.format("YYYY-MM-DD");

      const nextWeekPrevMoment = previousWeekMoment.add(6, "days");
      const nextWeekPrev = nextWeekPrevMoment.format("YYYY-MM-DD");

      this.setState(
        {
          year: this.props.year.year,
          monthProp: this.props.month.month.toLowerCase().slice(0,3),
          currentWeek: previousWeek,
          currentWeekEnd: nextWeekPrev,
        }
      );
    }
  }

  moveForward() {
    if (this.state.currentWeek !== "2022-12-22") {
      const currentWeek = this.state.currentWeek;
      const currentWeekMoment = moment(currentWeek, "YYYY-MM-DD");
      const nextWeekMoment = currentWeekMoment.add(1, "week");
      const nextWeek = nextWeekMoment.format("YYYY-MM-DD");

      const currentWeekEnd = this.state.currentWeekEnd;
      const currentWeekEndMoment = moment(currentWeekEnd, "YYYY-MM-DD");
      const nextWeekEndMoment = currentWeekEndMoment.add(1, "week");
      const nextWeekEnd = nextWeekEndMoment.format("YYYY-MM-DD");

      this.setState(
        {
          year: this.props.year.year,
          monthProp: this.props.month.month.toLowerCase().slice(0,3),
          currentWeek: nextWeek,
          currentWeekEnd: nextWeekEnd,
        }
      );
    }
  }




  componentDidMount() {
   
    //fetch default data for currentWeekData at start

      this.setState({
      currentWeekEnd: "2022-12-07",
      currentWeekNum: "January",
      currentWeekData: [
        {
          name: "Week 1: 2022-12-01",
          data: [
            2000000,
            700000,
            600000,
            1300000,
            470000,
            1000000,
          ],
        },
      ],
    })
    
    
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (this.props.month !== prevProps.month || this.props.year !== prevProps.year) {
      this.setState({monthProp: this.props.month.month.toLowerCase().slice(0,3), yearProp: this.props.year.year});
    
      switch (this.state.currentWeek) {
        case "2022-12-01":

          this.setState({
            currentWeekEnd: "2022-12-07",
            currentWeekNum: "January",
            currentWeekData: [
              {
                name: "Week 1: 2022-12-01",
                data: [
                  800000,
                  700000,
                  400000,
                  2300000,
                  470000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            }
            
            ,
          });
          break;

        case "2022-12-08":
         
          this.setState({
            currentWeekEnd: "2022-12-14",
            currentWeekNum: "February",
            currentWeekData: [
              {
                name: "Week 2: 2022-12-08",
                data: [
                  700000,
                  800000,
                  900000,
                  1300000,
                  170000,
                  2000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;

        case "2022-12-15":
          this.setState({
            currentWeekEnd: "2022-12-21",
            currentWeekNum: "March",
            currentWeekData: [
              {
                name: "Week 3: 2022-12-15",
                data: [
                  400000,
                  500000,
                  900000,
                  2300000,
                  270000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;
        case "2022-12-22":
          this.setState({
            currentWeekEnd: "2022-12-28",
            currentWeekNum: "April",
            currentWeekData: [
              {
                name: "Week 4: 2022-12-08",
                data: [
                  800000,
                  700000,
                  400000,
                  2300000,
                  470000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;

        default:
          console.log("Error");
          break;
      }

    }


    
    if (this.state.currentWeek !== prevState.currentWeek) {

      switch (this.state.currentWeek) {
        case "2022-12-01":

          this.setState({
            currentWeekEnd: "2022-12-07",
            currentWeekNum: "January",
            currentWeekData: [
              {
                name: "Week 1: 2022-12-01",
                data: [
                  800000,
                  700000,
                  400000,
                  2300000,
                  470000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            }
            
            ,
          });
          break;

        case "2022-12-08":
         
          this.setState({
            currentWeekEnd: "2022-12-14",
            currentWeekNum: "February",
            currentWeekData: [
              {
                name: "Week 2: 2022-12-08",
                data: [
                  700000,
                  800000,
                  900000,
                  1300000,
                  170000,
                  2000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;

        case "2022-12-15":
          this.setState({
            currentWeekEnd: "2022-12-21",
            currentWeekNum: "March",
            currentWeekData: [
              {
                name: "Week 3: 2022-12-15",
                data: [
                  400000,
                  500000,
                  900000,
                  2300000,
                  270000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;
        case "2022-12-22":
          this.setState({
            currentWeekEnd: "2022-12-28",
            currentWeekNum: "April",
            currentWeekData: [
              {
                name: "Week 4: 2022-12-08",
                data: [
                  800000,
                  700000,
                  400000,
                  1300000,
                  470000,
                  1000000,
                ],
              },
            ],
            options: {
              ...this.state.options,
              colors: ["#ed1b2f", "#ffffff", "#ffffff"],
            },
          });
          break;

        default:
          console.log("Error");
          break;
      }

    }
  }

  render() {
    return (
      <div className="app">
        <div className="topBarSales">
          <div className="topLeft">
            <h1>{this.state.currentWeekNum}</h1>
            <h2>
              {this.state.currentWeek} → {this.state.currentWeekEnd}{" "}
            </h2>
          </div>

          <h1 className="titleSales">Monthly Product Sales</h1>
          <h2 className = "titleDayWeekSub1">(In Philippine Peso)</h2>
          <div className="nav-buttons">
            <button
              onClick={() => {
                this.moveBackward();
              }}
              type="button"
              className="backBt"
            >
              &lt;
            </button>
            <button
              onClick={() => {
                this.moveForward();
              }}
              type="button"
              className="forwardBt"
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.currentWeekData}
            type="area"
            width="610"
          />
        </div>
      </div>
    );
  }
}

export default App;
