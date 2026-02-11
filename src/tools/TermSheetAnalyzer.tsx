import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
const terms = ['Liquidation Preference','Anti-Dilution','Board Seats','Vesting','Drag-Along Rights'];
export default function TermSheetAnalyzer() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const avg = Object.values(scores).reduce((a,b) => a+b, 0) / Object.values(scores).length || 0;
  return (
    <ToolLayout title="Term Sheet Analyzer" description="Analyze term sheet provisions vs market benchmarks." slug="term-sheet-analyzer">
      <div className="tool-card">
        {terms.map(t => (
          <div key={t} style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><label>{t}</label><span style={{ fontWeight: 700 }}>{scores[t] || 0}/10</span></div>
            <input type="range" min="0" max="10" value={scores[t] || 0} onChange={e => setScores({...scores, [t]: parseInt(e.target.value)})} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      {avg > 0 && <div className="result-box" style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 700, color: avg >= 7 ? '#16a34a' : avg >= 5 ? '#f59e0b' : '#dc2626' }}>{avg.toFixed(1)}/10</div><div>{avg >= 7 ? 'Founder-friendly' : avg >= 5 ? 'Mixed terms' : 'Investor-heavy'}</div></div>}
    </ToolLayout>
  );
}
