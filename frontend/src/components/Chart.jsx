import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({ data }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Line data={data} />
    </div>
  );
};

export default Chart;
