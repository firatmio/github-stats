import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface Props {
  repos: any[];
}

export default function Charts({ repos }: Props) {
  // Dil dağılımı
  const languageCount: any = {};
  repos.forEach((r) => {
    if (r.language) {
      languageCount[r.language] = (languageCount[r.language] || 0) + 1;
    }
  });

  const pieData = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        data: Object.values(languageCount),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Commit grafiği (tahmini)
  const barData = {
    labels: repos.map((r) => r.name),
    datasets: [
      {
        label: "Repo Size (proxy for commits)",
        data: repos.map((r) => r.size),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart">
        <h4>Language Distribution</h4>
        <Pie data={pieData} />
      </div>
      <div className="chart">
        <h4>Commits (Repo Size Proxy)</h4>
        <Bar data={barData} />
      </div>
    </div>
  );
}
