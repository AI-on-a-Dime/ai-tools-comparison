import { getPricingByTool } from '../lib/data';

export default function PricingTable({ tools }) {
  // Get all unique pricing tiers
  const allTiers = [...new Set(tools.flatMap(tool => 
    getPricingByTool(tool.id).map(tier => tier.tierName)
  ))];
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left">Tool</th>
            {allTiers.map((tier, index) => (
              <th key={index} className="py-3 px-4 text-left">{tier}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, toolIndex) => (
            <tr key={tool.id} className={toolIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="py-3 px-4 font-medium">{tool.name}</td>
              {allTiers.map((tier, tierIndex) => {
                const pricing = getPricingByTool(tool.id).find(p => p.tierName === tier);
                return (
                  <td key={tierIndex} className="py-3 px-4">
                    {pricing ? (
                      <>
                        <div className="font-semibold">${pricing.price}{tier === 'API' ? '/1K tokens' : '/month'}</div>
                        <ul className="text-sm text-gray-600 mt-1">
                          {pricing.features.map((feature, i) => (
                            <li key={i} className="list-disc list-inside">{feature}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}