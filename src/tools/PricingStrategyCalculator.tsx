import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function PricingStrategyCalculator() {
  const [cost, setCost] = useState('');
  const [targetMargin, setTargetMargin] = useState('70');
  const [competitorLow, setCompetitorLow] = useState('');
  const [competitorHigh, setCompetitorHigh] = useState('');
  const [perceivedValue, setPerceivedValue] = useState('');

  const c = parseFloat(cost) || 0;
  const margin = (parseFloat(targetMargin) || 0) / 100;
  const cl = parseFloat(competitorLow) || 0;
  const ch = parseFloat(competitorHigh) || 0;
  const pv = parseFloat(perceivedValue) || 0;

  const costPlus = margin < 1 ? c / (1 - margin) : 0;
  const competitive = (cl + ch) / 2;
  const valueBased = pv * 0.3;
  const penetration = competitive * 0.7;
  const premium = competitive * 1.3;
  const fmt = (n: number) => '$' + n.toFixed(2);

  return (
    <ToolLayout title="Pricing Strategy Calculator" description="Find the optimal price point using different pricing strategies." slug="pricing-strategy-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Cost to Deliver ($)</label><input className="input-field" type="number" value={cost} onChange={e => setCost(e.target.value)} placeholder="e.g. 10" /></div>
          <div><label>Target Margin (%)</label><input className="input-field" type="number" value={targetMargin} onChange={e => setTargetMargin(e.target.value)} /></div>
          <div><label>Competitor Low Price ($)</label><input className="input-field" type="number" value={competitorLow} onChange={e => setCompetitorLow(e.target.value)} placeholder="e.g. 29" /></div>
          <div><label>Competitor High Price ($)</label><input className="input-field" type="number" value={competitorHigh} onChange={e => setCompetitorHigh(e.target.value)} placeholder="e.g. 99" /></div>
          <div><label>Perceived Customer Value ($)</label><input className="input-field" type="number" value={perceivedValue} onChange={e => setPerceivedValue(e.target.value)} placeholder="e.g. 500" /></div>
        </div>
      </div>
      <div className="result-box">
        <h3 style={{ marginBottom: '1rem' }}>Pricing Strategies</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Cost-Plus', price: costPlus, desc: 'Based on target margin', color: '#3b82f6' },
            { label: 'Competitive', price: competitive, desc: 'Market average', color: '#10b981' },
            { label: 'Value-Based', price: valueBased, desc: '30% of perceived value', color: '#8b5cf6' },
            { label: 'Penetration', price: penetration, desc: '30% below market', color: '#f59e0b' },
            { label: 'Premium', price: premium, desc: '30% above market', color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '1rem', background: s.color + '10', border: '1px solid ' + s.color + '30', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{s.label}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.price > 0 ? fmt(s.price) : '-'}</div>
              <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}