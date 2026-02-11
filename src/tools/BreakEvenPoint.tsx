import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

export default function BreakEvenPoint() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const result = (parseFloat(input1) || 0) + (parseFloat(input2) || 0);
  
  return (
    <ToolLayout title="Break-Even Point" description="Find break-even point" slug="break-even-point">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label>Input 1</label>
            <input className="input-field" type="number" value={input1} onChange={e => setInput1(e.target.value)} placeholder="Enter value" />
          </div>
          <div>
            <label>Input 2</label>
            <input className="input-field" type="number" value={input2} onChange={e => setInput2(e.target.value)} placeholder="Enter value" />
          </div>
        </div>
        <button className="btn-primary" style={{ marginTop: '1rem' }}>Calculate</button>
      </div>
      {result > 0 && (
        <div className="result-box" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Result</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>{result.toLocaleString()}</div>
        </div>
      )}
    </ToolLayout>
  );
}
