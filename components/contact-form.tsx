'use client';
import {useEffect,useState,type FormEvent} from 'react';
import {readCareBrief,clearCareBrief,type CareBrief} from '@/lib/care-brief';
export function ContactForm(){
 const [status,setStatus]=useState('idle');
 const [brief,setBrief]=useState<CareBrief|null>(null);
 useEffect(()=>{setBrief(readCareBrief());const update=()=>{setBrief(readCareBrief());setStatus('idle')};window.addEventListener('care-brief',update);return()=>window.removeEventListener('care-brief',update)},[]);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(status==='sending')return;const form=e.currentTarget;setStatus('sending');try{const response=await fetch('https://formspree.io/f/xkoelqyb',{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw new Error();form.reset();clearCareBrief();setStatus('success');}catch{setStatus('error')}}
 return <form className="contact-form" onSubmit={submit}>
 {brief&&<div className="attached-brief"><span>YOUR DEMO → YOUR ENQUIRY</span><h3>{brief.program}</h3><p>{brief.hardware} · {brief.source}</p><details><summary>Review the attached sample brief</summary><p>{brief.summary}</p></details><button type="button" onClick={()=>clearCareBrief()}>Remove brief ×</button></div>}
 <input type="hidden" name="care_program_brief" value={brief?JSON.stringify(brief):''}/>
 <div className="form-row"><label>Your name<input required name="name" autoComplete="name" placeholder="Alex Morgan" maxLength={100}/></label><label>Work email<input required name="email" type="email" autoComplete="email" placeholder="alex@company.com" maxLength={254}/></label></div>
 <label>Company<input key={brief?.company||'blank'} defaultValue={brief?.company||''} required name="company" autoComplete="organization" placeholder="Your company" maxLength={150}/></label>
 <label>What would you like to protect?<textarea name="message" rows={3} required maxLength={4000} placeholder={brief?'Tell us your fleet size, timeline and anything else we should know…':'Tell us about your hardware, fleet or product…'}/></label>
 <button className="button primary" disabled={status==='sending'}>{status==='sending'?'Sending…':brief?'Send my brief & join early access':'Join early access'} <span>↗</span></button>
 <p className="fine-print">We’ll use these details{brief?' and the attached sample brief':''} to respond to your request. Submitting does not purchase or activate a plan.</p><div aria-live="polite">{status==='success'&&<p className="form-success">Your enquiry was sent. Thank you for helping shape better hardware care.</p>}{status==='error'&&<p role="alert">Your request couldn’t be sent. Your details are still here. Try again or email <a href="mailto:contact@hardsurance.com">contact@hardsurance.com</a>.</p>}</div></form>
}
