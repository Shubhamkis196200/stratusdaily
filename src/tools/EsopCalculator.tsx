import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function EsopCalculator() {
  const [options, setOptions] = useState('');
  const [strikePrice, setStrikePrice] = useState('');
  const [currentFMV, setCurrentFMV] = useState('');
  const [vestingYears, setVestingYears] = useState('4');
  const [cliffMonths, setCliffMonths] = useState('12');
  const opts = parseInt(options) || 0;
  const strike = parseFloat(strikePrice) || 0;
  const fmv = parseFloat(currentFMV) || 0;
  const spread = fmv - strike;
  const totalValue = opts * Math.max(spread, 0);
  const exerciseCost = opts * strike;
  const vestYrs = parseInt(vestingYears) || 4;
  const cliff = parseInt(cliffMonths) || 12;
  const monthlyVest = opts / (vestYrs * 12);
  const schedule = Array.from({ length: vestYrs * 12 + 1 }, (_, i) => ({
    month: i, vested: i < cliff ? 0 : Math.min(opts, Math.floor(monthlyVest * i)),
  })).filter((_, i) => i % 6 === 0 || i === cliff);
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  return (
    <ToolLayout title="Employee Stock Option Calculator" description="Calculate the value of employee stock options under different scenarios." slug="esop-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Number of Options</label><input className="input-field" type="number" value={options} onChange={e => setOptions(e.target.value)} placeholder="10000" /></div>
          <div><label>Strike Price ($)</label><input className="input-field" type="number" value={strikePrice} onChange={e => setStrikePrice(e.target.value)} placeholder="0.50" /></div>
          <div><label>Current FMV ($)</label><input className="input-field" type="number" value={currentFMV} onChange={e => setCurrentFMV(e.target.value)} placeholder="5.00" /></div>
          <div><label>Vesting (years)</label><input className="input-field" type="number" value={vestingYears} onChange={e => setVestingYears(e.target.value)} /></div>
          <div><label>Cliff (months)</label><input className="input-field" type="number" value={cliffMonths} onChange={e => setCliffMonths(e.target.value)} /></div>
        </div>
      </div>
      <div className="result-box">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}><div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Total Value</div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{fmt(totalValue)}</div></div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}><div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Exercise Cost</div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(exerciseCost)}</div></div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}><div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Spread/Share</div><div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>${Math.max(spread, 0).toFixed(2)}</div></div>
        </div>
        <h4>Vesting Schedule</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}><th style={{padding:'0.5rem',textAlign:'left'}}>Month</th><th style={{padding:'0.5rem',textAlign:'right'}}>Vested</th><th style={{padding:'0.5rem',textAlign:'right'}}>%</th><th style={{padding:'0.5rem',textAlign:'right'}}>Value</th></tr></thead>
          <tbody>{schedule.map(s => (
            <tr key={s.month} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{padding:'0.5rem'}}>{s.month}</td>
              <td style={{padding:'0.5rem',textAlign:'right'}}>{s.vested.toLocaleString()}</td>
              <td style={{padding:'0.5rem',textAlign:'right'}}>{opts > 0 ? (s.vested/opts*100).toFixed(1) : 0}%</td>
              <td style={{padding:'0.5rem',textAlign:'right'}}>{fmt(s.vested * Math.max(spread, 0))}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </ToolLayout>
  );
}
