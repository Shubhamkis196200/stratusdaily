import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function BreakEvenAnalysis() {
  const [fixedCosts, setFixedCosts] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [variableCost, setVariableCost] = useState('');

  const fc = parseFloat(fixedCosts) || 0;
  const pp = parseFloat(pricePerUnit) || 0;
  const vc = parseFloat(variableCost) || 0;
  const contribution = pp - vc;
  const breakEvenUnits = contribution > 0 ? Math.ceil(fc / contribution) : 0;
  const breakEvenRevenue = breakEvenUnits * pp;
  const marginPct = pp > 0 ? (contribution / pp * 100) : 0;

  const scenarios = [0.8, 0.9, 1.0, 1.1, 1.2].map(mult => {
    const units = Math.ceil(breakEvenUnits * mult);
    const rev = units * pp;
    const totalCost = fc + (units * vc);
    return { units, revenue: rev, cost: totalCost, profit: rev - totalCost };
  });

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <ToolLayout title="Break-Even Analysis" description="Determine when your startup will become profitable with break-even analysis." slug="break-even-analysis">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Monthly Fixed Costs ($)</label><input className="input-field" type="number" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} placeholder="e.g. 50000" /></div>
          <div><label>Price per Unit ($)</label><input className="input-field" type="number" value={pricePerUnit} onChange={e => setPricePerUnit(e.target.value)} placeholder="e.g. 99" /></div>
          <div><label>Variable Cost per Unit ($)</label><input className="input-field" type="number" value={variableCost} onChange={e => setVariableCost(e.target.value)} placeholder="e.g. 25" /></div>
        </div>
      </div>
      {contribution > 0 && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Break-Even Units</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{breakEvenUnits.toLocaleString()}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Break-Even Revenue</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{fmt(breakEvenRevenue)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Contribution Margin</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{marginPct.toFixed(1)}%</div>
            </div>
          </div>
          <h4 style={{ marginBottom: '0.5rem' }}>Scenario Analysis</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Units</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>Revenue</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>Total Cost</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>Profit/Loss</th>
            </tr></thead>
            <tbody>{scenarios.map((s, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6', background: s.profit >= 0 ? '#f0fdf4' : '#fef2f2' }}>
                <td style={{ padding: '0.5rem' }}>{s.units.toLocaleString()}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(s.revenue)}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(s.cost)}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 700, color: s.profit >= 0 ? '#16a34a' : '#dc2626' }}>{fmt(s.profit)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </ToolLayout>
  );
}