export type CareBrief = {source:string; company:string; program:string; hardware:string; summary:string};
const key='hardsurance-care-brief';
export function saveCareBrief(brief:CareBrief){try{sessionStorage.setItem(key,JSON.stringify(brief))}catch{}window.dispatchEvent(new CustomEvent('care-brief',{detail:brief}));}
export function readCareBrief():CareBrief|null{try{const v=JSON.parse(sessionStorage.getItem(key)||'null');return v&&['source','company','program','hardware','summary'].every(k=>typeof v[k]==='string')?v:null}catch{return null}}
export function clearCareBrief(){try{sessionStorage.removeItem(key)}catch{}window.dispatchEvent(new CustomEvent('care-brief',{detail:null}));}
