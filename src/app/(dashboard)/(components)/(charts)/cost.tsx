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

export function CostChart(props: Props) {
  const labelsDates = props.data.map((item) => item.date);
  const totalValueWithoutGD = props.data.map(
    (item) => item.eletricityCost + item.sceeeeCost + item.publicContribution
  );

  const economiaGD = props.data.map((item) => item.gdiEnergyCost);

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
        text: "Valores Monetários (R$)",
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

  const labels = labelsDates;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Valor Total sem GD (R$)",
        data: totalValueWithoutGD,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Economia GD (R$)",
        data: economiaGD,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line data={chartData} options={options} />;
}
