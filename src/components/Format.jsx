import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Mg", "Ca", "Fe", "", "Purple", "Orange"],
  datasets: [
    {
      label: "% of Mineral",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
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

export function Format() {
  return (
    <div className="flex ">
      <div className="h-[300px] w-[300]">
        <Pie data={data} />
      </div>
      <div>
        <div className="flex  items-center justify-center mt-16 ml-16">
          Water Availaibiltiy : <h1>69%</h1>
          <img alt="Water image" />
        </div>
      </div>
    </div>
  );
}