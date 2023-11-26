import React from 'react'
import { Bar} from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);
function Result(props) {
  const {result} = props;
  return (
    <div className='mt-10 flex flex-col items-center'>

 <div className='font-bold text-4xl border-b-2 w-40 text-center mb-8'>Result</div>
      <div className="chart-container">
      <Bar
        data={
          {
            labels: result.map(item => `${item.partyName} (${Math.round(item.percentage*100)}%)`),
            datasets: [
              {
                label: 'Percentage',
                backgroundColor: '#f9be1e',
                borderWidth: 1,
                data: result.map(item => item.percentage*100)
              }
            ]
          }
        }
        options= {
          {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Result"
            }
          }
        }
        }
      />
    </div>
    </div>
  )
}

export default Result