import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./DailyProductsSoldChart.css";
import moment from "moment";

function shortenLabelsLiters(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "m L";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k L";
  } else if (value < 1000) {
    return (value / 1000).toFixed(1) + "L";
  } else {
    return value;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueIncVat: ["wat"],

      weekDataAdo: [],
      weekDataAdoT: [],
      weekDataE10: [],
      weekDataKero: [],
      weekDataXcs: [],
      weekDataXub: [],

      currentWeekData: [
        {
          name: "",
          data: [],
        },
      ],
      currentWeekNum: "Week 1",
      currentWeek: "2022-12-01",
      currentWeekEnd: "2022-12-07",
      currentWeekDefault: "01",

      options: {
        colors: ["#ff0fdfea", "#ffffff", "#ffffff"],

        grid: {
          borderColor: "#444443",
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
          enabled: true,
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
        {
          name: "Week 1: 2022-12-01",
          data: [
            1557307.65, 212116.79, 1271749.24, 231179.55, 900765.68, 66767.69,
          ],
        },
        {
          name: "Week 2: 2022-12-08",
          data: [482882.93, 17093, 226393, 28944, 132831, 12057],
        },
        {
          name: "Week 3: 2022-12-15",
          data: [
            2292862.73, 340154.28, 1383918.03, 244971.48, 1135987.48, 120485.12,
          ],
        },
        {
          name: "Week 4:2022-12-22",
          data: [
            696039.77, 154466.56, 922506.33, 207681.09, 1301989.12, 76318.5,
          ],
        },
      ],
    };
  }

  //back and forward buttons

  moveBackward() {
    if (this.state.currentWeek !== "2022-12-01") {
      const currentWeek = this.state.currentWeek;
      const currentWeekMoment = moment(currentWeek, "YYYY-MM-DD");
      const previousWeekMoment = currentWeekMoment.subtract(1, "week");
      const previousWeek = previousWeekMoment.format("YYYY-MM-DD");

      const nextWeekPrevMoment = previousWeekMoment.add(6, "days");
      const nextWeekPrev = nextWeekPrevMoment.format("YYYY-MM-DD");

      this.setState(
        {
          currentWeek: previousWeek,
          currentWeekEnd: nextWeekPrev,
        },
        () => {
          //FETCH DATA

          fetch(
            `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(
              -2
            )}&weekEnd=${this.state.currentWeekEnd.slice(-2)}&code=${
              this.state.stateCode
            }`,
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
          currentWeek: nextWeek,
          currentWeekEnd: nextWeekEnd,
        },
        () => {
          //FETCH DATA

          fetch(
            `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(
              -2
            )}&weekEnd=${this.state.currentWeekEnd.slice(-2)}`,
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
      `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(
        -2
      )}&weekEnd=${this.state.currentWeekEnd.slice(-2)}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((values) => {
        console.log(values);
        if (values) {
          let valueIncVat = values.map((item) => item.quantity);
          this.setState(
            {
              valueIncVat: valueIncVat,
            },
            () => {
              //second set state for adding fetched values to state on refresh
              this.setState(
                {
                  weekDataAdo: [
                    this.state.valueIncVat[0],
                    this.state.valueIncVat[1],
                    this.state.valueIncVat[2],
                    this.state.valueIncVat[3],
                    this.state.valueIncVat[4],
                    this.state.valueIncVat[5],
                    this.state.valueIncVat[6],
                  ],
                  weekDataAdoT: [
                    this.state.valueIncVat[7],
                    this.state.valueIncVat[8],
                    this.state.valueIncVat[9],
                    this.state.valueIncVat[10],
                    this.state.valueIncVat[11],
                    this.state.valueIncVat[12],
                    this.state.valueIncVat[13],
                  ],
                  weekDataE10: [
                    this.state.valueIncVat[14],
                    this.state.valueIncVat[15],
                    this.state.valueIncVat[16],
                    this.state.valueIncVat[17],
                    this.state.valueIncVat[18],
                    this.state.valueIncVat[19],
                    this.state.valueIncVat[20],
                  ],
                  weekDataKero: [
                    this.state.valueIncVat[21],
                    this.state.valueIncVat[22],
                    this.state.valueIncVat[23],
                    this.state.valueIncVat[24],
                    this.state.valueIncVat[25],
                    this.state.valueIncVat[26],
                    this.state.valueIncVat[27],
                  ],
                  weekDataXcs: [
                    this.state.valueIncVat[28],
                    this.state.valueIncVat[29],
                    this.state.valueIncVat[30],
                    this.state.valueIncVat[31],
                    this.state.valueIncVat[32],
                    this.state.valueIncVat[33],
                    this.state.valueIncVat[34],
                  ],
                  weekDataXub: [
                    this.state.valueIncVat[35],
                    this.state.valueIncVat[36],
                    this.state.valueIncVat[37],
                    this.state.valueIncVat[38],
                    this.state.valueIncVat[39],
                    this.state.valueIncVat[40],
                    this.state.valueIncVat[41],
                  ],
                },
                () => {
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
                  });
                }
              );
            }
          );
          //do something
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    function sumArray(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      return sum;
    }

    if (this.state.currentWeek !== prevState.currentWeek) {

      fetch(
        `http://localhost:3000/grabdata2?weekStart=${this.state.currentWeek.slice(
          -2
        )}&weekEnd=${this.state.currentWeekEnd.slice(-2)}`,
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
              () => {
                //second set state for adding fetched values to state on refresh
                this.setState(
                  {
                    weekDataAdo: [
                      this.state.valueIncVat[0],
                      this.state.valueIncVat[1],
                      this.state.valueIncVat[2],
                      this.state.valueIncVat[3],
                      this.state.valueIncVat[4],
                      this.state.valueIncVat[5],
                      this.state.valueIncVat[6],
                    ],
                    weekDataAdoT: [
                      this.state.valueIncVat[7],
                      this.state.valueIncVat[8],
                      this.state.valueIncVat[9],
                      this.state.valueIncVat[10],
                      this.state.valueIncVat[11],
                      this.state.valueIncVat[12],
                      this.state.valueIncVat[13],
                    ],
                    weekDataE10: [
                      this.state.valueIncVat[14],
                      this.state.valueIncVat[15],
                      this.state.valueIncVat[16],
                      this.state.valueIncVat[17],
                      this.state.valueIncVat[18],
                      this.state.valueIncVat[19],
                      this.state.valueIncVat[20],
                    ],
                    weekDataKero: [
                      this.state.valueIncVat[21],
                      this.state.valueIncVat[22],
                      this.state.valueIncVat[23],
                      this.state.valueIncVat[24],
                      this.state.valueIncVat[25],
                      this.state.valueIncVat[26],
                      this.state.valueIncVat[27],
                    ],
                    weekDataXcs: [
                      this.state.valueIncVat[28],
                      this.state.valueIncVat[29],
                      this.state.valueIncVat[30],
                      this.state.valueIncVat[31],
                      this.state.valueIncVat[32],
                      this.state.valueIncVat[33],
                      this.state.valueIncVat[34],
                    ],
                    weekDataXub: [
                      this.state.valueIncVat[35],
                      this.state.valueIncVat[36],
                      this.state.valueIncVat[37],
                      this.state.valueIncVat[38],
                      this.state.valueIncVat[39],
                      this.state.valueIncVat[40],
                      this.state.valueIncVat[41],
                    ],
                  },
                  () => {
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
                            colors: ["#ff0fdfea", "#ffffff", "#ffffff"],
                          },
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
                            colors: ["#ff0fdfea", "#ffffff", "#ffffff"],
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
                            colors: ["#ff0fdfea", "#ffffff", "#ffffff"],
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
                            colors: ["#ff0fdfea", "#ffffff", "#ffffff"],
                          },
                        });
                        break;

                      default:
                        console.log("Error");
                        break;
                    }
                  }
                );
              }
            );
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
            type="line"
            width="610"
          />
        </div>
      </div>
    );
  }
}

export default App;
