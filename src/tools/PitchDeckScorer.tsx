import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const criteria = [
  { name: 'Problem Statement', desc: 'Is the problem clearly defined and significant?' },
  { name: 'Solution', desc: 'Is the solution compelling and differentiated?' },
  { name: 'Market Size', desc: 'Is the market large enough to support a venture-scale business?' },
  { name: 'Business Model', desc: 'Is the revenue model clear and viable?' },
  { name: 'Traction', desc: 'Does the startup have meaningful traction or validation?' },
  { name: 'Team', desc: 'Does the team have relevant experience and capability?' },
  { name: 'Competition', desc: 'Is the competitive landscape well understood with clear advantages?' },
  { name: 'Financials', desc: 'Are financial projections realistic and well-presented?' },
  { name: 'Ask', desc: 'Is the funding ask clear with a reasonable use of funds?' },
  { name: 'Design & Flow', desc: 'Is the deck visually compelling and logically structured?' },
];

export default function PitchDeckScorer() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const update = (name: string, val: number) => setScores({ ...scores, [name]: val });
  const total = Object.values(scores).reduce((s, v) => s + v, 0);
  const max = criteria.length * 10;
  const pct = max > 0 ? (total / max * 100) : 0;
  const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : pct >= 50 ? 'D' : 'F';
  const feedback = pct >= 80 ? 'Investor-ready! Strong deck.' : pct >= 60 ? 'Good foundation, but needs refinement in weak areas.' : 'Significant improvements needed before pitching.';

  return (
    <ToolLayout title="Pitch Deck Scorer" description="Score your pitch deck across key dimensions that investors evaluate." slug="pitch-deck-scorer">
      <div className="tool-card">
        {criteria.map(c => (
          <div key={c.name} style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <label>{c.name}</label>
              <span style={{ fontWeight: 700, color: '#1e40af' }}>{scores[c.name] || 0}/10</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: 6 }}>{c.desc}</p>
            <input type="range" min="0" max="10" value={scores[c.name] || 0} onChange={e => update(c.name, parseInt(e.target.value))}
              style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <div className="result-box">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: pct >= 70 ? '#16a34a' : pct >= 50 ? '#f59e0b' : '#dc2626' }}>{grade}</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{total}/{max} points ({pct.toFixed(0)}%)</div>
          <div style={{ color: '#6b7280', marginTop: 4 }}>{feedback}</div>
        </div>
        {criteria.filter(c => (scores[c.name] || 0) <= 5).length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <h4>Areas to Improve:</h4>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {criteria.filter(c => (scores[c.name] || 0) <= 5).map(c => <li key={c.name} style={{ marginBottom: 4, fontSize: '0.9rem' }}>{c.name}: {c.desc}</li>)}
            </ul>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}