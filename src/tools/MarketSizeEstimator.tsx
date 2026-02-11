import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function MarketSizeEstimator() {
  const [approach, setApproach] = useState('topdown');
  const [totalMarket, setTotalMarket] = useState('');
  const [targetPct, setTargetPct] = useState('');
  const [customers, setCustomers] = useState('');
  const [avgDeal, setAvgDeal] = useState('');
  const [frequency, setFrequency] = useState('12');

  const fmt = (n: number) => n >= 1e9 ? '$'+(n/1e9).toFixed(1)+'B' : n >= 1e6 ? '$'+(n/1e6).toFixed(1)+'M' : '$'+Math.round(n).toLocaleString();

  let result = 0;
  if (approach === 'topdown') {
    result = (parseFloat(totalMarket) || 0) * ((parseFloat(targetPct) || 0) / 100);
  } else {
    result = (parseFloat(customers) || 0) * (parseFloat(avgDeal) || 0) * (parseFloat(frequency) || 1);
  }

  return (
    <ToolLayout title="Market Size Estimator" description="Estimate your market size using top-down and bottom-up approaches." slug="market-size-estimator">
      <div className="tool-card">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <button className={approach==='topdown'?'btn-primary':'btn-secondary'} onClick={() => setApproach('topdown')}>Top-Down</button>
          <button className={approach==='bottomup'?'btn-primary':'btn-secondary'} onClick={() => setApproach('bottomup')}>Bottom-Up</button>
        </div>
        {approach === 'topdown' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><label>Total Market Size ($)</label><input className="input-field" type="number" value={totalMarket} onChange={e => setTotalMarket(e.target.value)} placeholder="e.g. 50000000000" /></div>
            <div><label>Target % of Market</label><input className="input-field" type="number" value={targetPct} onChange={e => setTargetPct(e.target.value)} placeholder="e.g. 2" /></div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div><label>Number of Customers</label><input className="input-field" type="number" value={customers} onChange={e => setCustomers(e.target.value)} placeholder="e.g. 10000" /></div>
            <div><label>Avg Deal Size ($)</label><input className="input-field" type="number" value={avgDeal} onChange={e => setAvgDeal(e.target.value)} placeholder="e.g. 500" /></div>
            <div><label>Purchases/Year</label><input className="input-field" type="number" value={frequency} onChange={e => setFrequency(e.target.value)} /></div>
          </div>
        )}
      </div>
      {result > 0 && (
        <div className="result-box" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Estimated Market Size ({approach === 'topdown' ? 'Top-Down' : 'Bottom-Up'})</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e40af', margin: '0.5rem 0' }}>{fmt(result)}</div>
        </div>
      )}
    </ToolLayout>
  );
}