import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function EquityDilutionCalculator() {
  const [rounds, setRounds] = useState([
    { name: 'Seed', raised: '500000', preMoney: '2000000' },
    { name: 'Series A', raised: '3000000', preMoney: '12000000' },
  ]);
  const add = () => setRounds([...rounds, { name: '', raised: '', preMoney: '' }]);
  const update = (i: number, f: string, v: string) => { const u = [...rounds]; (u[i] as any)[f] = v; setRounds(u); };

  let ownership = 100;
  const data = rounds.map(r => {
    const raised = parseFloat(r.raised) || 0;
    const pre = parseFloat(r.preMoney) || 0;
    const post = pre + raised;
    const dilution = post > 0 ? (raised / post * 100) : 0;
    ownership *= (1 - dilution / 100);
    return { ...r, dilution, postMoney: post, ownershipAfter: ownership };
  });

  const fmt = (n: number) => n >= 1e6 ? '$' + (n/1e6).toFixed(1) + 'M' : '$' + Math.round(n).toLocaleString();
  return (
    <ToolLayout title="Equity Dilution Calculator" description="Calculate how new funding rounds dilute existing shareholders." slug="equity-dilution-calculator">
      <div className="tool-card">
        {rounds.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input className="input-field" value={r.name} onChange={e => update(i,'name',e.target.value)} placeholder="Round name" />
            <input className="input-field" type="number" value={r.raised} onChange={e => update(i,'raised',e.target.value)} placeholder="Amount raised" />
            <input className="input-field" type="number" value={r.preMoney} onChange={e => update(i,'preMoney',e.target.value)} placeholder="Pre-money val" />
          </div>
        ))}
        <button className="btn-secondary" onClick={add}>+ Add Round</button>
      </div>
      <div className="result-box">
        <h3 style={{ marginBottom: '1rem' }}>Dilution Path</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}><th style={{padding:'0.5rem',textAlign:'left'}}>Round</th><th style={{padding:'0.5rem',textAlign:'right'}}>Raised</th><th style={{padding:'0.5rem',textAlign:'right'}}>Post-Money</th><th style={{padding:'0.5rem',textAlign:'right'}}>Dilution</th><th style={{padding:'0.5rem',textAlign:'right'}}>Your Ownership</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}><td style={{padding:'0.5rem',fontWeight:600}}>Start</td><td style={{padding:'0.5rem',textAlign:'right'}}>-</td><td style={{padding:'0.5rem',textAlign:'right'}}>-</td><td style={{padding:'0.5rem',textAlign:'right'}}>-</td><td style={{padding:'0.5rem',textAlign:'right',fontWeight:700,color:'#16a34a'}}>100.0%</td></tr>
            {data.map((d,i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{padding:'0.5rem',fontWeight:600}}>{d.name||'Round '+(i+1)}</td>
                <td style={{padding:'0.5rem',textAlign:'right'}}>{fmt(parseFloat(d.raised)||0)}</td>
                <td style={{padding:'0.5rem',textAlign:'right'}}>{fmt(d.postMoney)}</td>
                <td style={{padding:'0.5rem',textAlign:'right',color:'#dc2626'}}>-{d.dilution.toFixed(1)}%</td>
                <td style={{padding:'0.5rem',textAlign:'right',fontWeight:700,color:d.ownershipAfter>50?'#16a34a':'#f59e0b'}}>{d.ownershipAfter.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#eff6ff', borderRadius: 8, textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Final founder ownership after all rounds: </span>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>{ownership.toFixed(1)}%</span>
        </div>
      </div>
    </ToolLayout>
  );
}