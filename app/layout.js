import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'AI Tools Comparison',
  description: 'Compare AI tools across categories with pricing and benchmarks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2023 AI Tools Comparison. All data is for demonstration purposes.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}