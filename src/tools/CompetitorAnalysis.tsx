import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function CompetitorAnalysis() {
  const [competitors, setCompetitors] = useState(['Your Startup', 'Competitor A', 'Competitor B']);
  const [dimensions, setDimensions] = useState(['Pricing', 'Features', 'UX/Design', 'Market Share', 'Brand', 'Support']);
  const [scores, setScores] = useState<Record<string, Record<string, number>>>({});

  const updateScore = (comp: string, dim: string, val: number) => {
    setScores({...scores, [comp]: {...(scores[comp]||{}), [dim]: val}});
  };
  const addComp = () => setCompetitors([...competitors, '']);
  const addDim = () => setDimensions([...dimensions, '']);

  const totals = competitors.map(c => ({
    name: c,
    total: dimensions.reduce((s, d) => s + (scores[c]?.[d] || 0), 0),
    max: dimensions.length * 10
  }));

  return (
    <ToolLayout title="Competitor Analysis Matrix" description="Compare your startup against competitors across key dimensions." slug="competitor-analysis">
      <div className="tool-card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
            <th style={{ padding: '0.5rem', textAlign: 'left' }}>Dimension</th>
            {competitors.map((c, i) => (
              <th key={i} style={{ padding: '0.5rem' }}>
                <input className="input-field" value={c} onChange={e => { const u = [...competitors]; u[i] = e.target.value; setCompetitors(u); }}
                  style={{ textAlign: 'center', fontWeight: 700, width: 120 }} />
              </th>
            ))}
          </tr></thead>
          <tbody>
            {dimensions.map((d, di) => (
              <tr key={di} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem' }}>
                  <input className="input-field" value={d} onChange={e => { const u = [...dimensions]; u[di] = e.target.value; setDimensions(u); }} style={{ width: 140 }} />
                </td>
                {competitors.map((c, ci) => (
                  <td key={ci} style={{ padding: '0.5rem', textAlign: 'center' }}>
                    <input type="range" min="0" max="10" value={scores[c]?.[d] || 0} onChange={e => updateScore(c, d, parseInt(e.target.value))} style={{ width: 80 }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{scores[c]?.[d] || 0}/10</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button className="btn-secondary" onClick={addComp}>+ Competitor</button>
          <button className="btn-secondary" onClick={addDim}>+ Dimension</button>
        </div>
      </div>
      <div className="result-box">
        <h3 style={{ marginBottom: '1rem' }}>Overall Rankings</h3>
        {totals.sort((a,b) => b.total - a.total).map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ width: 30, fontWeight: 700, color: i === 0 ? '#f59e0b' : '#6b7280' }}>#{i+1}</span>
            <span style={{ width: 120, fontWeight: 600 }}>{t.name || 'Unnamed'}</span>
            <div style={{ flex: 1, height: 20, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: (t.total/t.max*100)+'%', height: '100%', background: i === 0 ? '#3b82f6' : '#94a3b8', borderRadius: 4, transition: 'width 0.3s' }} />
            </div>
            <span style={{ width: 60, textAlign: 'right', fontWeight: 600, marginLeft: 8 }}>{t.total}/{t.max}</span>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}