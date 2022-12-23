import React, { Component } from "react";
import Chart from "react-apexcharts";
import './ChartSales.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
      options: {
        colors:['#40ff00', '#ffffff', '#ffffff'],
        grid: {
            padding: {
             left: 0,
             right: 0
            }
          },
        chart: {
          id: "basic-line",
         
          sparkline: {
            enabled: true
          }
        },
        xaxis: {
            
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],

        }
      ],
      
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="465"
                
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;