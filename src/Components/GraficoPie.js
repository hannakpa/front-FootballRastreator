import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
/* eslint-disable react/prop-types */

// Gráfico tipo Tarta/Pie, importado de Chart.js-2

function PieGraph({ chartOptions, data }) {
  Chart.defaults.color = "grey";
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
      <Pie options={chartOptions} data={data} />
    </>
  );
}

export default PieGraph;
