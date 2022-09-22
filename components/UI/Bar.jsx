import { Bar } from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import homeStyle from "./styles/Bar.module.css";
import myData from "./data.json";

function getMax(arr, prop) {
  var max;
  for (var i = 0; i < arr.length; i++) {
    if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
      max = arr[i];
  }
  return max;
}
const maxPpg = getMax(myData, "amount");

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);
const labels = myData.map((d) => d.day);
const amounts = myData.map((d) => d.amount);
const bgColor = myData.map((d) =>
  d.amount === maxPpg.amount ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
);
const data = {
  labels: labels,
  datasets: [
    {
      label: "$",
      data: amounts,
      backgroundColor: bgColor,
    },
  ],
};

const Bars = () => {
  return (
    <div className={homeStyle.main}>
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Bars;
