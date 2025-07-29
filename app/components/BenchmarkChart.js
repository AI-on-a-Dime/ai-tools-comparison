import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getBenchmarksByTool } from '../lib/data';

export default function BenchmarkChart({ tools }) {
  // Prepare data for chart
  const chartData = tools.map(tool => {
    const benchmarks = getBenchmarksByTool(tool.id);
    const data = { name: tool.name };
    benchmarks.forEach(b => {
      data[b.sourceName] = b.scoreValue;
    });
    return data;
  });

  // Get all benchmark sources
  const sources = [...new Set(tools.flatMap(tool => 
    getBenchmarksByTool(tool.id).map(b => b.sourceName)
  ))];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Benchmark Comparison</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
            <YAxis />
            <Tooltip />
            <Legend />
            {sources.map((source, index) => (
              <Bar 
                key={index} 
                dataKey={source} 
                fill={index % 2 === 0 ? '#6366f1' : '#8b5cf6'} 
                name={source}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}