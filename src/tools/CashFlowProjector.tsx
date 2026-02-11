import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function CashFlowProjector() {
  const [startingCash, setStartingCash] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [revenueGrowth, setRevenueGrowth] = useState('10');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [expenseGrowth, setExpenseGrowth] = useState('5');

  const cash = parseFloat(startingCash) || 0;
  const rev = parseFloat(monthlyRevenue) || 0;
  const rg = (parseFloat(revenueGrowth) || 0) / 100;
  const exp = parseFloat(monthlyExpenses) || 0;
  const eg = (parseFloat(expenseGrowth) || 0) / 100;

  let balance = cash;
  const months = Array.from({ length: 12 }, (_, i) => {
    const mRev = rev * Math.pow(1 + rg / 12, i);
    const mExp = exp * Math.pow(1 + eg / 12, i);
    const net = mRev - mExp;
    balance += net;
    return { month: i + 1, revenue: mRev, expenses: mExp, net, balance };
  });

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <ToolLayout title="Cash Flow Projector" description="Project your cash flows over the next 12 months." slug="cash-flow-projector">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Starting Cash ($)</label><input className="input-field" type="number" value={startingCash} onChange={e => setStartingCash(e.target.value)} placeholder="500000" /></div>
          <div><label>Monthly Revenue ($)</label><input className="input-field" type="number" value={monthlyRevenue} onChange={e => setMonthlyRevenue(e.target.value)} placeholder="30000" /></div>
          <div><label>Revenue Growth (%/yr)</label><input className="input-field" type="number" value={revenueGrowth} onChange={e => setRevenueGrowth(e.target.value)} /></div>
          <div><label>Monthly Expenses ($)</label><input className="input-field" type="number" value={monthlyExpenses} onChange={e => setMonthlyExpenses(e.target.value)} placeholder="50000" /></div>
          <div><label>Expense Growth (%/yr)</label><input className="input-field" type="number" value={expenseGrowth} onChange={e => setExpenseGrowth(e.target.value)} /></div>
        </div>
      </div>
      {cash > 0 && (
        <div className="result-box">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{padding:'0.5rem',textAlign:'left'}}>Month</th>
              <th style={{padding:'0.5rem',textAlign:'right'}}>Revenue</th>
              <th style={{padding:'0.5rem',textAlign:'right'}}>Expenses</th>
              <th style={{padding:'0.5rem',textAlign:'right'}}>Net</th>
              <th style={{padding:'0.5rem',textAlign:'right'}}>Balance</th>
            </tr></thead>
            <tbody>{months.map(m => (
              <tr key={m.month} style={{ borderBottom: '1px solid #f3f4f6', background: m.balance < 0 ? '#fef2f2' : 'transparent' }}>
                <td style={{padding:'0.5rem'}}>{m.month}</td>
                <td style={{padding:'0.5rem',textAlign:'right',color:'#16a34a'}}>{fmt(m.revenue)}</td>
                <td style={{padding:'0.5rem',textAlign:'right',color:'#dc2626'}}>{fmt(m.expenses)}</td>
                <td style={{padding:'0.5rem',textAlign:'right',fontWeight:600,color:m.net>=0?'#16a34a':'#dc2626'}}>{fmt(m.net)}</td>
                <td style={{padding:'0.5rem',textAlign:'right',fontWeight:700,color:m.balance>=0?'#1e40af':'#dc2626'}}>{fmt(m.balance)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </ToolLayout>
  );
}