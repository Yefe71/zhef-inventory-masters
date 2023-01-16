import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./YearlyProductsSoldChart.css";


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
          
      series: [100, 55, 13, 43, 22, 22,],
      options: {
        colors: ["#3498db", "#2ecc71", "#f1c40f", "#e74c3c", "#9b59b6", "#ffa600"],
        chart: {
          width: 380,
          type: 'pie',
          foreColor: '#fff'
        },
        labels: ['ADO', 'ADO T', 'E10', 'KERO', 'XCS', 'XUB'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: true
            }
          }
        }]
      },
          
          
    };
  }

  //back and forward buttons


  moveBackward() {
    let currentIndex = this.state.monthRanges.indexOf(this.state.currentMonth);
    if (currentIndex !== 0) {
      this.setState({
        yearProp: this.props.year.year,
        currentMonth: this.state.monthRanges[currentIndex - 1],
      }, () => {

        if (this.state.yearProp === "2022"){
        console.log("2022")
          switch (this.state.currentMonth) {

            case "2022-01-01 → 2022-01-28":
              this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "January",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      2500000 * 4,
                      700000 * 4,
                      400000 * 4,
                      1300000 * 4,
                      470000 * 4,
                      1000000 * 4,
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

            case "2022-02-01 → 2022-02-28":
            
              this.setState({
                currentWeekEnd: "2022-12-14",
                currentWeekNum: "February",
                currentWeekData: [
                  {
                    name: "Week 2: 2022-12-08",
                    data: [
                      2200000 * 4,
                      800000 * 4,
                      900000 * 4,
                      1100000 * 4,
                      170000 * 4,
                      2000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

            case "2022-03-01 → 2022-03-28":
              this.setState({
                currentWeekEnd: "2022-12-21",
                currentWeekNum: "March",
                currentWeekData: [
                  {
                    name: "Week 3: 2022-12-15",
                    data: [
                      2600000 * 4,
                      500000 * 4,
                      900000 * 4,
                      1400000 * 4,
                      270000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

              
            case "2022-04-01 → 2022-04-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "April",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 4,
                      400000 * 4,
                      1800000 * 4,
                      470000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-05-01 → 2022-05-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "May",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 4,
                      800000 * 4,
                      900000 * 4,
                      1100000 * 4,
                      870000 * 4,
                      800000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-06-01 → 2022-06-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "June",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 4,
                      900000 * 4,
                      200000 * 4,
                      870000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-07-01 → 2022-07-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "July",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 4,
                      800000 * 4,
                      900000 * 4,
                      1100000 * 4,
                      870000 * 4,
                      800000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-08-01 → 2022-08-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "August",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 4,
                      400000 * 4,
                      1800000 * 4,
                      470000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-09-01 → 2022-09-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "September",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 4,
                      500000 * 4,
                      900000 * 4,
                      1400000 * 4,
                      270000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-10-01 → 2022-10-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "October",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 4,
                      400000 * 4,
                      1800000 * 4,
                      470000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-11-01 → 2022-11-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "November",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 4,
                      900000 * 4,
                      200000 * 4,
                      870000 * 4,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-12-01 → 2022-12-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "December",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 4,
                      500000 * 4,
                      900000 * 4,
                      1400000 * 4,
                      270000 * 4,
                      1000000 * 4,
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
      
        if (this.state.yearProp === "2021"){
          console.log("2021")
          switch (this.state.currentMonth) {

            case "2022-01-01 → 2022-01-28":
              this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "January",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      340000 * 3,
                      700000 * 2,
                      400000 * 3,
                      1300000 * 3,
                      470000 * 2,
                      1000000 * 3,
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

            case "2022-02-01 → 2022-02-28":
            
              this.setState({
                currentWeekEnd: "2022-12-14",
                currentWeekNum: "February",
                currentWeekData: [
                  {
                    name: "Week 2: 2022-12-08",
                    data: [
                      2200000 * 3,
                      800000 * 2,
                      900000 * 4,
                      1100000 * 1,
                      170000 * 2,
                      2000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

            case "2022-03-01 → 2022-03-28":
              this.setState({
                currentWeekEnd: "2022-12-21",
                currentWeekNum: "March",
                currentWeekData: [
                  {
                    name: "Week 3: 2022-12-15",
                    data: [
                      2600000 * 4,
                      500000 * 2,
                      900000 * 4,
                      1400000 * 3,
                      270000 * 1,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

              
            case "2022-04-01 → 2022-04-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "April",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 2,
                      400000 * 1,
                      1800000 * 4,
                      470000 * 3,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-05-01 → 2022-05-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "May",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 3,
                      800000 * 2,
                      900000 * 3,
                      1100000 * 2,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-06-01 → 2022-06-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "June",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 3,
                      900000 * 2,
                      200000 * 3,
                      870000 * 2,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-07-01 → 2022-07-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "July",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 2,
                      800000 * 3,
                      900000 * 2,
                      1100000 * 4,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-08-01 → 2022-08-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "August",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 4,
                      400000 * 2,
                      1800000 * 2,
                      470000 * 4,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-09-01 → 2022-09-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "September",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 3,
                      500000 * 4,
                      900000 * 2,
                      1400000 * 3,
                      270000 * 2,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-10-01 → 2022-10-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "October",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 3,
                      400000 * 2,
                      1800000 * 2,
                      470000 * 1,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-11-01 → 2022-11-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "November",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 2,
                      900000 * 3,
                      200000 * 2,
                      870000 * 4,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-12-01 → 2022-12-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "December",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 3,
                      500000 * 4,
                      900000 * 2,
                      1400000 * 1,
                      270000 * 3,
                      1000000 * 4,
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
      
        if (this.state.yearProp === "2020"){
          console.log("2020")
          switch (this.state.currentMonth) {

            case "2022-01-01 → 2022-01-28":
              this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "January",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      2500000 * 4,
                      700000 * 3,
                      400000 * 2,
                      1300000 * 3,
                      470000 * 2,
                      1000000 * 2,
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

            case "2022-02-01 → 2022-02-28":
            
              this.setState({
                currentWeekEnd: "2022-12-14",
                currentWeekNum: "February",
                currentWeekData: [
                  {
                    name: "Week 2: 2022-12-08",
                    data: [
                      2200000 * 2,
                      800000 * 4,
                      900000 * 3,
                      1100000 * 4,
                      170000 * 2,
                      2000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

            case "2022-03-01 → 2022-03-28":
              this.setState({
                currentWeekEnd: "2022-12-21",
                currentWeekNum: "March",
                currentWeekData: [
                  {
                    name: "Week 3: 2022-12-15",
                    data: [
                      2600000 * 4,
                      500000 * 3,
                      900000 * 2,
                      1400000 * 4,
                      270000 * 3,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

              
            case "2022-04-01 → 2022-04-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "April",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 3,
                      400000 * 4,
                      1800000 * 2,
                      470000 * 2,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-05-01 → 2022-05-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "May",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 3,
                      800000 * 4,
                      900000 * 2,
                      1100000 * 3,
                      870000 * 4,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-06-01 → 2022-06-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "June",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 3,
                      1700000 * 2,
                      900000 * 4,
                      200000 * 2,
                      870000 * 3,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-07-01 → 2022-07-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "July",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 4,
                      800000 * 3,
                      900000 * 2,
                      1100000 * 1,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-08-01 → 2022-08-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "August",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 2,
                      400000 * 3,
                      1800000 * 2,
                      470000 * 1,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-09-01 → 2022-09-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "September",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 4,
                      500000 * 3,
                      900000 * 2,
                      1400000 * 1,
                      270000 * 4,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-10-01 → 2022-10-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "October",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 4,
                      400000 * 2,
                      1800000 * 1,
                      470000 * 3,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-11-01 → 2022-11-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "November",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 2,
                      900000 * 3,
                      200000 * 4,
                      870000 * 2,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-12-01 → 2022-12-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "December",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 4,
                      500000 * 2,
                      900000 * 3,
                      1400000 * 4,
                      270000 * 2,
                      1000000 * 1,
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
      
        if (this.state.yearProp === "2019"){
          console.log(2019)
          switch (this.state.currentMonth) {

            case "2022-01-01 → 2022-01-28":
              this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "January",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      2500000 * 4,
                      700000 * 3,
                      400000 * 2,
                      1300000 * 4,
                      470000 * 3,
                      1000000 * 1,
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

            case "2022-02-01 → 2022-02-28":
            
              this.setState({
                currentWeekEnd: "2022-12-14",
                currentWeekNum: "February",
                currentWeekData: [
                  {
                    name: "Week 2: 2022-12-08",
                    data: [
                      2200000 * 4,
                      800000 * 3,
                      900000 * 2,
                      1100000 * 1,
                      170000 * 4,
                      2000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

            case "2022-03-01 → 2022-03-28":
              this.setState({
                currentWeekEnd: "2022-12-21",
                currentWeekNum: "March",
                currentWeekData: [
                  {
                    name: "Week 3: 2022-12-15",
                    data: [
                      2600000 *3,
                      500000 * 2,
                      900000 * 3,
                      1400000 * 4,
                      270000 * 2,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

              
            case "2022-04-01 → 2022-04-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "April",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 4,
                      400000 * 2,
                      1800000 * 1,
                      470000 * 3,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-05-01 → 2022-05-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "May",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 2,
                      800000 * 3,
                      900000 * 4,
                      1100000 * 2,
                      870000 * 4,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-06-01 → 2022-06-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "June",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 2,
                      900000 * 3,
                      200000 * 2,
                      870000 * 1,
                      1000000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-07-01 → 2022-07-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "July",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 3,
                      800000 * 4,
                      900000 * 3,
                      1100000 * 2,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-08-01 → 2022-08-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "August",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 2,
                      400000 * 4,
                      1800000 * 4,
                      470000 * 2,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-09-01 → 2022-09-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "September",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 3,
                      500000 * 4,
                      900000 * 2,
                      1400000 * 3,
                      270000 * 4,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-10-01 → 2022-10-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "October",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 2,
                      400000 * 4,
                      1800000 * 2,
                      470000 * 3,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-11-01 → 2022-11-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "November",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 2,
                      1700000 * 3,
                      900000 * 4,
                      200000 * 2,
                      870000 * 1,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-12-01 → 2022-12-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "December",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 4,
                      500000 * 3,
                      900000 * 2,
                      1400000 * 4,
                      270000 * 3,
                      1000000 * 2,
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
      
        if (this.state.yearProp === "2018"){
          console.log("2021")
          switch (this.state.currentMonth) {

            case "2022-01-01 → 2022-01-28":
              this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "January",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      340000 * 3,
                      700000 * 2,
                      400000 * 3,
                      1300000 * 3,
                      470000 * 2,
                      1000000 * 3,
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

            case "2022-02-01 → 2022-02-28":
            
              this.setState({
                currentWeekEnd: "2022-12-14",
                currentWeekNum: "February",
                currentWeekData: [
                  {
                    name: "Week 2: 2022-12-08",
                    data: [
                      2200000 * 3,
                      800000 * 2,
                      900000 * 4,
                      1100000 * 1,
                      170000 * 2,
                      2000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

            case "2022-03-01 → 2022-03-28":
              this.setState({
                currentWeekEnd: "2022-12-21",
                currentWeekNum: "March",
                currentWeekData: [
                  {
                    name: "Week 3: 2022-12-15",
                    data: [
                      2600000 * 4,
                      500000 * 2,
                      900000 * 4,
                      1400000 * 3,
                      270000 * 1,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;

              
            case "2022-04-01 → 2022-04-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "April",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 2,
                      400000 * 1,
                      1800000 * 4,
                      470000 * 3,
                      1000000 * 1,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-05-01 → 2022-05-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "May",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 3,
                      800000 * 2,
                      900000 * 3,
                      1100000 * 2,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-06-01 → 2022-06-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "June",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 3,
                      900000 * 2,
                      200000 * 3,
                      870000 * 2,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-07-01 → 2022-07-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "July",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2800000 * 2,
                      800000 * 3,
                      900000 * 2,
                      1100000 * 4,
                      870000 * 3,
                      800000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-08-01 → 2022-08-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "August",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 3,
                      700000 * 4,
                      400000 * 2,
                      1800000 * 2,
                      470000 * 4,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-09-01 → 2022-09-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "September",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 3,
                      500000 * 4,
                      900000 * 2,
                      1400000 * 3,
                      270000 * 2,
                      1000000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-10-01 → 2022-10-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "October",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2500000 * 4,
                      700000 * 3,
                      400000 * 2,
                      1800000 * 2,
                      470000 * 1,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-11-01 → 2022-11-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "November",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2700000 * 4,
                      1700000 * 2,
                      900000 * 3,
                      200000 * 2,
                      870000 * 4,
                      1000000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                },
              });
              break;
              
            case "2022-12-01 → 2022-12-28":
              this.setState({
                currentWeekEnd: "2022-12-28",
                currentWeekNum: "December",
                currentWeekData: [
                  {
                    name: "Week 4: 2022-12-08",
                    data: [
                      2600000 * 3,
                      500000 * 4,
                      900000 * 2,
                      1400000 * 1,
                      270000 * 3,
                      1000000 * 4,
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


      });
    }
    
  }

  moveForward() {
    let currentIndex = this.state.monthRanges.indexOf(this.state.currentMonth);
    if (currentIndex !== 11) {
      this.setState({
        yearProp: this.props.year.year,
        currentMonth: this.state.monthRanges[currentIndex + 1],
       
      }, () => {

        if (this.state.yearProp === "2022"){
          console.log("2022")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1300000 * 4,
                        470000 * 4,
                        1000000 * 4,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        170000 * 4,
                        2000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        870000 * 4,
                        800000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 4,
                        900000 * 4,
                        200000 * 4,
                        870000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        870000 * 4,
                        800000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 4,
                        900000 * 4,
                        200000 * 4,
                        870000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
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
        
          if (this.state.yearProp === "2021"){
            console.log("2021")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        340000 * 3,
                        700000 * 2,
                        400000 * 3,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 3,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 3,
                        800000 * 2,
                        900000 * 4,
                        1100000 * 1,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 4,
                        1400000 * 3,
                        270000 * 1,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 1,
                        1800000 * 4,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 2,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 3,
                        900000 * 2,
                        200000 * 3,
                        870000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 4,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 3,
                        1000000 * 4,
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
        
          if (this.state.yearProp === "2020"){
            console.log("2020")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 2,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 2,
                        800000 * 4,
                        900000 * 3,
                        1100000 * 4,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 4,
                        270000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 4,
                        1800000 * 2,
                        470000 * 2,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 4,
                        900000 * 2,
                        1100000 * 3,
                        870000 * 4,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 3,
                        1700000 * 2,
                        900000 * 4,
                        200000 * 2,
                        870000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 1,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 2,
                        400000 * 3,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 1,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 4,
                        870000 * 2,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 3,
                        1400000 * 4,
                        270000 * 2,
                        1000000 * 1,
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
        
          if (this.state.yearProp === "2019"){
            console.log(2019)
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1300000 * 4,
                        470000 * 3,
                        1000000 * 1,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 4,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 1,
                        170000 * 4,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 *3,
                        500000 * 2,
                        900000 * 3,
                        1400000 * 4,
                        270000 * 2,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 1,
                        470000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 4,
                        1100000 * 2,
                        870000 * 4,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 1,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 4,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 4,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 4,
                        1800000 * 2,
                        470000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 2,
                        1700000 * 3,
                        900000 * 4,
                        200000 * 2,
                        870000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 4,
                        270000 * 3,
                        1000000 * 2,
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
        
          if (this.state.yearProp === "2018"){
            console.log("2021")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        340000 * 3,
                        700000 * 2,
                        400000 * 3,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 3,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 3,
                        800000 * 2,
                        900000 * 4,
                        1100000 * 1,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 4,
                        1400000 * 3,
                        270000 * 1,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 1,
                        1800000 * 4,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 2,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 3,
                        900000 * 2,
                        200000 * 3,
                        870000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 4,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 3,
                        1000000 * 4,
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

        
      });
    }
    console.log(this.state.yearProp)
  }






  componentDidMount() {
   
    //fetch default data for currentWeekData at start

      this.setState({
      yearProp: this.props.year.year,
      currentWeekEnd: "2022-01-28",
      currentWeekNum: "January",
      currentWeekData: [
        {
          name: "Week 1: 2022-12-01",
          data: [
            2000000 * 4,
            700000 * 4,
            600000 * 4,
            1300000 * 4,
            470000 * 4,
            1000000 * 4,
          ],
        },
      ],
    })
    

    
    
  }

  componentDidUpdate(prevProps, prevState) {
  

    if (prevProps.year !== this.props.year) {
      this.setState({ yearProp: this.props.year.year }, () => {

        if (this.state.yearProp === "2022"){
          console.log("2022")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1300000 * 4,
                        470000 * 4,
                        1000000 * 4,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        170000 * 4,
                        2000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        870000 * 4,
                        800000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 4,
                        900000 * 4,
                        200000 * 4,
                        870000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 4,
                        900000 * 4,
                        1100000 * 4,
                        870000 * 4,
                        800000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 4,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 4,
                        900000 * 4,
                        200000 * 4,
                        870000 * 4,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 4,
                        900000 * 4,
                        1400000 * 4,
                        270000 * 4,
                        1000000 * 4,
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
        
          if (this.state.yearProp === "2021"){
            console.log("2021")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        340000 * 3,
                        700000 * 2,
                        400000 * 3,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 3,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 3,
                        800000 * 2,
                        900000 * 4,
                        1100000 * 1,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 4,
                        1400000 * 3,
                        270000 * 1,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 1,
                        1800000 * 4,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 2,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 3,
                        900000 * 2,
                        200000 * 3,
                        870000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 4,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 3,
                        1000000 * 4,
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
        
          if (this.state.yearProp === "2020"){
            console.log("2020")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 2,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 2,
                        800000 * 4,
                        900000 * 3,
                        1100000 * 4,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 4,
                        270000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 4,
                        1800000 * 2,
                        470000 * 2,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 4,
                        900000 * 2,
                        1100000 * 3,
                        870000 * 4,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 3,
                        1700000 * 2,
                        900000 * 4,
                        200000 * 2,
                        870000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 4,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 1,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 2,
                        400000 * 3,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 1,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 4,
                        870000 * 2,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 3,
                        1400000 * 4,
                        270000 * 2,
                        1000000 * 1,
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
        
          if (this.state.yearProp === "2019"){
            console.log(2019)
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1300000 * 4,
                        470000 * 3,
                        1000000 * 1,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 4,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 1,
                        170000 * 4,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 *3,
                        500000 * 2,
                        900000 * 3,
                        1400000 * 4,
                        270000 * 2,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 1,
                        470000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 4,
                        1100000 * 2,
                        870000 * 4,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 1,
                        1000000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 4,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 4,
                        1800000 * 4,
                        470000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 4,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 4,
                        1800000 * 2,
                        470000 * 3,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 2,
                        1700000 * 3,
                        900000 * 4,
                        200000 * 2,
                        870000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 4,
                        500000 * 3,
                        900000 * 2,
                        1400000 * 4,
                        270000 * 3,
                        1000000 * 2,
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
        
          if (this.state.yearProp === "2018"){
            console.log("2021")
            switch (this.state.currentMonth) {
  
              case "2022-01-01 → 2022-01-28":
                this.setState({
                  currentWeekEnd: "2022-12-07",
                  currentWeekNum: "January",
                  currentWeekData: [
                    {
                      name: "Week 1: 2022-12-01",
                      data: [
                        340000 * 3,
                        700000 * 2,
                        400000 * 3,
                        1300000 * 3,
                        470000 * 2,
                        1000000 * 3,
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
  
              case "2022-02-01 → 2022-02-28":
              
                this.setState({
                  currentWeekEnd: "2022-12-14",
                  currentWeekNum: "February",
                  currentWeekData: [
                    {
                      name: "Week 2: 2022-12-08",
                      data: [
                        2200000 * 3,
                        800000 * 2,
                        900000 * 4,
                        1100000 * 1,
                        170000 * 2,
                        2000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
              case "2022-03-01 → 2022-03-28":
                this.setState({
                  currentWeekEnd: "2022-12-21",
                  currentWeekNum: "March",
                  currentWeekData: [
                    {
                      name: "Week 3: 2022-12-15",
                      data: [
                        2600000 * 4,
                        500000 * 2,
                        900000 * 4,
                        1400000 * 3,
                        270000 * 1,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
                
              case "2022-04-01 → 2022-04-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "April",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 2,
                        400000 * 1,
                        1800000 * 4,
                        470000 * 3,
                        1000000 * 1,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-05-01 → 2022-05-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "May",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 3,
                        800000 * 2,
                        900000 * 3,
                        1100000 * 2,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-06-01 → 2022-06-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "June",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 3,
                        900000 * 2,
                        200000 * 3,
                        870000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-07-01 → 2022-07-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "July",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2800000 * 2,
                        800000 * 3,
                        900000 * 2,
                        1100000 * 4,
                        870000 * 3,
                        800000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-08-01 → 2022-08-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "August",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 3,
                        700000 * 4,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-09-01 → 2022-09-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "September",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 3,
                        270000 * 2,
                        1000000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-10-01 → 2022-10-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "October",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2500000 * 4,
                        700000 * 3,
                        400000 * 2,
                        1800000 * 2,
                        470000 * 1,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-11-01 → 2022-11-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "November",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2700000 * 4,
                        1700000 * 2,
                        900000 * 3,
                        200000 * 2,
                        870000 * 4,
                        1000000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#ed1b2f", "#ffffff", "#ffffff"],
                  },
                });
                break;
                
              case "2022-12-01 → 2022-12-28":
                this.setState({
                  currentWeekEnd: "2022-12-28",
                  currentWeekNum: "December",
                  currentWeekData: [
                    {
                      name: "Week 4: 2022-12-08",
                      data: [
                        2600000 * 3,
                        500000 * 4,
                        900000 * 2,
                        1400000 * 1,
                        270000 * 3,
                        1000000 * 4,
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
        
      });
    }
    

  }








  render() {
    return (
      <div className="app">
        <div className="topBarSales">
          <div className="topLeft2">
            <h1>{this.state.currentWeekNum}</h1>
            <h2>
              {this.state.currentMonth}
            </h2>
          </div>

          <h1 className="titleSales">Overall Product Sold</h1>
          <h2 className = "titleDayWeekSub1">(2018-2022)</h2>
          <div className="nav-buttons2">
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

        <div className="mixed-chart2">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default App;
