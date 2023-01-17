import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./YearlyProductSalesChart.css";

function shortenLabelsPesos(value) {
  return "P" + value.toFixed(1);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear: "2022",
      overallData: [],
      yearRanges: ["2018", "2019", "2020", "2021", "2022"],

      series: [
        81553830.72, 884785.31, 4844173.83, 889550.15, 3578648.62,
        344739.55,
      ],
      options: {
        colors: [
          "#3498db",
          "#2ecc71",
          "#f1c40f",
          "#e74c3c",
          "#9b59b6",
          "#ffa600",
        ],
        chart: {
          width: 380,
          type: "pie",
          foreColor: "#fff",
        },
        
        labels: ["ADO", "ADO T", "E10", "KERO", "XCS", "XUB"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
      },
    };
  }

  handleYearChange(year) {
    switch (year) {
      case "2018":
        this.setState({
          series: [
            66426104.83 * 0.6, 720663.17* 0.5, 3945609.86* 0.4, 724544.16* 0.3, 2914831.67* 0.2,
            280792.52 * 0.1,
          ],
        });
        break;
      case "2019":
        this.setState({
          series: [
            69922215.61* 0.7, 758592.81* 0.6, 4153273.54* 0.5, 762678.06* 0.4, 3068243.86* 0.3,
            295571.07* 0.2,
          ],
        });
        break;
      case "2020":
        this.setState({
          series: [
            73602332.22 * 0.8, 798518.74* 0.7, 4371866.88* 0.6, 802819.01* 0.5, 3229730.38* 0.4,
            311127.45* 0.3,
          ],
        });
        break;
      case "2021":
        this.setState({
          series: [
            77476139.18 * 0.9, 840546.05  * 0.8, 4601965.14  * 0.7, 845072.64  * 0.6, 3399716.19  * 0.5,
            327502.58  * 0.4,
          ],
        });
        break;
      case "2022":
        this.setState({
          series: [
            81553830.72, 884785.31, 4844173.83, 889550.15, 3578648.62,
            344739.55,
          ],
        });
        break;
      default:
        this.setState({ series: [0, 0, 0, 0, 0, 0] });
    }
  }

  moveBackward() {
    let currentIndex = this.state.yearRanges.indexOf(this.state.currentYear);
    if (currentIndex > 0) {
      currentIndex--;
      this.setState(
        { currentYear: this.state.yearRanges[currentIndex] },
        () => {
          this.handleYearChange(this.state.currentYear);
        }
      );
    }
  }

  moveForward() {
    let currentIndex = this.state.yearRanges.indexOf(this.state.currentYear);
    if (currentIndex < this.state.yearRanges.length - 1) {
      currentIndex++;
      this.setState(
        { currentYear: this.state.yearRanges[currentIndex] },
        () => {
          this.handleYearChange(this.state.currentYear);
        }
      );
    }
  }

  render() {
    return (
      <div className="app">
        <div className="topBarSales">
          <div className="topLeft2">
            <h1>{this.state.currentYear}</h1>
          </div>

          <h1 className="titleSales10">Overall Products Sales</h1>
          <h2 className="titleDayWeekSub10">(In Philippine Peso)</h2>
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
