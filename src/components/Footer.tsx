import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e5e7eb', padding: '3rem 0', marginTop: '4rem', background: '#f9fafb' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#1e40af' }}>Stratus Daily</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>Your go-to resource for startup tools, insights, and analysis. Built for founders, by founders.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', color: '#6b7280' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/tools" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>All Tools</Link>
              <Link to="/blog" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>Blog</Link>
              <Link to="/about" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>About</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', color: '#6b7280' }}>Popular Tools</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/tools/startup-valuation-calculator" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>Valuation Calculator</Link>
              <Link to="/tools/burn-rate-calculator" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>Burn Rate Calculator</Link>
              <Link to="/tools/safe-calculator" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.875rem' }}>SAFE Calculator</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Stratus Daily. All rights reserved. Built for the startup ecosystem.
        </div>
      </div>
    </footer>
  );
}
