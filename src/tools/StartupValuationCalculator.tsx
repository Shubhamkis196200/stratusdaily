import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function StartupValuationCalculator() {
  const [revenue, setRevenue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [industry, setIndustry] = useState('saas');
  const [stage, setStage] = useState('seed');
  const [result, setResult] = useState<any>(null);

  const multiples: Record<string, Record<string, number>> = {
    saas: { pre_seed: 8, seed: 12, series_a: 15, series_b: 20, growth: 25 },
    ecommerce: { pre_seed: 2, seed: 3, series_a: 4, series_b: 6, growth: 8 },
    fintech: { pre_seed: 6, seed: 10, series_a: 14, series_b: 18, growth: 22 },
    marketplace: { pre_seed: 5, seed: 8, series_a: 12, series_b: 16, growth: 20 },
    biotech: { pre_seed: 10, seed: 15, series_a: 20, series_b: 30, growth: 40 },
  };

  const calculate = () => {
    const rev = parseFloat(revenue) || 0;
    const growth = parseFloat(growthRate) || 0;
    const mult = multiples[industry]?.[stage] || 10;
    const growthAdj = 1 + (growth > 100 ? 0.5 : growth > 50 ? 0.3 : growth > 20 ? 0.1 : 0);
    const revenueMultiple = rev * mult * growthAdj;
    const dcf = calculateDCF(rev, growth);
    const berkus = calculateBerkus(stage);
    setResult({ revenueMultiple, dcf, berkus, mult, growthAdj });
  };

  const calculateDCF = (rev: number, growth: number) => {
    let total = 0;
    const discountRate = 0.3;
    for (let y = 1; y <= 5; y++) {
      const projected = rev * Math.pow(1 + growth / 100, y);
      total += projected / Math.pow(1 + discountRate, y);
    }
    const terminalValue = (rev * Math.pow(1 + growth / 100, 5) * 10) / Math.pow(1 + discountRate, 5);
    return total + terminalValue;
  };

  const calculateBerkus = (s: string) => {
    const base: Record<string, number> = { pre_seed: 250000, seed: 750000, series_a: 2000000, series_b: 5000000, growth: 10000000 };
    const factors = ['Sound Idea', 'Prototype', 'Quality Team', 'Strategic Relationships', 'Product Rollout'];
    return { total: (base[s] || 500000) * 5, factors, perFactor: base[s] || 500000 };
  };

  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <ToolLayout title="Startup Valuation Calculator" description="Estimate your startup valuation using multiple methods including revenue multiples, DCF, and Berkus method." slug="startup-valuation-calculator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label>Annual Revenue ($)</label>
            <input className="input-field" type="number" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="e.g. 500000" />
          </div>
          <div>
            <label>Growth Rate (%)</label>
            <input className="input-field" type="number" value={growthRate} onChange={e => setGrowthRate(e.target.value)} placeholder="e.g. 100" />
          </div>
          <div>
            <label>Industry</label>
            <select className="input-field" value={industry} onChange={e => setIndustry(e.target.value)}>
              <option value="saas">SaaS</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="fintech">FinTech</option>
              <option value="marketplace">Marketplace</option>
              <option value="biotech">Biotech</option>
            </select>
          </div>
          <div>
            <label>Stage</label>
            <select className="input-field" value={stage} onChange={e => setStage(e.target.value)}>
              <option value="pre_seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series_a">Series A</option>
              <option value="series_b">Series B</option>
              <option value="growth">Growth</option>
            </select>
          </div>
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={calculate}>Calculate Valuation</button>
      </div>
      {result && (
        <div className="result-box">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Valuation Estimates</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: 4 }}>Revenue Multiple</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>{fmt(result.revenueMultiple)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{result.mult}x × {result.growthAdj}x growth adj.</div>
            </div>
            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: 4 }}>DCF (5-Year)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{fmt(result.dcf)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>30% discount rate</div>
            </div>
            <div style={{ background: '#fefce8', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: 4 }}>Berkus Method</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{fmt(result.berkus.total)}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{fmt(result.berkus.perFactor)} per factor</div>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
