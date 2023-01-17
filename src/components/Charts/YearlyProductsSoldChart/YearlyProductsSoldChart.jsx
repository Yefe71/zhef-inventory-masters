import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./YearlyProductsSoldChart.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear: "2022",
      overallData: [],
      yearRanges: ["2018", "2019", "2020", "2021", "2022"],

      series: [2453433.6, 159886.92, 967537.56, 154100.64, 709713.6, 63422.04],
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
            1998337.0* 0.6, 130228.9* 0.5, 788065.39* 0.4, 125515.93* 0.3, 578066.16* 0.2, 51657.65* 0.1,
          ],
        });
        break;
      case "2019":
        this.setState({
          series: [
            2103512.63* 0.7, 137083.05* 0.6, 829542.52* 0.5, 132122.04* 0.4, 608490.7* 0.3, 54376.47* 0.2,
          ],
        });
        break;
      case "2020":
        this.setState({
          series: [
            2214223.82* 0.8, 144297.95* 0.7, 873202.65* 0.6, 139075.83* 0.5, 640516.52* 0.4, 57238.39* 0.3,
          ],
        });
        break;
      case "2021":
        this.setState({
          series: [
            2330761.92 * 0.9, 151892.57* 0.8, 919160.68* 0.7, 146395.61* 0.6, 674227.92* 0.5, 60250.94* 0.4,
          ],
        });
        break;
      case "2022":
        this.setState({
          series: [
            2453433.6, 159886.92, 967537.56, 154100.64, 709713.6, 63422.04,
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

          <h1 className="titleSales10">Overall Products Sold</h1>
          <h2 className="titleDayWeekSub11">(In Liters)</h2>
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
