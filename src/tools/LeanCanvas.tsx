import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const sections = [
  { key: 'problem', label: 'Problem', placeholder: 'Top 3 problems', color: '#ef4444' },
  { key: 'solution', label: 'Solution', placeholder: 'Top 3 features', color: '#3b82f6' },
  { key: 'uvp', label: 'Unique Value Proposition', placeholder: 'Single, clear, compelling message', color: '#8b5cf6' },
  { key: 'advantage', label: 'Unfair Advantage', placeholder: 'Something that cannot be easily copied', color: '#f59e0b' },
  { key: 'segments', label: 'Customer Segments', placeholder: 'Target customers', color: '#10b981' },
  { key: 'metrics', label: 'Key Metrics', placeholder: 'Key activities you measure', color: '#ec4899' },
  { key: 'channels', label: 'Channels', placeholder: 'Path to customers', color: '#14b8a6' },
  { key: 'costs', label: 'Cost Structure', placeholder: 'Customer acquisition, distribution, hosting, etc.', color: '#dc2626' },
  { key: 'revenue', label: 'Revenue Streams', placeholder: 'Revenue model, lifetime value, revenue, gross margin', color: '#16a34a' },
];

export default function LeanCanvas() {
  const [data, setData] = useState<Record<string, string>>(Object.fromEntries(sections.map(s => [s.key, ''])));
  return (
    <ToolLayout title="Lean Canvas Tool" description="Create a Lean Canvas to validate your business model quickly." slug="lean-canvas">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
        {sections.map(s => (
          <div key={s.key} style={{ background: '#fff', border: '2px solid ' + s.color + '30', borderTop: '4px solid ' + s.color, borderRadius: 8, padding: '1rem' }}>
            <label style={{ fontWeight: 700, color: s.color, marginBottom: '0.5rem' }}>{s.label}</label>
            <textarea className="input-field" rows={3} value={data[s.key]} onChange={e => setData({...data, [s.key]: e.target.value})} placeholder={s.placeholder} style={{ resize: 'vertical', borderColor: s.color + '40' }} />
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}