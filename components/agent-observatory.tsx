'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {BrandMark} from '@/components/brand-mark';
import {agentScenarios} from '@/lib/agent-scenarios';
import {saveCareBrief} from '@/lib/care-brief';

export function AgentObservatory(){
 const [scenarioId,setScenarioId]=useState('robotics');
 const [view,setView]=useState<'simple'|'map'>('simple');
 const [tick,setTick]=useState(0);
 const [playing,setPlaying]=useState(true);
 const [visible,setVisible]=useState(false);
 const [interacting,setInteracting]=useState(false);
 const [selected,setSelected]=useState('motor');
 const [reviewed,setReviewed]=useState<string[]>([]);
 const [company,setCompany]=useState('Flower Robotics');
 const [program,setProgram]=useState('FlowerCare');
 const root=useRef<HTMLDivElement>(null);
 const scenario=agentScenarios.find(s=>s.id===scenarioId)!;
 const findings=scenario.findings;
 const shown=findings.slice(0,Math.min(tick,6));
 const current=findings[Math.min(tick,5)];
 const finding=findings.find(f=>f.id===selected) || findings[0];
 const complete=tick>=8;
 const running=playing&&visible&&!interacting&&!complete;
 const stages=['Equipment identified','Evidence assessed','Service route prepared'];
 const activeStage=tick<2?0:tick<6?1:2;
 function reset(id=scenarioId){setScenarioId(id);setTick(0);setSelected('motor');setReviewed([])}
 function inspect(id:string){setPlaying(false);setSelected(id)}
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)setPlaying(false);const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.15});if(root.current)observer.observe(root.current);return()=>observer.disconnect()},[]);
 useEffect(()=>{if(!running)return;const timer=setTimeout(()=>{const next=Math.min(tick+1,8);setTick(next);if(next<=6)setSelected(findings[next-1].id)},2600);return()=>clearTimeout(timer)},[running,tick,findings]);
 useEffect(()=>{if(!complete||!playing||!visible||interacting)return;const timer=setTimeout(()=>reset(),10000);return()=>clearTimeout(timer)},[complete,playing,visible,interacting]);
 function step(){setPlaying(false);const next=Math.min(tick+1,8);setTick(next);if(next<=6)setSelected(findings[next-1].id)}
 function handoff(){saveCareBrief({source:'Care Intelligence simulation',company,program,hardware:scenario.name,summary:`Sample asset: ${scenario.asset}. ${shown.length} evidence records inspected; ${reviewed.length} care checks reviewed. Proposed scope requires technical diagnosis and review of eligibility, pricing and final terms.`})}
 const completedResults=shown.slice(-3);
 return <section className="intelligence-section" id="agents">
   <div className="shell section-heading centered"><p className="eyebrow">CARE INTELLIGENCE</p><h2>Understand the incident.<br/><span>Prepare the next step.</span></h2><p>Watch equipment evidence become a structured service review. Switch views, inspect any completed result and take control whenever you need.</p></div>
   <div className="intelligence-scenery"><div className={`intelligence-app ${running?'intelligence-running':''}`} ref={root}>
     <div className="intelligence-titlebar"><span className="intelligence-brand"><BrandMark/><b>Care Intelligence</b></span><span className="simulation-label">ILLUSTRATIVE SIMULATION</span></div>
     <div className="intelligence-controls"><label>Equipment scenario<select value={scenarioId} onChange={e=>{reset(e.target.value);setPlaying(true)}}>{agentScenarios.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label><div className="intelligence-playback"><button onClick={()=>{if(complete){reset();setPlaying(true)}else setPlaying(!playing)}} aria-label={complete?'Replay analysis':playing?'Pause analysis':'Play analysis'}>{complete?'Replay':playing?'Pause':'Play'}</button><button onClick={step} disabled={complete}>Next step</button><button onClick={()=>{reset();setPlaying(false)}}>Reset</button></div></div>
     <div className="intelligence-body" onPointerEnter={()=>setInteracting(true)} onPointerLeave={()=>setInteracting(false)} onFocusCapture={()=>setInteracting(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setInteracting(false)}} onPointerDown={()=>setPlaying(false)}>
       <div className="intelligence-viewbar"><div role="group" aria-label="Analysis view"><button aria-pressed={view==='simple'} onClick={()=>setView('simple')}>Simple view</button><button aria-pressed={view==='map'} onClick={()=>setView('map')}>Dependency map</button></div><span className="analysis-status"><i/>{complete?'Review packet prepared':running?'Analyzing sample evidence':playing&&interacting?'Paused for inspection':'Playback paused'}</span></div>
       {view==='simple'?<div className="simple-analysis"><div className="analysis-asset"><span className="eyebrow">SAMPLE EQUIPMENT</span><h3>{scenario.asset}</h3><p>{scenario.description}</p></div><div className="analysis-flow">{stages.map((s,i)=><div className={`analysis-station ${i===activeStage?'station-active':''} ${i<activeStage||complete?'station-complete':''}`} key={s}><span className="station-number">{i<activeStage||complete?'✓':`0${i+1}`}</span><h4>{s}</h4><p>{[tick>=2?'Asset and incident context recorded.':'Gathering equipment and incident records.',tick>=6?'Six sample findings connected.':'Linking component, environment and service evidence.',complete?'Prepared for eligibility and technical review.':'Organizing proposed checks and service dependencies.'][i]}</p>{i<2&&<span className="flow-connector" aria-hidden="true"><i/></span>}</div>)}</div><div className="analysis-now" aria-live="polite"><span className="analysis-orbit" aria-hidden="true"><BrandMark/></span><div><span className="eyebrow">{complete?'READY FOR REVIEW':tick<6?'CURRENT ANALYSIS':'PREPARING THE REVIEW'}</span><h4>{complete?'A documented service route, ready to assess.':tick<6?current.label:tick===6?'Compile the proposed care scope':'Prepare the branded service brief'}</h4><p>{complete?'No claim has been approved. The proposed route still requires eligibility and technical review.':tick<6?current.signal:'Bring equipment records, findings and proposed care checks into one review packet.'}</p></div></div></div>:<div className="dependency-analysis"><div className="dependency-graph"><svg viewBox="0 0 600 430" preserveAspectRatio="none" aria-hidden="true">{shown.map(f=><path key={f.id} className={`dependency-line ${selected===f.id?'selected-line':''}`} d={`M300 215 Q${f.x*6} 215 ${f.x*6} ${f.y*4.3}`}/>)}</svg><div className="dependency-core"><BrandMark/><b>Equipment incident</b><small>{scenario.name}</small></div>{shown.map(f=><button className={`dependency-node severity-${f.severity} ${selected===f.id?'dependency-selected':''}`} key={f.id} style={{left:`${f.x}%`,top:`${f.y}%`}} aria-label={`Inspect ${f.label}`} aria-pressed={selected===f.id} onClick={()=>inspect(f.id)}><span>{f.short}</span><b>{f.label}</b></button>)}</div><p className="dependency-caption">{shown.length}/6 findings connected. Select a node to inspect its evidence. Moving lines indicate analysis playback.</p></div>}
       <div className="completion-shelf" aria-live="polite"><div className="completion-heading"><b>Completed analysis</b><span>{shown.length}/6 evidence records</span></div>{completedResults.length?<div className="completion-results">{completedResults.map(f=><button key={f.id} className={selected===f.id?'result-selected':''} onClick={()=>inspect(f.id)}><span aria-hidden="true">✓</span><div><b>{f.label}</b><small>{f.severity==='ready'?'Equipment record matched':f.severity==='review'?'Analyzed · review required':'Analyzed · dependency identified'}</small></div></button>)}</div>:<p className="completion-empty">Completed results appear here as the analysis progresses.</p>}</div>
       {shown.some(f=>f.id===finding.id)&&<div className="analysis-evidence"><div><p className="eyebrow">SELECTED RESULT / {finding.agent.replace('.agent','').toUpperCase()}</p><h3>{finding.label}</h3><p>{finding.evidence}</p></div><div><p className="eyebrow">PROPOSED REVIEW CHECK</p><p>{finding.check}</p><button className="analysis-review" aria-pressed={reviewed.includes(finding.id)} onClick={()=>setReviewed(reviewed.includes(finding.id)?reviewed.filter(x=>x!==finding.id):[...reviewed,finding.id])}>{reviewed.includes(finding.id)?'Reviewed in this demo · Undo':'Mark reviewed in this demo'}</button></div></div>}
     </div>
     <div className="intelligence-handoff"><div><p className="eyebrow">YOUR BRANDED CARE PROGRAM</p><div className="intelligence-fields"><label>Company<input value={company} maxLength={60} onFocus={()=>setPlaying(false)} onChange={e=>setCompany(e.target.value)}/></label><label>Program<input value={program} maxLength={60} onFocus={()=>setPlaying(false)} onChange={e=>setProgram(e.target.value)}/></label></div></div><div><p>{complete?'The sample review packet is ready to discuss.':'Inspect evidence and prepare a sample program brief.'}</p><Link className="button primary" href="/#contact" onClick={handoff}>Discuss your care program</Link></div></div>
     <div className="intelligence-foot"><span>{tick}/8 analysis steps · {reviewed.length} checks reviewed</span><span>Sample data · No live AI or coverage decision</span></div>
   </div></div>
 </section>
}
