import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function UnitEconomicsCalculator() {
  const [price, setPrice] = useState('');
  const [cogs, setCogs] = useState('');
  const [cac, setCac] = useState('');
  const [ltv, setLtv] = useState('');

  const revenuePerUnit = parseFloat(price) || 0;
  const costPerUnit = parseFloat(cogs) || 0;
  const acqCost = parseFloat(cac) || 0;
  const lifetime = parseFloat(ltv) || 0;
  const contribution = revenuePerUnit - costPerUnit;
  const margin = revenuePerUnit > 0 ? (contribution / revenuePerUnit * 100) : 0;
  const ltvCacRatio = acqCost > 0 ? lifetime / acqCost : 0;
  const payback = contribution > 0 ? acqCost / contribution : 0;
  const healthy = ltvCacRatio >= 3 && payback <= 12;

  return (
    <ToolLayout title="Unit Economics Calculator" description="Analyze the direct revenues and costs associated with a single unit of your product." slug="unit-economics-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Revenue per Unit ($)</label><input className="input-field" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 99" /></div>
          <div><label>COGS per Unit ($)</label><input className="input-field" type="number" value={cogs} onChange={e => setCogs(e.target.value)} placeholder="e.g. 20" /></div>
          <div><label>Customer Acquisition Cost ($)</label><input className="input-field" type="number" value={cac} onChange={e => setCac(e.target.value)} placeholder="e.g. 150" /></div>
          <div><label>Lifetime Value ($)</label><input className="input-field" type="number" value={ltv} onChange={e => setLtv(e.target.value)} placeholder="e.g. 1200" /></div>
        </div>
      </div>
      <div className="result-box">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Contribution Margin</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: margin > 50 ? '#16a34a' : '#f59e0b' }}>${contribution.toFixed(2)}</div>
            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{margin.toFixed(1)}% margin</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>LTV:CAC Ratio</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: ltvCacRatio >= 3 ? '#16a34a' : '#dc2626' }}>{ltvCacRatio.toFixed(1)}x</div>
            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{ltvCacRatio >= 3 ? 'Healthy (≥3x)' : 'Below target (<3x)'}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>CAC Payback</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: payback <= 12 ? '#16a34a' : '#dc2626' }}>{payback.toFixed(0)} mo</div>
            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{payback <= 12 ? 'Good' : 'Too long'}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: healthy ? '#f0fdf4' : '#fef2f2', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Overall</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: healthy ? '#16a34a' : '#dc2626' }}>{healthy ? '✓ Healthy' : '⚠ Needs Work'}</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}