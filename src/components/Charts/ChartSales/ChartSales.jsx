import React, { Component, useState, useEffect} from "react";
import Chart from "react-apexcharts";
import './ChartSales.css'
import moment from 'moment'



class App extends Component {

  constructor(props) {
    super(props);

    
    this.state = {
      currentWeekData:      
      [{
        name: "Week 1: 2022-12-08",
        data: [30, 40, 45, 80, 49, 60, 100]
      }],

      currentWeek: "2022-12-01",
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
            
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      },
      
      series: [
        {
          name: "Week 1: 2022-12-01",
          data: [30, 40, 100, 50, 49, 60, 70],
        },
        {
          name: "Week 2: 2022-12-08",
          data: [30, 40, 45, 80, 49, 60, 70]
        },
        {
          name: "Week 3: 2022-12-15",
          data: [30, 40, 30, 50, 49, 60, 70]
        },
        {
          name: "Week 4:2022-12-22",
          data: [30, 40, 45, 50, 49, 90, 70]
        }
      ]
    };
  }


  moveBackward() {
    if (this.state.currentWeek !== "2022-12-01") {
      const currentWeek = this.state.currentWeek;
      const currentWeekMoment = moment(currentWeek, "YYYY-MM-DD");
      const previousWeekMoment = currentWeekMoment.subtract(1, "week");
      const previousWeek = previousWeekMoment.format("YYYY-MM-DD");
      this.setState({ currentWeek: previousWeek }, () => {
        console.log(`Current week: ${this.state.currentWeek}`);
      });
    }
  }

  moveForward() {
    if (this.state.currentWeek !== "2022-12-22") {
      const currentWeek = this.state.currentWeek;
      const currentWeekMoment = moment(currentWeek, "YYYY-MM-DD");
      const nextWeekMoment = currentWeekMoment.add(1, "week");
      const nextWeek = nextWeekMoment.format("YYYY-MM-DD");
      this.setState({ currentWeek: nextWeek }, () => {
        console.log(`Current week: ${this.state.currentWeek}`);
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWeek !== prevState.currentWeek) {
      const currentWeekData = this.state.series.filter(
        (datapoint) => datapoint.name.startsWith(this.state.currentWeek)
      );


      switch (this.state.currentWeek) {
        case "2022-12-01":
          this.setState({ 
            
            currentWeekData:      
            [{
            name: "Week 1: 2022-12-01",
            data: [30, 40, 25, 80, 49, 60, 100]
            }],
            options: {
              ...this.state.options,
              colors: ['#51ff00', '#ffffff', '#ffffff'],
            },
          });
          break;
        case "2022-12-08":
          this.setState({ currentWeekData:      
            [{
            name: "Week 2: 2022-12-08",
            data: [30, 40, 25, 80, 70, 60, 100]
            }],
            options: {
              ...this.state.options,
              colors: ['#00eeff', '#ffffff', '#ffffff'],
            },
     
          });
          break;
        case "2022-12-15":
          this.setState({ currentWeekData:      
            [{
            name: "Week 3: 2022-12-15",
            data: [30, 40, 45, 80, 49, 40, 100]
            }],
              options: {
                  ...this.state.options,
                  colors: ['#ff00d4', '#ffffff', '#ffffff'],
                },




          });
          break;
        case "2022-12-22":
          this.setState({ currentWeekData:      
            [{
            name: "Week 4: 2022-12-22",
            data: [30, 40, 45, 30, 49, 60, 100]
            }],              options: {
                  ...this.state.options,
                  colors: ['#fffb00', '#ffffff', '#ffffff'],
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
  
          <div className="topBar">
             <h1>{this.state.currentWeek}</h1>
             <h1 className = "title">Top Sales</h1>
             <div className="nav-buttons">
                  <button onClick={ () => {this.moveBackward()}} type = "button" className = "backBt">Back</button>
                  <button  onClick={ () => {this.moveForward()}} type = "button" className ="forwardBt">Forward</button>

             </div>

          </div>
       
          
          <div className="mixed-chart">

          <Chart
                options={this.state.options}
                series={this.state.currentWeekData}
                type="line"
                width="550"
               
                
              />

              
          </div>
          <div className = "labelsy">
              <div className="labelsy2">
                    <h2>100</h2>
                    <h2>80</h2>
                    <h2>60</h2>
                    <h2>40</h2>
                    <h2>20</h2>
              </div>

            </div>
          <div className = "labels">
                <h3>Mon</h3>
                <h3>Tue</h3>
                <h3>Wed</h3>
                <h3>Thu</h3>
                <h3>Fri</h3>
                <h3>Sat</h3>
                <h3>Sun</h3>
            </div>
      
        
      </div>
    );
  }
}

export default App;