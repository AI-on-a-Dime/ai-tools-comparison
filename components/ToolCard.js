import Link from 'next/link';

export default function ToolCard({ tool }) {
  return (
    <Link href={`/tools/${tool.id}`} className="block">
      <div className="bg-white rounded-lg shadow p-4 border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-3">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center mr-4">
            {tool.name.charAt(0)}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
        </div>
        <p className="text-gray-600 text-sm">{tool.description}</p>
      </div>
    </Link>
  );
}