import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./MonthlyProductSoldChart.css";
import moment from "moment";


function shortenLabelsLiters(value) {
  if (value >= 1000000) {
    return  (value / 1000000).toFixed(1) + "m L";
  } else if (value >= 1000) {
    return  (value / 1000).toFixed(1) + "k L";

    
  } else if (value < 1000){
    return  (value / 1000).toFixed(1) + "L";
  }
  
  else {
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

      currentMonth:  "2022-01-01 → 2022-01-28",

      monthRanges: [

        "2022-01-01 → 2022-01-28",
        "2022-02-01 → 2022-02-28",
        "2022-03-01 → 2022-03-28",
        "2022-04-01 → 2022-04-28",
        "2022-05-01 → 2022-05-28",
        "2022-06-01 → 2022-06-28",
        "2022-07-01 → 2022-07-28",
        "2022-08-01 → 2022-08-28",
        "2022-09-01 → 2022-09-28",
        "2022-10-01 → 2022-10-28",
        "2022-11-01 → 2022-11-28",
        "2022-12-01 → 2022-12-28",

      ],

      currentWeekNum: "January",
      currentWeek: "2022-01-01",
      currentWeekEnd: "2022-01-28",
      currentWeekDefault: "01",

      options: {
        colors: ["#0054f0", "#ffffff", "#ffffff"],

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
            return shortenLabelsLiters(value);
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
          max: 150000,
          tickAmount: 5,
          labels: {
            formatter: function (value) {
              return shortenLabelsLiters(value);
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 4,
                      22000 * 3,
                      4.3 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 2,
                      22000 * 3,
                      4.3 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 4,
                      22000 * 2,
                      4.3 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 2,
                      23003 * 3,
                      3800 * 2,
                      22000 * 4,
                      4.3 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 2,
                      23003 * 4,
                      3800 * 3,
                      22000 * 4,
                      4.3 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 4,
                      22000 * 2,
                      4.3 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 4,
                      23003 * 3,
                      3800 * 2,
                      22000 * 4,
                      4.3 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 4,
                      23003 * 3,
                      3800 * 4,
                      22000 * 2,
                      4.3 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 2,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      4.3 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 2,
                      23003 * 3,
                      3800 * 4,
                      22000 * 2,
                      4.3 * 6,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 3,
                      23003 * 2,
                      3800 * 4,
                      22000 * 3,
                      4.3 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 3,
                      23003 * 3,
                      3800 * 3,
                      22000 * 3,
                      2000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
                },
              });
              break;



            default:
              console.log("Error");
              break;
          }

        }

        if (this.state.yearProp === "2021"){
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 3,
                      22000 * 2,
                      2000 * 6,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 4,
                      22000 * 3,
                      2000 * 7,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 3,
                      22000 * 2,
                      2000 * 8,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 2,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      2000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 2,
                      23003 * 3,
                      3800 * 4,
                      22000 * 2,
                      2000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 3,
                      3800 * 2,
                      22000 * 2,
                      2000 * 7,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 3,
                      22000 * 4,
                      2000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 3,
                      22000 * 4,
                      2000 * 7,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 2,
                      23003 * 4,
                      3800 * 2,
                      22000 * 3,
                      2000 * 2,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 4,
                      22000 * 3,
                      2000 * 6,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 2,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      2000 * 5,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 3,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      2000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
                },
              });
              break;



            default:
              console.log("Error");
              break;
          }

        }

        if (this.state.yearProp === "2020"){
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
                      35800 * 2,
                      10000 * 3,
                      23003 * 4,
                      3800 * 2,
                      22000 * 4,
                      2000 * 3,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 3,
                      23003 * 3,
                      3800 * 3,
                      22000 * 3,
                      2000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 3,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      3000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 3,
                      23003 * 4,
                      3800 * 2,
                      22000 * 1,
                      4000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 4,
                      23003 * 2,
                      3800 * 3,
                      22000 * 2,
                      5000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 2,
                      3800 * 3,
                      22000 * 4,
                      5000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 2,
                      10000 * 3,
                      23003 * 4,
                      3800 * 3,
                      22000 * 2,
                      3000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 2,
                      3800 * 3,
                      22000 * 3,
                      4000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 3,
                      3800 * 2,
                      22000 * 3,
                      6000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 3,
                      3800 * 2,
                      22000 * 3,
                      7000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 3,
                      10000 * 4,
                      23003 * 3,
                      3800 * 2,
                      22000 * 3,
                      3000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                      35800 * 4,
                      10000 * 3,
                      23003 * 4,
                      3800 * 3,
                      22000 * 4,
                      4000 * 4,
                    ],
                  },
                ],
                options: {
                  ...this.state.options,
                  colors: ["#0054f0", "#ffffff", "#ffffff"],
                },
              });
              break;



            default:
              console.log("Error");
              break;
          }

        }

        if (this.state.yearProp === "2019"){
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 2,
                        22000 * 3,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 4,
                        2000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        4000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 4,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        4000 * 5,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        3000 * 5,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 3,
                        3800 * 3,
                        22000 * 3,
                        5000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }

        if (this.state.yearProp === "2018"){
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
                          35800 * 2,
                          10000 * 3,
                          23003 * 4,
                          3800 * 2,
                          22000 * 4,
                          2000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 3,
                          23003 * 3,
                          3800 * 3,
                          22000 * 3,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 3,
                          23003 * 4,
                          3800 * 3,
                          22000 * 2,
                          5000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 3,
                          23003 * 4,
                          3800 * 2,
                          22000 * 1,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 4,
                          23003 * 2,
                          3800 * 3,
                          22000 * 2,
                          5000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 3,
                          22000 * 4,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 3,
                          23003 * 4,
                          3800 * 3,
                          22000 * 2,
                          4000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 2,
                          3800 * 3,
                          22000 * 3,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 3,
                          3800 * 2,
                          22000 * 3,
                          5000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 3,
                          3800 * 2,
                          22000 * 3,
                          6000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 3,
                          3800 * 2,
                          22000 * 3,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 4,
                          3800 * 3,
                          22000 * 4,
                          6000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 2,
                        22000 * 3,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 4,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 4,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 3,
                        3800 * 3,
                        22000 * 3,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2021"){
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        2000 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        2000 * 8,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 2,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        2000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 2,
                        22000 * 3,
                        2000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        2000 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 5,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2020"){
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 2,
                        22000 * 4,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 3,
                        3800 * 3,
                        22000 * 3,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 2,
                        22000 * 1,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        5000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        5000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 3,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        6000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        7000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 4,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2019"){
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 3,
                          4000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 2,
                          22000 * 3,
                          2000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 2,
                          3800 * 4,
                          22000 * 2,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 2,
                          23003 * 3,
                          3800 * 2,
                          22000 * 4,
                          4000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 2,
                          23003 * 4,
                          3800 * 3,
                          22000 * 4,
                          2000 * 2,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 2,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 4,
                          23003 * 3,
                          3800 * 2,
                          22000 * 4,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 4,
                          23003 * 3,
                          3800 * 4,
                          22000 * 2,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 2,
                          23003 * 4,
                          3800 * 3,
                          22000 * 2,
                          4000 * 5,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 2,
                          23003 * 3,
                          3800 * 4,
                          22000 * 2,
                          4000 * 2,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 3,
                          3000 * 5,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 3,
                          23003 * 3,
                          3800 * 3,
                          22000 * 3,
                          5000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
                    },
                  });
                  break;
    
    
    
                default:
                  console.log("Error");
                  break;
              }
    
            }
  
          if (this.state.yearProp === "2018"){
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 2,
                            22000 * 4,
                            2000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 3,
                            23003 * 3,
                            3800 * 3,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 2,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 2,
                            22000 * 1,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 4,
                            23003 * 2,
                            3800 * 3,
                            22000 * 2,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 4,
                            10000 * 3,
                            23003 * 2,
                            3800 * 3,
                            22000 * 4,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 2,
                            4000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 2,
                            3800 * 3,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            6000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 4,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 4,
                            6000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
            35800 * 4,
            10000 * 3,
            23003 * 2,
            3800 * 4,
            22000 * 3,
            2000 * 4,
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 2,
                        22000 * 3,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 4,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 4,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 4,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        4.3 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        4.3 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        4.3 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 3,
                        3800 * 3,
                        22000 * 3,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2021"){
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        2000 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        2000 * 8,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 3,
                        3800 * 4,
                        22000 * 2,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 2,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        2000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        2000 * 7,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 2,
                        23003 * 4,
                        3800 * 2,
                        22000 * 3,
                        2000 * 2,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 4,
                        22000 * 3,
                        2000 * 6,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 2,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 5,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2020"){
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 2,
                        22000 * 4,
                        2000 * 3,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 3,
                        23003 * 3,
                        3800 * 3,
                        22000 * 3,
                        2000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 2,
                        22000 * 1,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 2,
                        5000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 2,
                        3800 * 3,
                        22000 * 4,
                        5000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 2,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 2,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 2,
                        3800 * 3,
                        22000 * 3,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        6000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        7000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 3,
                        10000 * 4,
                        23003 * 3,
                        3800 * 2,
                        22000 * 3,
                        3000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                        35800 * 4,
                        10000 * 3,
                        23003 * 4,
                        3800 * 3,
                        22000 * 4,
                        4000 * 4,
                      ],
                    },
                  ],
                  options: {
                    ...this.state.options,
                    colors: ["#0054f0", "#ffffff", "#ffffff"],
                  },
                });
                break;
  
  
  
              default:
                console.log("Error");
                break;
            }
  
          }
  
          if (this.state.yearProp === "2019"){
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 3,
                          4000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 2,
                          22000 * 3,
                          2000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 4,
                          23003 * 2,
                          3800 * 4,
                          22000 * 2,
                          3000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 2,
                          23003 * 3,
                          3800 * 2,
                          22000 * 4,
                          4000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 2,
                          23003 * 4,
                          3800 * 3,
                          22000 * 4,
                          2000 * 2,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 2,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 2,
                          10000 * 4,
                          23003 * 3,
                          3800 * 2,
                          22000 * 4,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 4,
                          23003 * 3,
                          3800 * 4,
                          22000 * 2,
                          4000 * 3,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 2,
                          23003 * 4,
                          3800 * 3,
                          22000 * 2,
                          4000 * 5,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 4,
                          10000 * 2,
                          23003 * 3,
                          3800 * 4,
                          22000 * 2,
                          4000 * 2,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 3,
                          23003 * 2,
                          3800 * 4,
                          22000 * 3,
                          3000 * 5,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                          35800 * 3,
                          10000 * 3,
                          23003 * 3,
                          3800 * 3,
                          22000 * 3,
                          5000 * 4,
                        ],
                      },
                    ],
                    options: {
                      ...this.state.options,
                      colors: ["#0054f0", "#ffffff", "#ffffff"],
                    },
                  });
                  break;
    
    
    
                default:
                  console.log("Error");
                  break;
              }
    
            }
  
          if (this.state.yearProp === "2018"){
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 2,
                            22000 * 4,
                            2000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 3,
                            23003 * 3,
                            3800 * 3,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 2,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 2,
                            22000 * 1,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 4,
                            23003 * 2,
                            3800 * 3,
                            22000 * 2,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 4,
                            10000 * 3,
                            23003 * 2,
                            3800 * 3,
                            22000 * 4,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 2,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 2,
                            4000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 2,
                            3800 * 3,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            5000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            6000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 3,
                            10000 * 4,
                            23003 * 3,
                            3800 * 2,
                            22000 * 3,
                            3000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
                            35800 * 4,
                            10000 * 3,
                            23003 * 4,
                            3800 * 3,
                            22000 * 4,
                            6000 * 4,
                          ],
                        },
                      ],
                      options: {
                        ...this.state.options,
                        colors: ["#0054f0", "#ffffff", "#ffffff"],
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
          <div className="topLeft">
            <h1>{this.state.currentWeekNum}</h1>
            <h2>
              {this.state.currentWeek} → {this.state.currentWeekEnd}{" "}
            </h2>
          </div>

          <h1 className="titleProducts">Monthly Products Sold</h1>
          <h2 className = "titleDayWeekSub2">(In Liters)</h2>
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
            type="bar"
            width="610"
          />
        </div>
      </div>
    );
  }
}

export default App;
