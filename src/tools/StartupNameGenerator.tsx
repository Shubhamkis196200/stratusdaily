import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const prefixes = ['Nova','Flux','Apex','Bolt','Velo','Aero','Nexo','Vibe','Zest','Synk','Halo','Prox','Byte','Omni','Viso','Alto','Nuro','Quix','Dyna','Orbi'];
const suffixes = ['ify','ly','io','hub','lab','base','dock','flow','mind','grid','wave','loop','nest','shift','link','forge','pulse','sphere','stack','wise'];
const words = ['Cloud','Data','Smart','Pixel','Signal','Prime','Edge','Core','Path','Scale','Spark','Bridge','Craft','Logic','Quest','Rise','Atlas','Vista','Zen','Peak'];

export default function StartupNameGenerator() {
  const [keyword, setKeyword] = useState('');
  const [industry, setIndustry] = useState('tech');
  const [style, setStyle] = useState('modern');
  const [names, setNames] = useState<string[]>([]);

  const generate = () => {
    const results: string[] = [];
    const kw = keyword || 'Tech';
    const seed = kw.length + industry.length;
    for (let i = 0; i < 20; i++) {
      const r = Math.floor(Math.random() * 5);
      if (r === 0) results.push(prefixes[(seed+i)%prefixes.length] + suffixes[(seed*2+i)%suffixes.length]);
      else if (r === 1) results.push(kw.charAt(0).toUpperCase() + kw.slice(1) + suffixes[(i*3)%suffixes.length]);
      else if (r === 2) results.push(words[(seed+i*2)%words.length] + words[(i*3+1)%words.length]);
      else if (r === 3) results.push(prefixes[(i*7)%prefixes.length] + kw.charAt(0).toUpperCase() + kw.slice(1,4));
      else results.push(words[(i*2)%words.length] + suffixes[(i*5)%suffixes.length]);
    }
    setNames([...new Set(results)].slice(0, 15));
  };

  return (
    <ToolLayout title="Startup Name Generator" description="Generate creative startup names based on your industry and keywords." slug="startup-name-generator">
      <div className="tool-card">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
          <div><label>Keyword / Industry</label><input className="input-field" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="e.g. finance, health, AI" /></div>
          <div><label>Industry</label><select className="input-field" value={industry} onChange={e => setIndustry(e.target.value)}>
            <option value="tech">Technology</option><option value="health">Healthcare</option><option value="finance">Finance</option><option value="education">Education</option><option value="ecommerce">E-Commerce</option>
          </select></div>
          <div><label>Style</label><select className="input-field" value={style} onChange={e => setStyle(e.target.value)}>
            <option value="modern">Modern</option><option value="classic">Classic</option><option value="playful">Playful</option>
          </select></div>
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={generate}>Generate Names</button>
      </div>
      {names.length > 0 && (
        <div className="result-box">
          <h3 style={{ marginBottom: '1rem' }}>Generated Names</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {names.map((n, i) => (
              <div key={i} style={{ padding: '1rem', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textAlign: 'center', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
                onClick={() => navigator.clipboard?.writeText(n)}>
                {n}
                <div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 400, marginTop: 4 }}>Click to copy</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}