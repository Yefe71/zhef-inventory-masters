import React, { Component, useState, useEffect} from "react";
import Chart from "react-apexcharts";
import './ChartSales.css'
import moment from 'moment'

function shortenLabels(value) {
  if (value >= 1000000) {
    return 'P' + (value / 1000000).toFixed(1) + 'm';
  } else if (value >= 1000) {
    return 'P' + (value / 1000).toFixed(1) + 'k';
  } else {
    return value;
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valueIncVat: ['wat'],

      currentWeekData:      
      [{
        name: "Week 1: 2022-12-08",
        data: [1557307.65, 212116.79, 1271749.24, 231179.55, 900765.68, 66767.69]
      }],
      currentWeekNum: "Week 1",
      currentWeekEnd: "2022-12-07",
      currentWeek: "2022-12-01",
      currentWeekDay: "",
      currentWeekDefault: "01",

    //Data
    // get total value inclusive vat of each product per week.
      weekTotalValIncVat: [],
   
    // get total quantity of each product per week. 
      weekTotalQuantity: [],
 
    // get total value inclusive vat of all products each day per week.
      weekTotalValIncVatProdPerDay: [],
 
    // get total quantity of all products each day per week.
      weekTotalQuantityProdPerDay: [],

      options: {

        colors:['#ed1b2f', '#ffffff', '#ffffff'],

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
          id: "basic-line",
          sparkline: {
            enabled: false
          },
        },

   

        yaxis: {
          min: 0,
          max: 3000000,
          tickAmount: 5,
          labels: {
            formatter: function(value) {
              return shortenLabels(value);
            },
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
          categories: ['ADO', 'ADO T', 'E10', 'KERO', 'XCS', 'XUB'],


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
          data: [1557307.65, 212116.79, 1271749.24, 231179.55, 900765.68, 66767.69]
        },
        {
          name: "Week 2: 2022-12-08",
          data: [482882.93, 17093, 226393, 28944, 132831, 12057]
        },
        {
          name: "Week 3: 2022-12-15",
          data: [2292862.73, 340154.28, 1383918.03, 244971.48, 1135987.48, 120485.12]
        },
        {
          name: "Week 4:2022-12-22",
          data: [696039.77, 154466.56, 922506.33, 207681.09, 1301989.12, 76318.5]
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


  
  componentDidMount() {

    this.setState({ 
      currentWeekDay: this.state.currentWeek.slice(-2)
    });
  
    //FETCH DATA
    
    fetch(`http://localhost:3000/grabdata?weekDay=${this.state.currentWeekDefault}`, {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
  
    .then(response => response.json())
    .then(values => { 

      if (values){

        let valueIncVat = values.map(item => item.valueinvat);
        this.setState({ 
          valueIncVat: valueIncVat
        },() => console.log(this.state.valueIncVat[0]));
        

      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWeek !== prevState.currentWeek) {
      const currentWeekData = this.state.series.filter(
        (datapoint) => datapoint.name.startsWith(this.state.currentWeek)
      );



      this.setState({ 
        currentWeekDay: this.state.currentWeek.slice(-2)
      });
  
      //FETCH DATA
    
      fetch(`http://localhost:3000/grabdata?weekDay=${this.state.currentWeekDay}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
      })
  
      .then(response => response.json())
      .then(values => { 

        if (values){

          let valueIncVat = values.map(item => item.valueinvat);
          this.setState({ 
            valueIncVat: valueIncVat
          },() => console.log(this.state.valueIncVat));
        

        }
      });


      switch (this.state.currentWeek) {
        case "2022-12-01":
          this.setState({ 
            currentWeekEnd: "2022-12-07",
            currentWeekNum: "Week 1",
            currentWeekData:      
            [{
            name: "Week 1: 2022-12-01",
            data: [1557307.65, 212116.79, 1271749.24, 231179.55, 900765.68, 66767.69]
            }],

         
            options: {
              ...this.state.options,
              colors: ['#ed1b2f', '#ffffff', '#ffffff'],
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
            data: [482882.93, 17093, 226393, 28944, 132831, 12057]
            }],
            options: {
              ...this.state.options,
              colors: ['#ed1b2f', '#ffffff', '#ffffff'],
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
            data: [2292862.73, 340154.28, 1383918.03, 244971.48, 1135987.48, 120485.12]
            }],
              options: {
                  ...this.state.options,
                  colors: ['#ed1b2f', '#ffffff', '#ffffff'],
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
            data: [696039.77, 154466.56, 922506.33, 207681.09, 1301989.12, 76318.5]
            }],              options: {
                  ...this.state.options,
                  colors: ['#ed1b2f', '#ffffff', '#ffffff'],
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
  
          <div className="topBarSales">
            <div className="topLeft">
               <h1>{this.state.currentWeekNum}</h1>
               <h2>{this.state.currentWeek} → {this.state.currentWeekEnd} </h2>
            </div>

             <h1 className = "titleSales">Top Sales</h1>
             <div className="nav-buttons">
             <button onClick={ () => {this.moveBackward()}} type = "button" className = "backBt">&lt;</button>
              <button  onClick={ () => {this.moveForward()}} type = "button" className ="forwardBt">&gt;</button>

             </div>

          </div>
       
          
          <div className="mixed-chart">

          <Chart
                options={this.state.options}
                series={this.state.currentWeekData}
                type="area"
                width="650"
                
              />

              
          </div>

      
        
      </div>
    );
  }
}

export default App;