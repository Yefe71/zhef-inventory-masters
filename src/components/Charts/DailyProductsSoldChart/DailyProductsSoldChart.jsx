import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./DailyProductsSoldChart.css";
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

      monthProp: this.props.month.month.toLowerCase().slice(0,3),
      yearProp: this.props.year.year,
      
      weekDataAdo: [

      ],

      weekDataAdoT:  [

      ],

      weekDataE10:  [

      ],
      weekDataKero:  [

      ],
      weekDataXcs:  [

      ],
      weekDataXub:  [

      ],

      currentWeekData: [
        {
          name: "",
          data: [
         
          ],
        }

      ],
      currentWeekNum: "Week 1",
      currentWeek: "2022-12-01",
      currentWeekEnd: "2022-12-07",
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
          max: 20000,
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
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

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
        },
        () => {
          //FETCH DATA

          fetch(
            `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(-2)}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&month=${this.state.monthProp}&year=${this.state.yearProp}`,
            {
              method: "get",
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((response) => response.json())
            .then((values) => {
              if (values) {
                let valueIncVat = values.map((item) => item.quantity);
                this.setState(
                  {
                    valueIncVat: valueIncVat,
                  },
                  () => console.log(this.state.valueIncVat)
                );
              }
            });
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
        },
        () => {
          //FETCH DATA

          fetch(
            `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(-2)}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&month=${this.state.monthProp}&year=${this.state.yearProp}`,
            {
              method: "get",
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((response) => response.json())
            .then((values) => {
              if (values) {
                let valueIncVat = values.map((item) => item.quantity);
                this.setState(
                  {
                    valueIncVat: valueIncVat,
                  },
                  () => console.log(this.state.valueIncVat)
                ); //do something
              }
            });
        }
      );
    }
  }




  componentDidMount() {
    console.log(this.props.month.month.toLowerCase().slice(0,3))
    console.log(this.state.currentWeek, this.state.currentWeekEnd, "START");
    function sumArray(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      return sum;
    }
    //fetch default data for currentWeekData at start

    fetch(
      `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(-2)}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&month=${this.state.monthProp}&year=${this.state.yearProp}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((values) => {
        if (values) {
          console.log(values)
          let valueIncVat = values.map((item) => item.quantity);
          this.setState(
            {
              valueIncVat: valueIncVat,
            }, () => {
              //second set state for adding fetched values to state on refresh
              this.setState({
                weekDataAdo: this.state.valueIncVat.slice(0, 7),
                weekDataAdoT: this.state.valueIncVat.slice(7, 14),
                weekDataE10: this.state.valueIncVat.slice(14, 21),
                weekDataKero: this.state.valueIncVat.slice(21, 28),
                weekDataXcs: this.state.valueIncVat.slice(28, 35),
                weekDataXub: this.state.valueIncVat.slice(35, 42),
              }, () => {

                this.setState({
                currentWeekEnd: "2022-12-07",
                currentWeekNum: "Week 1",
                currentWeekData: [
                  {
                    name: "Week 1: 2022-12-01",
                    data: [
                      sumArray(this.state.weekDataAdo),
                      sumArray(this.state.weekDataAdoT),
                      sumArray(this.state.weekDataE10),
                      sumArray(this.state.weekDataKero),
                      sumArray(this.state.weekDataXcs),
                      sumArray(this.state.weekDataXub),
                    ],
                  },
                ],
              })
              })


            }); 
             //do something
        }
      });
  
  }

  componentDidUpdate(prevProps, prevState) {
 
    if (this.props.month !== prevProps.month || this.props.year !== prevProps.year) {
      this.setState({monthProp: this.props.month.month.toLowerCase().slice(0,3), yearProp: this.props.year.year}, () => {

    
        fetch(
          `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(-2)}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&month=${this.state.monthProp}&year=${this.state.yearProp}`,
          {
            method: "get",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((response) => response.json())
          .then((values) => {
            if (values) {
              let valueIncVat = values.map((item) => item.quantity);
              this.setState(
                {
                  valueIncVat: valueIncVat,
                }, () => {


                  //second set state for adding fetched values to state on refresh
                  this.setState({
                    weekDataAdo: this.state.valueIncVat.slice(0, 7),
                    weekDataAdoT: this.state.valueIncVat.slice(7, 14),
                    weekDataE10: this.state.valueIncVat.slice(14, 21),
                    weekDataKero: this.state.valueIncVat.slice(21, 28),
                    weekDataXcs: this.state.valueIncVat.slice(28, 35),
                    weekDataXub: this.state.valueIncVat.slice(35, 42),
                  }, () => {

                    switch (this.state.currentWeek) {
                      case "2022-12-01":

                        this.setState({
                          currentWeekEnd: "2022-12-07",
                          currentWeekNum: "Week 1",
                          currentWeekData: [
                            {
                              name: "Week 1: 2022-12-01",
                              data: [
                                sumArray(this.state.weekDataAdo),
                                sumArray(this.state.weekDataAdoT),
                                sumArray(this.state.weekDataE10),
                                sumArray(this.state.weekDataKero),
                                sumArray(this.state.weekDataXcs),
                                sumArray(this.state.weekDataXub),
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

                      case "2022-12-08":
       
                        this.setState({
                          currentWeekEnd: "2022-12-14",
                          currentWeekNum: "Week 2",
                          currentWeekData: [
                            {
                              name: "Week 2: 2022-12-08",
                              data: [
                                sumArray(this.state.weekDataAdo),
                                sumArray(this.state.weekDataAdoT),
                                sumArray(this.state.weekDataE10),
                                sumArray(this.state.weekDataKero),
                                sumArray(this.state.weekDataXcs),
                                sumArray(this.state.weekDataXub),
                              ],
                            },
                          ],
                          options: {
                            ...this.state.options,
                            colors: ["#0054f0", "#ffffff", "#ffffff"],
                          },
                        });
                        break;

                      case "2022-12-15":
                        this.setState({
                          currentWeekEnd: "2022-12-21",
                          currentWeekNum: "Week 3",
                          currentWeekData: [
                            {
                              name: "Week 3: 2022-12-15",
                              data: [
                                sumArray(this.state.weekDataAdo),
                                sumArray(this.state.weekDataAdoT),
                                sumArray(this.state.weekDataE10),
                                sumArray(this.state.weekDataKero),
                                sumArray(this.state.weekDataXcs),
                                sumArray(this.state.weekDataXub),
                              ],
                            },
                          ],
                          options: {
                            ...this.state.options,
                            colors: ["#0054f0", "#ffffff", "#ffffff"],
                          },
                        });
                        break;
                      case "2022-12-22":
                        this.setState({
                          currentWeekEnd: "2022-12-28",
                          currentWeekNum: "Week 4",
                          currentWeekData: [
                            {
                              name: "Week 4: 2022-12-08",
                              data: [
                                sumArray(this.state.weekDataAdo),
                                sumArray(this.state.weekDataAdoT),
                                sumArray(this.state.weekDataE10),
                                sumArray(this.state.weekDataKero),
                                sumArray(this.state.weekDataXcs),
                                sumArray(this.state.weekDataXub),
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

                  })
                }); 
                 //do something
            }
          });


      });
  

    }

    function sumArray(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      return sum;
    }
  
    if (this.state.currentWeek !== prevState.currentWeek) {

      fetch(
        `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(-2)}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&month=${this.state.monthProp}&year=${this.state.yearProp}`,
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((values) => {
          if (values) {
            let valueIncVat = values.map((item) => item.quantity);
            this.setState(
              {
                valueIncVat: valueIncVat,
              }, () => {


                //second set state for adding fetched values to state on refresh
                this.setState({
                  weekDataAdo: this.state.valueIncVat.slice(0, 7),
                  weekDataAdoT: this.state.valueIncVat.slice(7, 14),
                  weekDataE10: this.state.valueIncVat.slice(14, 21),
                  weekDataKero: this.state.valueIncVat.slice(21, 28),
                  weekDataXcs: this.state.valueIncVat.slice(28, 35),
                  weekDataXub: this.state.valueIncVat.slice(35, 42),
                }, () => {

                  switch (this.state.currentWeek) {
                    case "2022-12-01":

                      this.setState({
                        currentWeekEnd: "2022-12-07",
                        currentWeekNum: "Week 1",
                        currentWeekData: [
                          {
                            name: "Week 1: 2022-12-01",
                            data: [
                              sumArray(this.state.weekDataAdo),
                              sumArray(this.state.weekDataAdoT),
                              sumArray(this.state.weekDataE10),
                              sumArray(this.state.weekDataKero),
                              sumArray(this.state.weekDataXcs),
                              sumArray(this.state.weekDataXub),
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

                    case "2022-12-08":
       
                      this.setState({
                        currentWeekEnd: "2022-12-14",
                        currentWeekNum: "Week 2",
                        currentWeekData: [
                          {
                            name: "Week 2: 2022-12-08",
                            data: [
                              sumArray(this.state.weekDataAdo),
                              sumArray(this.state.weekDataAdoT),
                              sumArray(this.state.weekDataE10),
                              sumArray(this.state.weekDataKero),
                              sumArray(this.state.weekDataXcs),
                              sumArray(this.state.weekDataXub),
                            ],
                          },
                        ],
                        options: {
                          ...this.state.options,
                          colors: ["#0054f0", "#ffffff", "#ffffff"],
                        },
                      });
                      break;

                    case "2022-12-15":
                      this.setState({
                        currentWeekEnd: "2022-12-21",
                        currentWeekNum: "Week 3",
                        currentWeekData: [
                          {
                            name: "Week 3: 2022-12-15",
                            data: [
                              sumArray(this.state.weekDataAdo),
                              sumArray(this.state.weekDataAdoT),
                              sumArray(this.state.weekDataE10),
                              sumArray(this.state.weekDataKero),
                              sumArray(this.state.weekDataXcs),
                              sumArray(this.state.weekDataXub),
                            ],
                          },
                        ],
                        options: {
                          ...this.state.options,
                          colors: ["#0054f0", "#ffffff", "#ffffff"],
                        },
                      });
                      break;
                    case "2022-12-22":
                      this.setState({
                        currentWeekEnd: "2022-12-28",
                        currentWeekNum: "Week 4",
                        currentWeekData: [
                          {
                            name: "Week 4: 2022-12-08",
                            data: [
                              sumArray(this.state.weekDataAdo),
                              sumArray(this.state.weekDataAdoT),
                              sumArray(this.state.weekDataE10),
                              sumArray(this.state.weekDataKero),
                              sumArray(this.state.weekDataXcs),
                              sumArray(this.state.weekDataXub),
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

                })
              }); 
               //do something
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

          <h1 className="titleDayWeek4">Daily Products Sold</h1>
          <h2 className="titleDayWeekSub4">(In Liters)</h2>

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
