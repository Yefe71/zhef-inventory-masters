import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./YearlyProductSalesChart.css";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear:  "2022",
      overallData: [],
      yearRanges: [

        "2018",
        "2019",
        "2020",
        "2021",
        "2022"

      ],
          
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

  handleYearChange(year) {
    switch (year) {
        case "2018":
            this.setState({ series: [12, 45, 23, 56, 45, 34] });
            break;
        case "2019":
            this.setState({ series: [34, 56, 78, 23, 45, 67] });
            break;
        case "2020":
            this.setState({ series: [23, 56, 12, 67, 89, 12] });
            break;
        case "2021":
            this.setState({ series: [45, 67, 89, 12, 34, 56] });
            break;
        case "2022":
            this.setState({ series: [100, 55, 13, 43, 22, 22] });
            break;
        default:
            this.setState({ series: [0, 0, 0, 0, 0, 0] });
    }
}



  moveBackward() {
    let currentIndex = this.state.yearRanges.indexOf(this.state.currentYear);
    if (currentIndex > 0) {
        currentIndex--;
        this.setState({ currentYear: this.state.yearRanges[currentIndex] }, () => {

          this.handleYearChange(this.state.currentYear)

        });
    }
}

moveForward() {
    let currentIndex = this.state.yearRanges.indexOf(this.state.currentYear);
    if (currentIndex < this.state.yearRanges.length - 1) {
        currentIndex++;
        this.setState({ currentYear: this.state.yearRanges[currentIndex] }, () => {

          this.handleYearChange(this.state.currentYear)




      });
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
