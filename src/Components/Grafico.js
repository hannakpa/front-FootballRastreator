import {
  Chart,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
/* eslint-disable react/prop-types */
// Gráfico tipo Line, importado de Chart.js-2

function Grafico({ chartOptions, data }) {
  Chart.defaults.color = "grey";
  Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend);
  console.log(data);
  return (
    <>
      <Bar options={chartOptions} data={data} />
    </>
  );
}

export default Grafico;
