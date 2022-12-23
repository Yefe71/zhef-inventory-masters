import React , {useState}from 'react'
import Chart from 'react-apexcharts'

const ChartSales = () => {


    const [state, setState] = useState({
        series: [{
            name: 'Customers',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2]
          }],
          options: {

 
            chart: {
              height: 350,
              type: 'bar',

              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#ffffff"]
              }
            },
            
            
                
            xaxis: {
              categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }
                
            },
            title: {
              text: 'Total sales this week',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },
    })

  







  return (
    <div className='ChartSales'>

    <Chart 
        options={state.options} 
        series={state.series} 
        type="bar" 
        height={300} 
        />




    </div>


  )
}

export default ChartSales

