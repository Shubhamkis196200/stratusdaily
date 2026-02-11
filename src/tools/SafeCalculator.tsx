import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function SafeCalculator() {
  const [amount, setAmount] = useState('');
  const [cap, setCap] = useState('');
  const [valuation, setValuation] = useState('');
  const safe = parseFloat(amount) || 0;
  const capVal = parseFloat(cap) || 0;
  const val = parseFloat(valuation) || 0;
  const ownership = val > 0 && capVal > 0 ? (safe / Math.min(capVal, val)) * 100 : 0;
  return (
    <ToolLayout title="SAFE Calculator" description="Model SAFE conversions with caps and discounts." slug="safe-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>SAFE Amount ($)</label><input className="input-field" type="number" value={amount} onChange={e => setAmount(e.target.value)} /></div>
          <div><label>Cap ($)</label><input className="input-field" type="number" value={cap} onChange={e => setCap(e.target.value)} /></div>
          <div><label>Next Round Val ($)</label><input className="input-field" type="number" value={valuation} onChange={e => setValuation(e.target.value)} /></div>
        </div>
      </div>
      {ownership > 0 && <div className="result-box" style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>{ownership.toFixed(2)}%</div><div style={{ color: '#6b7280' }}>Estimated ownership</div></div>}
    </ToolLayout>
  );
}
