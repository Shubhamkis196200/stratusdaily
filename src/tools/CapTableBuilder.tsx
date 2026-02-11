import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function CapTableBuilder() {
  const [shareholders, setShareholders] = useState([
    { name: 'Founder 1', shares: '5000000', type: 'Common' },
    { name: 'Founder 2', shares: '3000000', type: 'Common' },
    { name: 'Option Pool', shares: '2000000', type: 'Options' },
  ]);

  const addRow = () => setShareholders([...shareholders, { name: '', shares: '', type: 'Common' }]);
  const update = (i: number, field: string, val: string) => {
    const u = [...shareholders]; (u[i] as any)[field] = val; setShareholders(u);
  };
  const remove = (i: number) => setShareholders(shareholders.filter((_, idx) => idx !== i));

  const total = shareholders.reduce((s, r) => s + (parseInt(r.shares) || 0), 0);
  const data = shareholders.map(r => ({ ...r, sharesNum: parseInt(r.shares) || 0, pct: total > 0 ? ((parseInt(r.shares) || 0) / total * 100) : 0 }));
  const colors = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#14b8a6','#f97316','#6366f1','#84cc16'];

  return (
    <ToolLayout title="Cap Table Builder" description="Build and manage your capitalization table with shareholders and equity splits." slug="cap-table-builder">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#6b7280' }}>
          <span>Shareholder</span><span>Shares</span><span>Type</span><span></span>
        </div>
        {shareholders.map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input className="input-field" value={s.name} onChange={e => update(i, 'name', e.target.value)} />
            <input className="input-field" type="number" value={s.shares} onChange={e => update(i, 'shares', e.target.value)} />
            <select className="input-field" value={s.type} onChange={e => update(i, 'type', e.target.value)}>
              <option>Common</option><option>Preferred</option><option>Options</option><option>Warrants</option>
            </select>
            <button onClick={() => remove(i)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 18 }}>×</button>
          </div>
        ))}
        <button className="btn-secondary" onClick={addRow}>+ Add Shareholder</button>
      </div>
      <div className="result-box">
        <h3 style={{ marginBottom: '1rem' }}>Ownership Summary</h3>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Name</th>
                <th style={{ textAlign: 'right', padding: '0.5rem' }}>Shares</th>
                <th style={{ textAlign: 'right', padding: '0.5rem' }}>%</th>
              </tr></thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: colors[i % colors.length] }} />
                      {d.name || 'Unnamed'}
                    </td>
                    <td style={{ padding: '0.5rem', textAlign: 'right' }}>{d.sharesNum.toLocaleString()}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>{d.pct.toFixed(2)}%</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid #e5e7eb', fontWeight: 700 }}>
                  <td style={{ padding: '0.5rem' }}>Total</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right' }}>{total.toLocaleString()}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right' }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ width: 200, height: 200, position: 'relative' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              {data.reduce((acc: any[], d, i) => {
                const startAngle = acc.length > 0 ? acc[acc.length - 1].endAngle : 0;
                const angle = (d.pct / 100) * 360;
                const endAngle = startAngle + angle;
                const large = angle > 180 ? 1 : 0;
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                const x1 = 50 + 45 * Math.cos(startRad);
                const y1 = 50 + 45 * Math.sin(startRad);
                const x2 = 50 + 45 * Math.cos(endRad);
                const y2 = 50 + 45 * Math.sin(endRad);
                acc.push({ endAngle, el: <path key={i} d={`M50,50 L${x1},${y1} A45,45 0 ${large},1 ${x2},${y2} Z`} fill={colors[i % colors.length]} /> });
                return acc;
              }, []).map(a => a.el)}
            </svg>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
