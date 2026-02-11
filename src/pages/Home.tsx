import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { toolsList } from '../lib/tools-data';

export default function Home() {
  const featured = toolsList.slice(0, 6);
  
  return (
    <>
      <SEO title="Home" description="Stratus Daily - Your go-to resource for startup tools, insights, and analysis. Built for founders, by founders." path="/" />
      
      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 900 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            Build Better Startups with Data-Driven Tools
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
            50+ calculators, analyzers, and planning tools for founders, VCs, and startup teams.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tools" className="btn-primary" style={{ background: 'white', color: '#1e40af', textDecoration: 'none', fontSize: '1.1rem', padding: '0.875rem 2rem' }}>
              Explore Tools
            </Link>
            <Link to="/blog" className="btn-secondary" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding: '0.875rem 2rem', border: '1px solid rgba(255,255,255,0.4)' }}>
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Featured Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featured.map(tool => (
              <Link key={tool.slug} to={`/tools/${tool.slug}`} style={{ textDecoration: 'none' }}>
                <div className="tool-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e40af' }}>{tool.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.5 }}>{tool.description}</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#3b82f6' }}>Calculate →</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/tools" className="btn-primary" style={{ textDecoration: 'none' }}>View All {toolsList.length} Tools</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Stratus Daily?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📊</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Real Calculators</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Every tool has working logic—no placeholders</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Founder-Focused</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Built by founders who know the pain points</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💡</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Always Free</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>No paywalls, no registration required</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
