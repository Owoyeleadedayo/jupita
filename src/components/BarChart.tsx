import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [35, 20, 40, 41, 46, 35],
        backgroundColor: "rgba(0, 224, 150, 1)",
        borderColor: "rgba(0, 224, 150, 1)",
        borderWidth: 1,
      },
      {
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(252, 12, 12, 1)",
        borderColor: "rgba(252, 12, 12, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true, 
        display: false, 
        barPercentage: 0.1, 
        categoryPercentage: 0.2, 
      },
      y: {
        stacked: true, 
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  return (
    <Flex >
      <Bar data={data} options={options} />
    </Flex>
  );
};

export default BarChart;
