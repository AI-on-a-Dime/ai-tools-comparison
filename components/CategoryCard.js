import Link from 'next/link';

export default function CategoryCard({ category }) {
  return (
    <Link href={`/categories/${category.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </Link>
  );
}