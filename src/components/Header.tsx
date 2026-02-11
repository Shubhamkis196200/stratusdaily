import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const loc = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/tools', label: 'Tools' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
  ];
  return (
    <header style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: '#1e40af' }}>Stratus</span>
          <span style={{ fontSize: 24, fontWeight: 300, color: '#374151' }}>Daily</span>
        </Link>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              textDecoration: 'none',
              fontWeight: loc.pathname === l.to ? 700 : 500,
              color: loc.pathname === l.to ? '#1e40af' : '#374151',
              fontSize: '0.95rem',
            }}>{l.label}</Link>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          display: 'none', background: 'none', border: 'none', fontSize: 24, cursor: 'pointer'
        }}>☰</button>
      </div>
      {menuOpen && (
        <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '0.5rem 0', textDecoration: 'none', color: '#374151', fontWeight: 500
            }}>{l.label}</Link>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
