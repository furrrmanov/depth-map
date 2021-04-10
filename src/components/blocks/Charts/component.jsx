import { Line } from 'react-chartjs-2'

export default function Charts() {
  const x = [65, 62, 59, 56, 53, 50, 47, 44, 41, 39]
  const y = [12, 8, 8, 7, 5, 5, 5, 4, 4, 2]
  const chartData = {
    labels: x,
    datasets: [
      {
        fill: 'start',
        lineTension: 0.1,
        backgroundColor: '#FFCF78',
        borderColor: 'FCC156',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'FFA809',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'FFA809',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: y,
      },
    ],
  }

  return (
    <div>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  reverse: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  reverse: true,
                },
              },
            ],
          },
        }}
        height={400}
        width={600}
      />
    </div>
  )
}
