import { getPricingByTool, getBenchmarksByTool } from '../lib/data';

export default function ToolDetail({ tool }) {
  const pricing = getPricingByTool(tool.id);
  const benchmarks = getBenchmarksByTool(tool.id);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start mb-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mr-6 text-2xl">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{tool.name}</h1>
            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        
        <p className="text-gray-700 mb-8">{tool.description}</p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.map(tier => (
              <div key={tier.id} className="border rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">{tier.tierName}</h3>
                <div className="text-2xl font-bold text-primary mb-3">
                  ${tier.price}{tier.tierName === 'API' ? '/1K tokens' : '/month'}
                </div>
                <ul className="space-y-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Benchmark Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Source</th>
                  <th className="py-2 px-4 text-left">Metric</th>
                  <th className="py-2 px-4 text-left">Score</th>
                  <th className="py-2 px-4 text-left">Rank</th>
                  <th className="py-2 px-4 text-left">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(benchmark => (
                  <tr key={benchmark.id} className="border-b">
                    <td className="py-2 px-4">{benchmark.sourceName}</td>
                    <td className="py-2 px-4">{benchmark.scoreName}</td>
                    <td className="py-2 px-4 font-semibold">{benchmark.scoreValue}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        benchmark.rank === 1 ? 'bg-green-100 text-green-800' : 
                        benchmark.rank <= 3 ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}>
                        #{benchmark.rank}
                      </span>
                    </td>
                    <td className="py-2 px-4">{benchmark.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}