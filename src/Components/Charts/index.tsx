// components/BarChart.js
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement
);

export type x = "top" | "bottom" | "left" | "right" | "center" | "chartArea";

const BarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "red",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Colors Distribution",
        data: [12, 19, 3, 5, 2, 3], // Data values
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options (optional)
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as x,
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure y-axis starts from 0
      },
    },
  };

  return (
    <div>
      <Bar
        data={data}
        options={options}
        className="!w-[40%] !h-[300px] mx-auto"
      />

      <Line
        data={data}
        options={options}
        className="!w-[40%] !h-[300px] mx-auto"
      />

      <Pie
        data={pieData}
        options={pieOptions}
        className="!w-[40%] !h-[600px] mx-auto"
      />
    </div>
  );
};

export default BarChart;
