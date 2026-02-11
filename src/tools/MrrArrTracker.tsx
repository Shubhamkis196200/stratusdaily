import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function MrrArrTracker() {
  const [months, setMonths] = useState([
    { month: 'Jan', newMrr: '', churnMrr: '', expansionMrr: '' },
    { month: 'Feb', newMrr: '', churnMrr: '', expansionMrr: '' },
    { month: 'Mar', newMrr: '', churnMrr: '', expansionMrr: '' },
    { month: 'Apr', newMrr: '', churnMrr: '', expansionMrr: '' },
    { month: 'May', newMrr: '', churnMrr: '', expansionMrr: '' },
    { month: 'Jun', newMrr: '', churnMrr: '', expansionMrr: '' },
  ]);
  const update = (i: number, field: string, val: string) => { const u = [...months]; (u[i] as any)[field] = val; setMonths(u); };

  let runningMrr = 0;
  const data = months.map(m => {
    const n = parseFloat(m.newMrr) || 0;
    const c = parseFloat(m.churnMrr) || 0;
    const e = parseFloat(m.expansionMrr) || 0;
    runningMrr += n - c + e;
    return { ...m, netNew: n - c + e, totalMrr: runningMrr, arr: runningMrr * 12 };
  });
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <ToolLayout title="MRR/ARR Tracker" description="Track Monthly and Annual Recurring Revenue with growth metrics." slug="mrr-arr-tracker">
      <div className="tool-card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
            <th style={{ padding: '0.5rem' }}>Month</th>
            <th style={{ padding: '0.5rem' }}>New MRR ($)</th>
            <th style={{ padding: '0.5rem' }}>Churned ($)</th>
            <th style={{ padding: '0.5rem' }}>Expansion ($)</th>
            <th style={{ padding: '0.5rem' }}>Net New</th>
            <th style={{ padding: '0.5rem' }}>Total MRR</th>
            <th style={{ padding: '0.5rem' }}>ARR</th>
          </tr></thead>
          <tbody>
            {data.map((m, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem', fontWeight: 600 }}>{m.month}</td>
                <td style={{ padding: '0.5rem' }}><input className="input-field" type="number" value={m.newMrr} onChange={e => update(i, 'newMrr', e.target.value)} style={{ width: 100 }} /></td>
                <td style={{ padding: '0.5rem' }}><input className="input-field" type="number" value={m.churnMrr} onChange={e => update(i, 'churnMrr', e.target.value)} style={{ width: 100 }} /></td>
                <td style={{ padding: '0.5rem' }}><input className="input-field" type="number" value={m.expansionMrr} onChange={e => update(i, 'expansionMrr', e.target.value)} style={{ width: 100 }} /></td>
                <td style={{ padding: '0.5rem', color: m.netNew >= 0 ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{fmt(m.netNew)}</td>
                <td style={{ padding: '0.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(m.totalMrr)}</td>
                <td style={{ padding: '0.5rem', fontWeight: 700 }}>{fmt(m.arr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {runningMrr > 0 && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Current MRR</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(runningMrr)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Current ARR</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{fmt(runningMrr * 12)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>MRR Growth</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>
                {data.length >= 2 && data[data.length-2].totalMrr > 0
                  ? ((data[data.length-1].totalMrr - data[data.length-2].totalMrr) / data[data.length-2].totalMrr * 100).toFixed(1) + '%'
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}