import { notFound } from 'next/navigation';
import ToolDetail from '../../../components/ToolDetail';
import { getToolById } from '../../../../lib/data';

export default function ToolDetailPage({ params }) {
  const tool = getToolById(params.id);
  
  if (!tool) {
    notFound();
  }
  
  return (
    <div>
      <ToolDetail tool={tool} />
    </div>
  );
}