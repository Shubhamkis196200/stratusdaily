import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { toolsList, categoryLabels } from '../lib/tools-data';

export default function Tools() {
  const categories = Object.keys(categoryLabels);
  
  return (
    <>
      <SEO title="All Tools" description="Browse 50+ startup tools for finance, marketing, planning, operations, and fundraising." path="/tools" />
      
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center' }}>Startup Tools</h1>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '3rem', fontSize: '1.1rem' }}>
          {toolsList.length} calculators, analyzers, and planners for your startup journey
        </p>

        {categories.map(cat => {
          const tools = toolsList.filter(t => t.category === cat);
          return (
            <section key={cat} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#1e40af', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                {categoryLabels[cat as keyof typeof categoryLabels]}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {tools.map(tool => (
                  <Link key={tool.slug} to={`/tools/${tool.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="tool-card" style={{ height: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '1.75rem' }}>{tool.icon}</span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827' }}>{tool.name}</h3>
                      </div>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
