import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function ToolLayout({ title, description, slug, children }: { title: string; description: string; slug: string; children: ReactNode }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <SEO title={title} description={description} path={`/tools/${slug}`} />
      <nav style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link to="/tools" style={{ color: '#6b7280', textDecoration: 'none' }}>Tools</Link>
        {' / '}
        <span style={{ color: '#374151' }}>{title}</span>
      </nav>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#111827' }}>{title}</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.6 }}>{description}</p>
      {children}
    </div>
  );
}
