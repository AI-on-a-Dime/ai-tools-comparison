import CategoryCard from '../components/CategoryCard';
import { categories } from '../lib/data';

export default function HomePage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Compare AI Tools</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover and compare the best AI tools across categories with detailed pricing and benchmark data
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}