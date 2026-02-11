import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function LtvCalculator() {
  const [arpu, setArpu] = useState('');
  const [grossMargin, setGrossMargin] = useState('70');
  const [churnRate, setChurnRate] = useState('');

  const a = parseFloat(arpu) || 0;
  const gm = (parseFloat(grossMargin) || 0) / 100;
  const cr = (parseFloat(churnRate) || 0) / 100;
  const simpleLtv = cr > 0 ? a / cr : 0;
  const marginLtv = cr > 0 ? (a * gm) / cr : 0;
  const avgLife = cr > 0 ? 1 / cr : 0;
  // const yr1 = a * 12 * (1 - Math.pow(1 - cr, 12));
  const totalRev = a * avgLife;

  return (
    <ToolLayout title="LTV Calculator" description="Calculate customer lifetime value using multiple models." slug="ltv-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Monthly ARPU ($)</label><input className="input-field" type="number" value={arpu} onChange={e => setArpu(e.target.value)} placeholder="e.g. 99" /></div>
          <div><label>Gross Margin (%)</label><input className="input-field" type="number" value={grossMargin} onChange={e => setGrossMargin(e.target.value)} /></div>
          <div><label>Monthly Churn (%)</label><input className="input-field" type="number" value={churnRate} onChange={e => setChurnRate(e.target.value)} placeholder="e.g. 5" /></div>
        </div>
      </div>
      <div className="result-box">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Simple LTV</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>${simpleLtv.toFixed(0)}</div>
            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>ARPU / Churn</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Gross Margin LTV</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>${marginLtv.toFixed(0)}</div>
            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>ARPU × GM / Churn</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Avg Lifetime</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{avgLife.toFixed(1)} mo</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#fdf4ff', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Total Revenue</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#a855f7' }}>${totalRev.toFixed(0)}</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}