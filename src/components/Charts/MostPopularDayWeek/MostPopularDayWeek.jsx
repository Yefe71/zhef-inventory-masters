import React, { Component, useState, useEffect} from "react";
import Chart from "react-apexcharts";
import './MostPopularDayWeek.css'
import moment from 'moment'



class App extends Component {

  constructor(props) {
    super(props);

    
    this.state = {
      currentWeekData:      
      [{
        name: "Week 1: 2022-12-08",
        data: [10, 80, 45, 55, 49, 60, 100]
      }],
      currentWeekNum: "Week 1",
      currentWeekEnd: "2022-12-07",
      currentWeek: "2022-12-01",
      options: {
        
        colors:['#ff7e05ea', '#ffffff', '#ffffff'],
        grid: {
          borderColor: '#444443',
          
            padding: {
             left: 0,
             right: 0
            },
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false,
                 //or just here to disable only x axis grids
               }
             },
             
   
          },
        chart: {
          width: '100%',
          id: "basic-line",
          sparkline: {
            enabled: false
          },
 
          
        },

   

        yaxis: {
  
          min: 0,
          max: 100,
          tickAmount: 5,
          labels: {
            style: {
              colors: 'white',
              fontFamily: 'Poppins',
              fontSize: '16px'
              }
            },
              
        },
        xaxis: {
          axisTicks: {
            color: '#363636'
          },
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],


          labels: {
            style: {
              colors: 'white',
              fontFamily: 'Poppins',
              fontSize: '16px'}
            },
            
          
        }
      },
      
      series: [
        {
          name: "Week 1: 2022-12-01",
          data: [10, 80, 45, 55, 49, 60, 100]
        },
        {
          name: "Week 2: 2022-12-08",
          data: [30, 40, 45, 80, 49, 60, 40]
        },
        {
          name: "Week 3: 2022-12-15",
          data: [30, 40, 30, 50, 49, 60, 30]
        },
        {
          name: "Week 4:2022-12-22",
          data: [30, 40, 45, 50, 49, 50, 90]
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
            currentWeekEnd: "2022-12-07",
            currentWeekNum: "Week 1",
            currentWeekData:      
            [{
            name: "Week 1: 2022-12-01",
            data: [10, 80, 45, 55, 49, 60, 100]
            }],

         
            options: {
              ...this.state.options,
              colors: ['#ff912aea', '#ffffff', '#ffffff'],
            },
          });
          break;

        case "2022-12-08":
          this.setState({ 
            currentWeekEnd: "2022-12-14",
            currentWeekNum: "Week 2",
            currentWeekData:      
            [{
            
            name: "Week 2: 2022-12-08",
            data: [30, 40, 45, 80, 49, 60, 40]
            }],
            options: {
              ...this.state.options,
              colors: ['#ff7e05ea', '#ffffff', '#ffffff'],
            },
     
          });
          break;
        case "2022-12-15":
          this.setState({ 
            currentWeekEnd: "2022-12-21",
            currentWeekNum: "Week 3",
            currentWeekData:      
            [{
            name: "Week 3: 2022-12-15",
            data: [30, 40, 30, 50, 49, 60, 30]
            }],
              options: {
                  ...this.state.options,
                  colors: ['#ff912aea', '#ffffff', '#ffffff'],
                },




          });
          break;
        case "2022-12-22":
          this.setState({
            currentWeekEnd: "2022-12-28",
            currentWeekNum: "Week 4",
            currentWeekData:      
            [{
            name: "Week 4: 2022-12-22",
            data: [30, 40, 45, 50, 49, 50, 90]
            }],              options: {
                  ...this.state.options,
                  colors: ['#ff912aea', '#ffffff', '#ffffff'],
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
  
  <div className="topBarDayWeek">
            <div className="topLeft">
               <h1>{this.state.currentWeekNum}</h1>
               <h2>{this.state.currentWeek} → {this.state.currentWeekEnd} </h2>
            </div>
           
              <h1 className = "titleDayWeek">Daily Sales per Week</h1>
              <h2 className = "titleDayWeekSub">(In Philippine Peso)</h2>

             
             <div className="nav-buttons">
             <button onClick={ () => {this.moveBackward()}} type = "button" className = "backBt">&lt;</button>
              <button  onClick={ () => {this.moveForward()}} type = "button" className ="forwardBt">&gt;</button>

             </div>

          </div>
       
          
          <div className="mixed-chart">

          <Chart
                options={this.state.options}
                series={this.state.currentWeekData}
                type="line"
                width="650"
                
              />

              
          </div>

      
        
      </div>
    );
  }
}

export default App;