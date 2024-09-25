import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function UserCompletionRateGraph() {
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i * 10),
    datasets: [
      {
        label: "User Completion Rate",
        data: Array.from(
          { length: 31 },
          (_, i) => 100 * Math.exp(-0.01 * i * 10)
        ),
        // Ensure points are invisible in the dataset itself
        pointBackgroundColor: "rgba(255, 0, 0, 0)", // Make points invisible
        pointBorderColor: "rgba(255, 0, 0, 0)", // Make point borders invisible
        borderColor: "#804ee8", // Line color
        borderWidth: 1, // Line width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "top" as const,
      },
      title: {
        display: true,
        text: "User Completion Rate Graph",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.parsed.y.toFixed(1)}% users are watching`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (seconds)",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Completion Rate (%)",
        },
        // ticks: {
        //   callback: (value: any) => `${value}%`,
        // },
      },
    },
    elements: {
      point: {
        radius: 4,
        backgroundColor: "rgba(255, 0, 0, 0)", // Invisible background color (red with 0 opacity)
        borderColor: "rgba(255, 0, 0, 0)", // Invisible border color (red with 0 opacity)
        hoverRadius: 4,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.5)", // Show points on hover
      },
    },
  };

  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
}
