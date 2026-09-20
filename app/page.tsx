import Link from 'next/link';
import { DemoWorkspace } from '@/components/demo-workspace';
import { HoverVideo } from '@/components/hover-video';
import { RiskOrb } from '@/components/risk-orb';
import { articles, useCases } from '@/lib/content';
import { ContactForm } from '@/components/contact-form';

const jobs = [
  ['01', 'Map the system', 'Connect assets, software, vendors, contracts and operating locations.'],
  ['02', 'Read the policy', 'Turn forms, schedules and endorsements into a structured coverage model.'],
  ['03', 'Test the gaps', 'Compare how the company operates with what the policy actually promises.'],
  ['04', 'Run the renewal', 'Keep evidence, decisions and carrier questions in one live record.'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero-optics" data-hero-theme>
        <RiskOrb />
        <div className="hero-optics-copy">
          <p className="eyebrow">The insurance copilot for physical AI</p>
          <h1>Know what your<br />policy misses.</h1>
          <p className="lede">
            Hardsurance connects how your machines operate to the clauses meant
            to protect them. It shows founders what is covered, what is unclear
            and what to fix before a claim.
          </p>
          <div className="actions">
            <Link className="button primary" href="#contact">Book a founder review</Link>
            <Link className="button text" href="/demo">See the copilot work <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-prism-frame" data-triangle-container aria-hidden="true" />
        <div className="hero-optics-foot">
          <span>Move your pointer to test the signal</span>
          <div><b>Robotics</b><b>Drones</b><b>Data centers</b><b>Space systems</b></div>
        </div>
      </section>

      <section className="jobs-section light">
        <div className="shell">
          <div className="section-head"><p className="eyebrow">One operating record</p><h2>Insurance that starts with the machine.</h2><p>Not a generic chatbot. A purpose-built system that connects engineering reality to policy language.</p></div>
          <div className="jobs-grid">{jobs.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="film-feature">
        <video autoPlay muted loop playsInline preload="metadata" poster="" aria-label="Data center infrastructure"><source src="/films/data-center.mp4" type="video/mp4" /></video>
        <div className="film-shade" />
        <div className="shell film-copy"><p className="eyebrow">The physical system matters</p><h2>A small dependency can carry a large loss.</h2><p>Trace cooling, power, software, operators and vendors to the policy intended to respond.</p><Link className="button outline" href="/use-cases/data-centers">Explore data centers</Link></div>
      </section>

      <section className="use-case-section shell">
        <div className="section-head row"><div><p className="eyebrow">Four operating environments</p><h2>Specific by design.</h2></div><p>Each risk model begins with how the hardware is built, deployed and controlled.</p></div>
        <div className="use-case-grid">{Object.entries(useCases).map(([slug, item]) => <Link href={`/use-cases/${slug}`} className="use-case-card" key={slug}><HoverVideo src={item.film} label={`${item.label} operating environment`} /><div><span>0{Object.keys(useCases).indexOf(slug)+1}</span><h3>{item.label}</h3><p>{item.description}</p><b>Explore <i>↗</i></b></div></Link>)}</div>
      </section>
<section className="story-film">
  <div className="shell">
    <div className="story-film-head">
      <p className="eyebrow">The hardware changed</p>

      <h2>
        Hardware evolved.
        <br />
        Its insurance schedule didn’t.
      </h2>

      <p>
        From the first shaped stone to orbital infrastructure, machines kept
        changing. The document meant to protect them often remained a list.
        Hardsurance turns that gap into a living operating model.
      </p>
    </div>

    <div className="story-film-player">
     <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-label="The evolution of hardware and the insurance intelligence gap"
>
        <source
          src="/films/hardsurance-stone-to-station.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div className="story-film-caption">
      <span>56 seconds</span>
      <p>Why physical AI needs an insurance intelligence layer.</p>
    </div>
  </div>
</section>
      <section className="demo-section light">
        <div className="shell">
          <div className="section-head row"><div><p className="eyebrow">Live product simulation</p><h2>See the reasoning, not just the answer.</h2></div><p>Select an operation and watch the agents build an evidence-backed coverage decision.</p></div>
          <DemoWorkspace compact />
          <div className="center-action"><Link className="button dark" href="/demo">Open the full demo</Link></div>
        </div>
      </section>

      <section className="insights-section shell">
        <div className="section-head row"><div><p className="eyebrow">Field notes</p><h2>Read the risk before renewal.</h2></div><Link className="text-link" href="/insights">All insights ↗</Link></div>
        <div className="article-grid">{Object.entries(articles).map(([slug, article]) => <Link href={`/insights/${slug}`} key={slug}><span>{article.category}</span><h3>{article.title}</h3><p>{article.dek}</p><b>Read note ↗</b></Link>)}</div>
      </section>

     <section className="contact-section" id="contact">
  <div className="shell contact-grid">
    <div>
      <p className="eyebrow">
        Founder-led risk review
      </p>

      <h2>
        Bring one policy.
        <br />
        Leave with sharper questions.
      </h2>

      <p>
        A focused conversation about one operating
        scenario, one policy and the gap between them.
      </p>
    </div>

    <ContactForm />
  </div>
</section>
    </>
  );
}
