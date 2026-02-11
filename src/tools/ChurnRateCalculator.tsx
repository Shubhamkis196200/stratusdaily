import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function ChurnRateCalculator() {
  const [startCustomers, setStartCustomers] = useState('');
  const [lostCustomers, setLostCustomers] = useState('');
  const [startMrr, setStartMrr] = useState('');
  const [lostMrr, setLostMrr] = useState('');

  const custChurn = (parseFloat(startCustomers) || 0) > 0 ? ((parseFloat(lostCustomers) || 0) / (parseFloat(startCustomers) || 1) * 100) : 0;
  const revChurn = (parseFloat(startMrr) || 0) > 0 ? ((parseFloat(lostMrr) || 0) / (parseFloat(startMrr) || 1) * 100) : 0;
  const annualCustChurn = (1 - Math.pow(1 - custChurn / 100, 12)) * 100;
  const avgLifetime = custChurn > 0 ? 1 / (custChurn / 100) : 0;
  const benchmarks = [
    { label: 'Excellent (SaaS)', value: '<2%' },
    { label: 'Good', value: '2-5%' },
    { label: 'Average', value: '5-7%' },
    { label: 'Concerning', value: '7-10%' },
    { label: 'Critical', value: '>10%' },
  ];

  return (
    <ToolLayout title="Churn Rate Calculator" description="Calculate customer and revenue churn rates for your subscription business." slug="churn-rate-calculator">
      <div className="tool-card">
        <h3 style={{ marginBottom: '1rem' }}>Customer Churn</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div><label>Customers at Start of Month</label><input className="input-field" type="number" value={startCustomers} onChange={e => setStartCustomers(e.target.value)} placeholder="e.g. 500" /></div>
          <div><label>Customers Lost This Month</label><input className="input-field" type="number" value={lostCustomers} onChange={e => setLostCustomers(e.target.value)} placeholder="e.g. 15" /></div>
        </div>
        <h3 style={{ marginBottom: '1rem' }}>Revenue Churn</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>MRR at Start of Month ($)</label><input className="input-field" type="number" value={startMrr} onChange={e => setStartMrr(e.target.value)} placeholder="e.g. 50000" /></div>
          <div><label>MRR Lost This Month ($)</label><input className="input-field" type="number" value={lostMrr} onChange={e => setLostMrr(e.target.value)} placeholder="e.g. 2000" /></div>
        </div>
      </div>
      <div className="result-box">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: custChurn < 5 ? '#f0fdf4' : '#fef2f2', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Monthly Customer Churn</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: custChurn < 5 ? '#16a34a' : '#dc2626' }}>{custChurn.toFixed(2)}%</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Annual Customer Churn</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{annualCustChurn.toFixed(1)}%</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: revChurn < 5 ? '#f0fdf4' : '#fef2f2', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Revenue Churn</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: revChurn < 5 ? '#16a34a' : '#dc2626' }}>{revChurn.toFixed(2)}%</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Avg Customer Lifetime</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{avgLifetime.toFixed(1)} mo</div>
          </div>
        </div>
        <h4 style={{ marginBottom: '0.5rem' }}>Industry Benchmarks (Monthly)</h4>
        {benchmarks.map(b => <div key={b.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0', fontSize: '0.85rem' }}><span>{b.label}</span><span style={{ fontWeight: 600 }}>{b.value}</span></div>)}
      </div>
    </ToolLayout>
  );
}