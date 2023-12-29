import { Bill } from "@/app/types/types";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {
  data: Bill[];
};

export function EnergyChart(props: Props) {
  const labelsDates = props.data?.map((item) => item.date);
  const electricityConsumption = props.data.map(
    (item) => item.eletricityConsumption + item.sceeeeConsumption
  );
  const gdiEnergyConsumption = props.data.map(
    (item) => item.gdiEnergyConsumption
  );

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Energia (kWh)",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = labelsDates||[];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Consumo de Energia Elétrica KWh",
        data: electricityConsumption,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Energia Compensada kWh",
        data: gdiEnergyConsumption,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line data={chartData} options={options} />;
}
