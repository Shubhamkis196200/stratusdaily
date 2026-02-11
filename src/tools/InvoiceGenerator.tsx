import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';
export default function InvoiceGenerator() {
  const [company, setCompany] = useState('');
  const [client, setClient] = useState('');
  const [invoiceNum, setInvoiceNum] = useState('INV-001');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [items, setItems] = useState([{ desc: '', qty: '1', rate: '' }]);
  const [tax, setTax] = useState('0');

  const addItem = () => setItems([...items, { desc: '', qty: '1', rate: '' }]);
  const update = (i: number, f: string, v: string) => { const u = [...items]; (u[i] as any)[f] = v; setItems(u); };
  const subtotal = items.reduce((s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.rate) || 0), 0);
  const taxAmt = subtotal * ((parseFloat(tax) || 0) / 100);
  const total = subtotal + taxAmt;
  const fmt = (n: number) => '$' + n.toFixed(2);

  return (
    <ToolLayout title="Invoice Generator" description="Create professional invoices for your startup clients." slug="invoice-generator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div><label>Your Company</label><input className="input-field" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" /></div>
          <div><label>Client</label><input className="input-field" value={client} onChange={e => setClient(e.target.value)} placeholder="Client name" /></div>
          <div><label>Invoice #</label><input className="input-field" value={invoiceNum} onChange={e => setInvoiceNum(e.target.value)} /></div>
          <div><label>Date</label><input className="input-field" type="date" value={date} onChange={e => setDate(e.target.value)} /></div>
        </div>
        <h4 style={{ marginBottom: '0.5rem' }}>Line Items</h4>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input className="input-field" value={it.desc} onChange={e => update(i, 'desc', e.target.value)} placeholder="Description" />
            <input className="input-field" type="number" value={it.qty} onChange={e => update(i, 'qty', e.target.value)} placeholder="Qty" />
            <input className="input-field" type="number" value={it.rate} onChange={e => update(i, 'rate', e.target.value)} placeholder="Rate ($)" />
            <div style={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>{fmt((parseFloat(it.qty)||0)*(parseFloat(it.rate)||0))}</div>
          </div>
        ))}
        <button className="btn-secondary" onClick={addItem}>+ Add Item</button>
        <div style={{ marginTop: '1rem', maxWidth: 200 }}>
          <label>Tax Rate (%)</label>
          <input className="input-field" type="number" value={tax} onChange={e => setTax(e.target.value)} />
        </div>
      </div>
      <div className="result-box" style={{ maxWidth: 600, margin: '1.5rem auto', padding: '2rem', background: '#fff', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div><h2 style={{ color: '#1e40af' }}>{company || 'Your Company'}</h2></div>
          <div style={{ textAlign: 'right' }}><h3>INVOICE</h3><div style={{ color: '#6b7280', fontSize: '0.85rem' }}>{invoiceNum}<br/>{date}</div></div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}><strong>Bill To:</strong> {client || 'Client'}</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}><th style={{textAlign:'left',padding:'0.5rem'}}>Description</th><th style={{textAlign:'right',padding:'0.5rem'}}>Qty</th><th style={{textAlign:'right',padding:'0.5rem'}}>Rate</th><th style={{textAlign:'right',padding:'0.5rem'}}>Amount</th></tr></thead>
          <tbody>{items.filter(it => it.desc).map((it,i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}><td style={{padding:'0.5rem'}}>{it.desc}</td><td style={{padding:'0.5rem',textAlign:'right'}}>{it.qty}</td><td style={{padding:'0.5rem',textAlign:'right'}}>{fmt(parseFloat(it.rate)||0)}</td><td style={{padding:'0.5rem',textAlign:'right'}}>{fmt((parseFloat(it.qty)||0)*(parseFloat(it.rate)||0))}</td></tr>
          ))}</tbody>
        </table>
        <div style={{ textAlign: 'right' }}>
          <div>Subtotal: {fmt(subtotal)}</div>
          <div>Tax ({tax}%): {fmt(taxAmt)}</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af', marginTop: '0.5rem' }}>Total: {fmt(total)}</div>
        </div>
      </div>
    </ToolLayout>
  );
}