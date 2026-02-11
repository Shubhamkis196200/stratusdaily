import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Stratus Daily and our mission to empower startup founders with data-driven tools and insights." path="/about" />
      
      <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: 800 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About Stratus Daily</h1>
        
        <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#374151' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Stratus Daily was built by founders, for founders. We understand the challenges of building a startup because we've lived them—the late nights calculating burn rates, the stress of fundraising, the complexity of managing a cap table, and the endless search for reliable data to make better decisions.
          </p>
          
          <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1e40af' }}>Our Mission</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We believe every founder deserves access to professional-grade tools and insights, not just those backed by top-tier VCs. That's why we've built 50+ calculators, analyzers, and planning tools—all completely free, with no registration required.
          </p>
          
          <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1e40af' }}>What Makes Us Different</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Real Logic, No Placeholders:</strong> Every tool on Stratus Daily contains actual working calculations. We don't do fake tools.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Built by Operators:</strong> Our team has founded, scaled, and exited startups. We know what metrics matter because we've tracked them ourselves.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Always Free:</strong> No paywalls, no "premium" tiers, no credit card required. If it's on Stratus Daily, it's free.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Privacy First:</strong> We don't store your calculations or data. Everything happens in your browser.</li>
          </ul>
          
          <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1e40af' }}>Our Tools</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            From startup valuation calculators to pitch deck scorers, from burn rate trackers to cap table builders—we've created tools for every stage of the startup journey. Whether you're pre-revenue or scaling past $10M ARR, you'll find tools tailored to your needs.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Our blog provides deep-dive analyses on fundraising, metrics, operations, and strategy. We don't regurgitate generic advice—we share battle-tested insights from real operators who've been in the trenches.
          </p>
          
          <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1e40af' }}>Get in Touch</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Have feedback? Want to suggest a tool? Found a bug? We'd love to hear from you. Email us at <strong>hello@stratusdaily.com</strong> or connect with us on Twitter <strong>@stratusdaily</strong>.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            We're constantly adding new tools and content based on founder feedback. If there's a calculator or resource you'd find valuable, let us know—we might just build it.
          </p>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#eff6ff', borderRadius: 12, borderLeft: '4px solid #3b82f6' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Building the future of startups, one tool at a time.</p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>— The Stratus Daily Team</p>
          </div>
        </div>
      </div>
    </>
  );
}
