import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const quadrants = [
  { key: 'strengths', label: 'Strengths', color: '#16a34a', bg: '#f0fdf4', desc: 'Internal positive attributes' },
  { key: 'weaknesses', label: 'Weaknesses', color: '#dc2626', bg: '#fef2f2', desc: 'Internal areas for improvement' },
  { key: 'opportunities', label: 'Opportunities', color: '#2563eb', bg: '#eff6ff', desc: 'External factors to leverage' },
  { key: 'threats', label: 'Threats', color: '#ea580c', bg: '#fff7ed', desc: 'External risks and challenges' },
];

export default function SwotAnalysis() {
  const [data, setData] = useState<Record<string, string[]>>(Object.fromEntries(quadrants.map(q => [q.key, ['']])));
  const addItem = (key: string) => setData({...data, [key]: [...data[key], '']});
  const updateItem = (key: string, i: number, val: string) => { const u = {...data}; u[key] = [...u[key]]; u[key][i] = val; setData(u); };
  const removeItem = (key: string, i: number) => { const u = {...data}; u[key] = u[key].filter((_,idx) => idx !== i); setData(u); };

  return (
    <ToolLayout title="SWOT Analysis Builder" description="Build a Strengths, Weaknesses, Opportunities, Threats analysis for your startup." slug="swot-analysis">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {quadrants.map(q => (
          <div key={q.key} style={{ background: q.bg, border: '1px solid ' + q.color + '30', borderRadius: 12, padding: '1.25rem' }}>
            <h3 style={{ color: q.color, marginBottom: 4 }}>{q.label}</h3>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>{q.desc}</p>
            {data[q.key].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input className="input-field" value={item} onChange={e => updateItem(q.key, i, e.target.value)} placeholder={'Add ' + q.label.toLowerCase().slice(0,-1)} />
                <button onClick={() => removeItem(q.key, i)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>×</button>
              </div>
            ))}
            <button onClick={() => addItem(q.key)} style={{ background: 'none', border: '1px dashed ' + q.color + '60', color: q.color, padding: '0.25rem 0.75rem', borderRadius: 4, cursor: 'pointer', fontSize: '0.8rem' }}>+ Add</button>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}