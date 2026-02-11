import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function TamSamSomCalculator() {
  const [totalPop, setTotalPop] = useState('');
  const [avgSpend, setAvgSpend] = useState('');
  const [samPct, setSamPct] = useState('30');
  const [somPct, setSomPct] = useState('5');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const pop = parseFloat(totalPop) || 0;
    const spend = parseFloat(avgSpend) || 0;
    const tam = pop * spend;
    const sam = tam * (parseFloat(samPct) / 100);
    const som = sam * (parseFloat(somPct) / 100);
    setResult({ tam, sam, som });
  };

  const fmt = (n: number) => {
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K';
    return '$' + n.toFixed(0);
  };

  return (
    <ToolLayout title="TAM/SAM/SOM Calculator" description="Calculate your Total Addressable, Serviceable, and Obtainable Market sizes." slug="tam-sam-som-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Total Potential Customers</label><input className="input-field" type="number" value={totalPop} onChange={e => setTotalPop(e.target.value)} placeholder="e.g. 10000000" /></div>
          <div><label>Avg Annual Spend per Customer ($)</label><input className="input-field" type="number" value={avgSpend} onChange={e => setAvgSpend(e.target.value)} placeholder="e.g. 500" /></div>
          <div><label>SAM % of TAM</label><input className="input-field" type="number" value={samPct} onChange={e => setSamPct(e.target.value)} /></div>
          <div><label>SOM % of SAM</label><input className="input-field" type="number" value={somPct} onChange={e => setSomPct(e.target.value)} /></div>
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={calculate}>Calculate Market Size</button>
      </div>
      {result && (
        <div className="result-box">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'TAM', sublabel: 'Total Addressable Market', value: result.tam, color: '#3b82f6', size: 180 },
              { label: 'SAM', sublabel: 'Serviceable Addressable Market', value: result.sam, color: '#10b981', size: 140 },
              { label: 'SOM', sublabel: 'Serviceable Obtainable Market', value: result.som, color: '#f59e0b', size: 100 },
            ].map(m => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div style={{ width: m.size, height: m.size, borderRadius: '50%', background: m.color + '20', border: '3px solid ' + m.color, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto 0.5rem' }}>
                  <div style={{ fontWeight: 800, fontSize: m.size > 140 ? '1.5rem' : '1.2rem', color: m.color }}>{fmt(m.value)}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color }}>{m.label}</div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', maxWidth: 150 }}>{m.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}