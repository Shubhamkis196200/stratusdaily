import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function CacCalculator() {
  const [channels, setChannels] = useState([
    { name: 'Paid Search', spend: '', customers: '' },
    { name: 'Social Media Ads', spend: '', customers: '' },
    { name: 'Content Marketing', spend: '', customers: '' },
    { name: 'Sales Team', spend: '', customers: '' },
  ]);
  const update = (i: number, f: string, v: string) => { const u = [...channels]; (u[i] as any)[f] = v; setChannels(u); };
  const add = () => setChannels([...channels, { name: '', spend: '', customers: '' }]);

  const data = channels.map(c => ({
    ...c, spendNum: parseFloat(c.spend) || 0, custNum: parseInt(c.customers) || 0,
    cac: (parseInt(c.customers) || 0) > 0 ? (parseFloat(c.spend) || 0) / (parseInt(c.customers) || 1) : 0
  }));
  const totalSpend = data.reduce((s, d) => s + d.spendNum, 0);
  const totalCust = data.reduce((s, d) => s + d.custNum, 0);
  const blendedCac = totalCust > 0 ? totalSpend / totalCust : 0;
  const fmt = (n: number) => '$' + n.toFixed(2);

  return (
    <ToolLayout title="Customer Acquisition Cost Calculator" description="Calculate how much it costs to acquire each new customer across channels." slug="cac-calculator">
      <div className="tool-card">
        {channels.map((c, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input className="input-field" value={c.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Channel" />
            <input className="input-field" type="number" value={c.spend} onChange={e => update(i, 'spend', e.target.value)} placeholder="Spend ($)" />
            <input className="input-field" type="number" value={c.customers} onChange={e => update(i, 'customers', e.target.value)} placeholder="Customers" />
          </div>
        ))}
        <button className="btn-secondary" onClick={add}>+ Add Channel</button>
      </div>
      <div className="result-box">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Blended CAC</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(blendedCac)}</div>
          <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{totalCust} customers from {fmt(totalSpend)} spend</div>
        </div>
        <h4 style={{ marginBottom: '0.5rem' }}>By Channel</h4>
        {data.filter(d => d.spendNum > 0).sort((a, b) => a.cac - b.cac).map((d, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6', fontSize: '0.9rem' }}>
            <span>{d.name}</span>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span style={{ color: '#6b7280' }}>{d.custNum} customers</span>
              <span style={{ fontWeight: 700, color: d.cac < blendedCac ? '#16a34a' : '#dc2626' }}>{fmt(d.cac)}</span>
            </div>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}