import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const sections = [
  { key: 'partners', label: 'Key Partners', placeholder: 'Who are your key partners and suppliers?' },
  { key: 'activities', label: 'Key Activities', placeholder: 'What key activities does your value proposition require?' },
  { key: 'resources', label: 'Key Resources', placeholder: 'What key resources does your value proposition require?' },
  { key: 'value', label: 'Value Propositions', placeholder: 'What value do you deliver to the customer?' },
  { key: 'relationships', label: 'Customer Relationships', placeholder: 'What type of relationship does each segment expect?' },
  { key: 'channels', label: 'Channels', placeholder: 'Through which channels do your segments want to be reached?' },
  { key: 'segments', label: 'Customer Segments', placeholder: 'For whom are you creating value?' },
  { key: 'costs', label: 'Cost Structure', placeholder: 'What are the most important costs inherent in your model?' },
  { key: 'revenue', label: 'Revenue Streams', placeholder: 'For what value are your customers willing to pay?' },
];

export default function BusinessModelCanvas() {
  const [data, setData] = useState<Record<string, string>>(Object.fromEntries(sections.map(s => [s.key, ''])));
  const update = (key: string, val: string) => setData({ ...data, [key]: val });
  const filled = Object.values(data).filter(v => v.trim()).length;

  return (
    <ToolLayout title="Business Model Canvas Builder" description="Build a comprehensive Business Model Canvas for your startup." slug="business-model-canvas">
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{filled}/{sections.length} sections completed</span>
        <div style={{ width: 200, height: 6, background: '#e5e7eb', borderRadius: 3 }}>
          <div style={{ width: (filled/sections.length*100)+'%', height: '100%', background: '#3b82f6', borderRadius: 3, transition: 'width 0.3s' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {sections.map(s => (
          <div key={s.key} className="tool-card" style={{ padding: '1.25rem' }}>
            <label style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>{s.label}</label>
            <textarea className="input-field" rows={4} value={data[s.key]} onChange={e => update(s.key, e.target.value)} placeholder={s.placeholder} style={{ resize: 'vertical' }} />
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}