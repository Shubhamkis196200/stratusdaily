import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const posts = [
  { slug: 'saas-metrics-that-matter', title: 'The Only SaaS Metrics That Actually Matter in 2025', excerpt: 'Learn which metrics VCs actually care about and how to track them effectively.', date: '2025-02-10', readTime: '12 min' },
  { slug: 'fundraising-guide-2025', title: 'Complete Fundraising Guide for Seed Stage Startups', excerpt: 'Everything you need to know about raising your seed round in today\'s market.', date: '2025-02-08', readTime: '15 min' },
  { slug: 'cap-table-management', title: 'Cap Table Management: Avoiding Common Founder Mistakes', excerpt: 'Don\'t let poor cap table decisions haunt you. Learn proper equity management.', date: '2025-02-05', readTime: '10 min' },
  { slug: 'pricing-strategy-saas', title: 'Pricing Strategy for Early-Stage SaaS Startups', excerpt: 'How to price your SaaS product when you have no data or competitors.', date: '2025-02-01', readTime: '14 min' },
  { slug: 'burn-rate-optimization', title: 'Burn Rate Optimization: Extending Your Runway', excerpt: 'Practical strategies to reduce burn without killing growth.', date: '2025-01-28', readTime: '11 min' },
];

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Insights, analysis, and guides for startup founders and VCs." path="/blog" />
      
      <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: 900 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center' }}>Stratus Daily Blog</h1>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Insights and analysis for the startup ecosystem
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article className="tool-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                  {post.date} · {post.readTime} read
                </div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#111827' }}>{post.title}</h2>
                <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.95rem', fontWeight: 600, color: '#3b82f6' }}>Read More →</div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
