import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function FundingRoundSimulator() {
  const [preMoneyVal, setPreMoneyVal] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [existingShares, setExistingShares] = useState('10000000');
  const [optionPool, setOptionPool] = useState('15');

  const preMoney = parseFloat(preMoneyVal) || 0;
  const investment = parseFloat(investmentAmount) || 0;
  const existing = parseInt(existingShares) || 0;
  const poolPct = (parseFloat(optionPool) || 0) / 100;
  const postMoney = preMoney + investment;
  const investorPct = postMoney > 0 ? (investment / postMoney * 100) : 0;
  const pricePerShare = existing > 0 ? preMoney / existing : 0;
  const newShares = pricePerShare > 0 ? Math.round(investment / pricePerShare) : 0;
  const totalShares = existing + newShares;
  const poolShares = Math.round(totalShares * poolPct);

  const fmt = (n: number) => n >= 1e6 ? '$' + (n / 1e6).toFixed(1) + 'M' : '$' + Math.round(n).toLocaleString();

  return (
    <ToolLayout title="Funding Round Simulator" description="Simulate funding rounds and see the impact on ownership and dilution." slug="funding-round-simulator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><label>Pre-Money Valuation ($)</label><input className="input-field" type="number" value={preMoneyVal} onChange={e => setPreMoneyVal(e.target.value)} placeholder="e.g. 5000000" /></div>
          <div><label>Investment Amount ($)</label><input className="input-field" type="number" value={investmentAmount} onChange={e => setInvestmentAmount(e.target.value)} placeholder="e.g. 1500000" /></div>
          <div><label>Existing Shares</label><input className="input-field" type="number" value={existingShares} onChange={e => setExistingShares(e.target.value)} /></div>
          <div><label>Option Pool (%)</label><input className="input-field" type="number" value={optionPool} onChange={e => setOptionPool(e.target.value)} /></div>
        </div>
      </div>
      {postMoney > 0 && (
        <div className="result-box">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Post-Money</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>{fmt(postMoney)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Price/Share</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a' }}>${pricePerShare.toFixed(2)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fefce8', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Investor Ownership</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ca8a04' }}>{investorPct.toFixed(1)}%</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fdf4ff', borderRadius: 8 }}>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>New Shares</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#a855f7' }}>{newShares.toLocaleString()}</div>
            </div>
          </div>
          <h4 style={{ marginBottom: '0.5rem' }}>Post-Round Cap Table</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead><tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Holder</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>Shares</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>%</th>
              <th style={{ padding: '0.5rem', textAlign: 'right' }}>Value</th>
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem' }}>Founders & Existing</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{(existing - poolShares).toLocaleString()}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{((existing - poolShares) / (totalShares) * 100).toFixed(1)}%</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt((existing - poolShares) * pricePerShare)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem' }}>New Investors</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{newShares.toLocaleString()}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{(newShares / totalShares * 100).toFixed(1)}%</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(investment)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem' }}>Option Pool</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{poolShares.toLocaleString()}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{(poolShares / totalShares * 100).toFixed(1)}%</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>{fmt(poolShares * pricePerShare)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </ToolLayout>
  );
}