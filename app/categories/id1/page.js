'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import ToolCard from '../../../components/ToolCard';
import PricingTable from '../../../components/PricingTable';
import BenchmarkChart from '../../../components/BenchmarkChart';
import { getCategoryById, getToolsByCategory } from '../../../../lib/data';

export default function CategoryPage({ params }) {
  const category = getCategoryById(params.id);
  
  if (!category) {
    notFound();
  }
  
  const tools = getToolsByCategory(params.id);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  
  const sortedTools = useMemo(() => {
    return [...tools].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [tools, sortBy]);
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <label className="mr-2">Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        
        <div>
          <label className="mr-2">Filter:</label>
          <select 
            value={filterBy} 
            onChange={(e) => setFilterBy(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="all">All Tools</option>
            <option value="free">Free Only</option>
            <option value="paid">Paid Only</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sortedTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Comparison</h2>
        <PricingTable tools={tools} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Benchmark Comparison</h2>
        <BenchmarkChart tools={tools} />
      </div>
    </div>
  );
}