import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function RunwayEstimator() {
  const [cashBalance, setCashBalance] = useState('');
  const [monthlyBurn, setMonthlyBurn] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [revenueGrowth, setRevenueGrowth] = useState('');
  const [burnIncrease, setBurnIncrease] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const cash = parseFloat(cashBalance) || 0;
    const burn = parseFloat(monthlyBurn) || 0;
    const rev = parseFloat(monthlyRevenue) || 0;
    const revGrowth = (parseFloat(revenueGrowth) || 0) / 100;
    const burnGrowth = (parseFloat(burnIncrease) || 0) / 100;

    // Simple runway
    const netBurn = burn - rev;
    const simpleRunway = netBurn > 0 ? cash / netBurn : Infinity;

    // Dynamic runway with growth
    let remaining = cash;
    let month = 0;
    let currentRev = rev;
    let currentBurn = burn;
    const projections = [];
    while (remaining > 0 && month < 60) {
      month++;
      currentRev *= (1 + revGrowth / 12);
      currentBurn *= (1 + burnGrowth / 12);
      const net = currentBurn - currentRev;
      remaining -= net;
      projections.push({ month, cash: Math.max(0, remaining), burn: currentBurn, revenue: currentRev, netBurn: net });
    }

    setResult({ simpleRunway: Math.min(simpleRunway, 60), dynamicRunway: month, projections, netBurn });
  };

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <ToolLayout title="Runway Estimator" description="Estimate how many months of runway you have left based on current burn rate and revenue projections." slug="runway-estimator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Cash Balance ($)</label><input className="input-field" type="number" value={cashBalance} onChange={e => setCashBalance(e.target.value)} placeholder="e.g. 1000000" /></div>
          <div><label>Monthly Burn ($)</label><input className="input-field" type="number" value={monthlyBurn} onChange={e => setMonthlyBurn(e.target.value)} placeholder="e.g. 80000" /></div>
          <div><label>Monthly Revenue ($)</label><input className="input-field" type="number" value={monthlyRevenue} onChange={e => setMonthlyRevenue(e.target.value)} placeholder="e.g. 20000" /></div>
          <div><label>Revenue Growth (%/year)</label><input className="input-field" type="number" value={revenueGrowth} onChange={e => setRevenueGrowth(e.target.value)} placeholder="e.g. 50" /></div>
          <div><label>Burn Increase (%/year)</label><input className="input-field" type="number" value={burnIncrease} onChange={e => setBurnIncrease(e.target.value)} placeholder="e.g. 10" /></div>
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={calculate}>Estimate Runway</button>
      </div>
      {result && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: result.simpleRunway < 6 ? '#fef2f2' : result.simpleRunway < 12 ? '#fff7ed' : '#f0fdf4', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Simple Runway</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: result.simpleRunway < 6 ? '#dc2626' : result.simpleRunway < 12 ? '#ea580c' : '#16a34a' }}>{Math.round(result.simpleRunway)} months</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>at {fmt(result.netBurn)}/mo net burn</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Dynamic Runway</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>{result.dynamicRunway} months</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>with revenue & burn growth</div>
            </div>
          </div>
          <h4 style={{ marginBottom: '0.5rem' }}>Cash Projection</h4>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
              <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Month</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>Cash</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>Revenue</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>Burn</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>Net Burn</th>
              </tr></thead>
              <tbody>
                {result.projections.filter((_: any, i: number) => i % 3 === 0 || i === result.projections.length - 1).map((p: any) => (
                  <tr key={p.month} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.5rem' }}>{p.month}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(p.cash)}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'right', color: '#16a34a' }}>{fmt(p.revenue)}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'right', color: '#dc2626' }}>{fmt(p.burn)}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(p.netBurn)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
