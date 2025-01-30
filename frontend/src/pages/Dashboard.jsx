import React from 'react';
import useFetch from '../hooks/useFetch';
import Chart from '../components/Chart';
import Card from '../components/Card';

const Dashboard = () => {
  const { data, loading, error } = useFetch('http://localhost:5000/api/portfolio');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const chartData = {
    labels: data?.map(item => item.date),
    datasets: [
      {
        label: 'Portfolio Value',
        data: data?.map(item => item.value),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <Chart data={chartData} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card title="Total Portfolio Value" value={`$${data[data.length - 1]?.value}`} />
        <Card title="ROI" value="12.5%" />
        <Card title="Drawdown" value="-8.2%" />
      </div>
    </div>
  );
};

export default Dashboard;
