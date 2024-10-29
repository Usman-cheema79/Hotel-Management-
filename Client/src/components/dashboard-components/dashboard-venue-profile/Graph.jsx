import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Auditorium', 'Ballroom', 'Club 07', 'Conference', 'Restaurants'],
  datasets: [
    {
      label: 'Enquiries',
      data: [80, 90, 50, 20, 60],
      backgroundColor: '#27c2b0',
      barThickness: 70, // Decrease the width of the bars
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20, // Set the step size to 20
        callback: function(value) {
          return `${value}`; // Customize this if needed
        },
      },
      grid: {
        borderDash: [5, 5], // Set horizontal grid lines to dotted
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const Graph = () => {
  return (
    <div className="h-64">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
