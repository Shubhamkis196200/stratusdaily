import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function VestingScheduleCalculator() {
  const [totalShares, setTotalShares] = useState('40000');
  const [vestingMonths, setVestingMonths] = useState('48');
  const [cliffMonths, setCliffMonths] = useState('12');
  const total = parseInt(totalShares) || 0;
  const vMonths = parseInt(vestingMonths) || 48;
  const cliff = parseInt(cliffMonths) || 12;
  const monthly = total / vMonths;
  const schedule = Array.from({ length: Math.min(vMonths + 1, 50) }, (_, i) => {
    let vested = 0;
    if (i >= cliff) vested = Math.min(total, Math.floor(monthly * i));
    return { month: i, vested, pct: total > 0 ? (vested / total * 100) : 0 };
  }).filter((_, i) => i % 3 === 0 || i === cliff);
  return (
    <ToolLayout title="Vesting Schedule Calculator" description="Visualize equity vesting over time with cliff and acceleration." slug="vesting-schedule-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Total Shares</label><input className="input-field" type="number" value={totalShares} onChange={e => setTotalShares(e.target.value)} /></div>
          <div><label>Vesting (months)</label><input className="input-field" type="number" value={vestingMonths} onChange={e => setVestingMonths(e.target.value)} /></div>
          <div><label>Cliff (months)</label><input className="input-field" type="number" value={cliffMonths} onChange={e => setCliffMonths(e.target.value)} /></div>
        </div>
      </div>
      <div className="result-box">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}><th style={{padding:'0.5rem',textAlign:'left'}}>Month</th><th style={{padding:'0.5rem',textAlign:'right'}}>Vested</th><th style={{padding:'0.5rem',textAlign:'right'}}>%</th></tr></thead>
          <tbody>{schedule.map(s => (
            <tr key={s.month} style={{ borderBottom: '1px solid #f3f4f6', background: s.month === cliff ? '#fef3c7' : 'transparent' }}>
              <td style={{padding:'0.5rem'}}>{s.month}{s.month === cliff ? ' (Cliff)' : ''}</td>
              <td style={{padding:'0.5rem',textAlign:'right',fontWeight:600}}>{s.vested.toLocaleString()}</td>
              <td style={{padding:'0.5rem',textAlign:'right'}}>{s.pct.toFixed(1)}%</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </ToolLayout>
  );
}
