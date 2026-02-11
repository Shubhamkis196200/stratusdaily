import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function RevenueForecast() {
  const [currentMrr, setCurrentMrr] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [months, setMonths] = useState('24');

  const mrr = parseFloat(currentMrr) || 0;
  const growth = (parseFloat(growthRate) || 0) / 100;
  const m = parseInt(months) || 24;

  const projections = Array.from({ length: m }, (_, i) => {
    const month = i + 1;
    const projected = mrr * Math.pow(1 + growth, month);
    return { month, mrr: projected, arr: projected * 12, cumulative: Array.from({ length: month }, (_, j) => mrr * Math.pow(1 + growth, j + 1)).reduce((a, b) => a + b, 0) };
  });

  const fmt = (n: number) => n >= 1e6 ? '$' + (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? '$' + (n / 1e3).toFixed(0) + 'K' : '$' + n.toFixed(0);

  return (
    <ToolLayout title="Revenue Forecast Tool" description="Project future revenue with monthly growth rate scenarios." slug="revenue-forecast">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Current MRR ($)</label><input className="input-field" type="number" value={currentMrr} onChange={e => setCurrentMrr(e.target.value)} placeholder="e.g. 10000" /></div>
          <div><label>Monthly Growth Rate (%)</label><input className="input-field" type="number" value={growthRate} onChange={e => setGrowthRate(e.target.value)} placeholder="e.g. 15" /></div>
          <div><label>Forecast Period (months)</label><input className="input-field" type="number" value={months} onChange={e => setMonths(e.target.value)} /></div>
        </div>
      </div>
      {mrr > 0 && growth > 0 && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Month {m} MRR</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(projections[m - 1]?.mrr || 0)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Month {m} ARR</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{fmt(projections[m - 1]?.arr || 0)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Cumulative Revenue</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{fmt(projections[m - 1]?.cumulative || 0)}</div>
            </div>
          </div>
          <div style={{ maxHeight: 400, overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
              <thead><tr style={{ borderBottom: '2px solid #e5e7eb', position: 'sticky', top: 0, background: '#f9fafb' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Month</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>MRR</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>ARR</th>
                <th style={{ padding: '0.5rem', textAlign: 'right' }}>Cumulative</th>
              </tr></thead>
              <tbody>{projections.map(p => (
                <tr key={p.month} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem' }}>{p.month}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(p.mrr)}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(p.arr)}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(p.cumulative)}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}