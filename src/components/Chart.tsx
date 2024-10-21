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
  ChartOptions, // Import ChartOptions for typing
} from "chart.js";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 80, 240, 181, 256, 155, 240, 230, 160, 80, 30, 245],
        fill: false,
        borderColor: "rgba(239, 68, 68, 1)",
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [70, 50, 90, 75, 60, 50, 35, 15, 55, 400, 25, 50],
        fill: false,
        borderColor: "rgba(167, 0, 255, 1)",
        tension: 0.1,
      },
      {
        label: "Dataset 3",
        data: [40, 20, 90, 25, 10, 50, 15, 35, 85, 100, 200, 300],
        fill: false,
        borderColor: "rgba(60, 216, 86, 1)",
        tension: 0.1,
      },
    ],
  };

  // Define options with correct typing
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false, // Important for responsiveness in flexible containers
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      title: {
        display: false,
        text: "Monthly Data Comparison",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
        },
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
        },
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
    },
  };

  return (
    <Flex
      width={{ base: "100%", md: "100%", lg: "100%" }}
      height={{ base: "200px", md: "300px", lg: "300px" }}
    >
      <Line data={data} options={options} />
    </Flex>
  );
};

export default Chart;
