import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function ConvertibleNoteCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('5');
  const [months, setMonths] = useState('18');
  const p = parseFloat(principal) || 0;
  const interest = p * (parseFloat(rate) || 0) / 100 * (parseInt(months) || 0) / 12;
  const total = p + interest;
  return (
    <ToolLayout title="Convertible Note Calculator" description="Calculate conversion terms with discount and cap." slug="convertible-note-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Principal ($)</label><input className="input-field" type="number" value={principal} onChange={e => setPrincipal(e.target.value)} /></div>
          <div><label>Interest (%)</label><input className="input-field" type="number" value={rate} onChange={e => setRate(e.target.value)} /></div>
          <div><label>Term (months)</label><input className="input-field" type="number" value={months} onChange={e => setMonths(e.target.value)} /></div>
        </div>
      </div>
      {total > 0 && <div className="result-box"><div style={{ display: 'flex', justifyContent: 'space-around' }}><div style={{ textAlign: 'center' }}><div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Interest</div><div style={{ fontSize: '1.5rem', fontWeight: 700 }}>${interest.toFixed(0)}</div></div><div style={{ textAlign: 'center' }}><div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Total Owed</div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>${total.toFixed(0)}</div></div></div></div>}
    </ToolLayout>
  );
}
