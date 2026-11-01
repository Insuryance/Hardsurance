import type {CSSProperties} from 'react';
export function FlipLabel({children}:{children:string}){return <span className="roll-label" aria-hidden="true">{Array.from(children).map((c,i)=><span className="roll-char" style={{'--order':i} as CSSProperties} key={i}><span>{c===' '?'\u00a0':c}</span><span>{c===' '?'\u00a0':c}</span></span>)}</span>}
