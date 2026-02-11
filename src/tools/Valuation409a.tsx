import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function Valuation409a() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('25');
  const fmv = (parseFloat(price) || 0) * (1 - (parseFloat(discount) || 0) / 100);
  return (
    <ToolLayout title="409A Valuation Estimator" description="Estimate fair market value for 409A compliance." slug="valuation-409a">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Preferred Price ($)</label><input className="input-field" type="number" value={price} onChange={e => setPrice(e.target.value)} /></div>
          <div><label>Discount (%)</label><input className="input-field" type="number" value={discount} onChange={e => setDiscount(e.target.value)} /></div>
        </div>
      </div>
      {fmv > 0 && <div className="result-box" style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>${fmv.toFixed(2)}</div><div style={{ color: '#6b7280' }}>Estimated 409A FMV per share</div></div>}
    </ToolLayout>
  );
}
