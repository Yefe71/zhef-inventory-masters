import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./WeeklyYearlyProductSalesChart.css";
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
          max: 10500000,
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
          categories: ["Week 1", "Week 2", "Week 3", "Week 4"],

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
                      4240886.56 * 1.3,
                      5264696.71 * 1.2,
                      5608379.1 * 1.4,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.1,
                      5608379.1 * 1.3,
                      2778924.32 * 1.5,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.2,
                      5608379.1 * 1.4,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.4,
                      5608379.1 * 1.3,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.7,
                      5264696.71 * 1.2,
                      5608379.1 * 1.3,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.2,
                      5608379.1 * 1.3,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.2,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.7,
                      5264696.71 * 1.5,
                      5608379.1 * 1.6,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.4,
                      5608379.1 * 1.5,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.4,
                      5608379.1 * 1.6,
                      2778924.32 * 1.7,
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
                      4240886.56 * 1.7,
                      5264696.71 * 1.6,
                      5608379.1 * 1.7,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.2,
                      5608379.1 * 1.4,
                      2778924.32 * 1.5,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.5,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.2,
                      5608379.1 * 1.1,
                      2778924.32 * 1.56,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.43,
                      5608379.1 * 1.3,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.5,
                      5608379.1 * 1.3,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.1,
                      5264696.71 * 1.4,
                      5608379.1 * 1.3,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.5,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.7,
                      5264696.71 * 1.4,
                      5608379.1 * 1.2,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.2,
                      5608379.1 * 1.2,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.3,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.4,
                      5608379.1 * 1.5,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.53,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.5,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.5,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.7,
                      5264696.71 * 1.7,
                      5608379.1 * 1.5,
                      2778924.32 * 1.7,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.6,
                      5608379.1 * 1.4,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.3,
                      5608379.1 * 1.3,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.5,
                      5264696.71 * 1.3,
                      5608379.1 * 1.5,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.8,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.6,
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
                      4240886.56 * 1.6,
                      5264696.71 * 1.5,
                      5608379.1 * 1.4,
                      2778924.32 * 1.3,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.3,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.43,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.4,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.2,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.4,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.2,
                      5608379.1 * 1.4,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.4,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.4,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.2,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.4,
                      5264696.71 * 1.1,
                      5608379.1 * 1.3,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.1,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.2,
                      5608379.1 * 1.3,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.3,
                      5264696.71 * 1.4,
                      5608379.1 * 1.2,
                      2778924.32 * 1.4,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.3,
                      5608379.1 * 1.4,
                      2778924.32 * 1.2,
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
                      4240886.56 * 1.2,
                      5264696.71 * 1.3,
                      5608379.1 * 1.2,
                      2778924.32 * 1.3,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.1,
                        5608379.1 * 1.3,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.5,
                        5608379.1 * 1.6,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.4,
                        5608379.1 * 1.5,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.4,
                        5608379.1 * 1.6,
                        2778924.32 * 1.7,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.6,
                        5608379.1 * 1.7,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.2,
                        5608379.1 * 1.1,
                        2778924.32 * 1.56,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.43,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.5,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.1,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.4,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.2,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.5,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.53,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.7,
                        5608379.1 * 1.5,
                        2778924.32 * 1.7,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.6,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.8,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.6,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.5,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.43,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.4,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.1,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.3,
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
            4240886.56 * 1.,
            5264696.71 * 1.,
            5608379.1 * 1.,
            2778924.32 * 1.,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.1,
                        5608379.1 * 1.3,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.5,
                        5608379.1 * 1.6,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.4,
                        5608379.1 * 1.5,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.4,
                        5608379.1 * 1.6,
                        2778924.32 * 1.7,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.6,
                        5608379.1 * 1.7,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.2,
                        5608379.1 * 1.1,
                        2778924.32 * 1.56,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.43,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.5,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.1,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.4,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.2,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.5,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.53,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.5,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.7,
                        5264696.71 * 1.7,
                        5608379.1 * 1.5,
                        2778924.32 * 1.7,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.6,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.5,
                        5264696.71 * 1.3,
                        5608379.1 * 1.5,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.8,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.6,
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
                        4240886.56 * 1.6,
                        5264696.71 * 1.5,
                        5608379.1 * 1.4,
                        2778924.32 * 1.3,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.43,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.4,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.4,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.4,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.4,
                        5264696.71 * 1.1,
                        5608379.1 * 1.3,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.1,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.2,
                        5608379.1 * 1.3,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.3,
                        5264696.71 * 1.4,
                        5608379.1 * 1.2,
                        2778924.32 * 1.4,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.4,
                        2778924.32 * 1.2,
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
                        4240886.56 * 1.2,
                        5264696.71 * 1.3,
                        5608379.1 * 1.2,
                        2778924.32 * 1.3,
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
          <div className="topLeft">
            <h1>{this.state.currentWeekNum}</h1>
            <h2>
              {this.state.currentWeek} → {this.state.currentWeekEnd}{" "}
            </h2>
          </div>

          <h1 className="titleDayWeek3">Weekly Sales</h1>
          <h2 className="titleDayWeekSub3">(In Philippine Peso)</h2>

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
