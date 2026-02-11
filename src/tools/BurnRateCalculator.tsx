import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function BurnRateCalculator() {
  const [expenses, setExpenses] = useState([
    { name: 'Salaries', amount: '' },
    { name: 'Office/Rent', amount: '' },
    { name: 'Software & Tools', amount: '' },
    { name: 'Marketing', amount: '' },
    { name: 'Legal & Accounting', amount: '' },
    { name: 'Other', amount: '' },
  ]);
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [result, setResult] = useState<any>(null);

  const updateExpense = (i: number, val: string) => {
    const updated = [...expenses];
    updated[i].amount = val;
    setExpenses(updated);
  };

  const addExpense = () => setExpenses([...expenses, { name: '', amount: '' }]);

  const calculate = () => {
    const totalExpenses = expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
    const rev = parseFloat(monthlyRevenue) || 0;
    const grossBurn = totalExpenses;
    const netBurn = totalExpenses - rev;
    const breakdown = expenses.filter(e => parseFloat(e.amount) > 0).map(e => ({
      name: e.name,
      amount: parseFloat(e.amount),
      pct: ((parseFloat(e.amount) / totalExpenses) * 100).toFixed(1)
    }));
    setResult({ grossBurn, netBurn, revenue: rev, breakdown, annualBurn: netBurn * 12 });
  };

  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <ToolLayout title="Burn Rate Calculator" description="Calculate your monthly burn rate and understand your spending patterns." slug="burn-rate-calculator">
      <div className="tool-card">
        <h3 style={{ marginBottom: '1rem' }}>Monthly Expenses</h3>
        {expenses.map((e, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <input className="input-field" value={e.name} onChange={ev => { const u = [...expenses]; u[i].name = ev.target.value; setExpenses(u); }} placeholder="Category" />
            <input className="input-field" type="number" value={e.amount} onChange={ev => updateExpense(i, ev.target.value)} placeholder="Amount ($)" />
          </div>
        ))}
        <button className="btn-secondary" onClick={addExpense} style={{ marginBottom: '1rem' }}>+ Add Category</button>
        <div style={{ marginTop: '1rem' }}>
          <label>Monthly Revenue ($)</label>
          <input className="input-field" type="number" value={monthlyRevenue} onChange={e => setMonthlyRevenue(e.target.value)} placeholder="e.g. 10000" />
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={calculate}>Calculate Burn Rate</button>
      </div>
      {result && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fef2f2', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Gross Burn</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>{fmt(result.grossBurn)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>per month</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fff7ed', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Net Burn</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ea580c' }}>{fmt(result.netBurn)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>per month</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Annual Burn</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(result.annualBurn)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>per year</div>
            </div>
          </div>
          {result.breakdown.length > 0 && (
            <div>
              <h4 style={{ marginBottom: '0.75rem' }}>Expense Breakdown</h4>
              {result.breakdown.map((b: any, i: number) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ width: 120, fontSize: '0.875rem' }}>{b.name}</span>
                  <div style={{ flex: 1, height: 24, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden', marginRight: 8 }}>
                    <div style={{ width: `${b.pct}%`, height: '100%', background: '#3b82f6', borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280', width: 80, textAlign: 'right' }}>{fmt(b.amount)} ({b.pct}%)</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </ToolLayout>
  );
}
