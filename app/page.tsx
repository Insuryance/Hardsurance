import {FlipLabel} from '@/components/flip-label';
import Link from 'next/link';import {CareVideo} from '@/components/care-video';import {CoverageExplorer} from '@/components/coverage-explorer';import {DeploymentPricing} from '@/components/deployment-pricing';import {DeploymentConsole} from '@/components/deployment-console';import {ContactForm} from '@/components/contact-form';
export default function Home(){return <>
<section className="home-hero"><div className="hero-landscape"/><div className="shell hero-content"><p className="eyebrow light">ROBOTICS / PHYSICAL AI INSURANCE</p><h1>Insurance that gets<br/><em>robots deployed.</em></h1><p className="hero-description">Your robot is ready for work. Give your customer a clear answer to who pays when something goes wrong.</p><div className="actions">
  <Link
    className="button ivory"
    href="#contact"
    aria-label="Discuss your deployment"
  >
    <FlipLabel>Discuss your deployment</FlipLabel>
    <span aria-hidden="true">↗</span>
  </Link>

  <Link
    className="hero-link"
    href="/demo"
    aria-label="Explore the platform"
  >
    <FlipLabel>Explore the platform</FlipLabel>
    <span aria-hidden="true">↗</span>
  </Link>
</div></section>
<div className="scope-strip"><div className="shell"><span>THE WORK IS AUTONOMOUS.</span><b>The responsibility is real.</b><span>PEOPLE <i>·</i> PROPERTY <i>·</i> PHYSICAL AI</span></div></div>
<section className="section shell problem-section"><div><p className="eyebrow">THE DEAL BEFORE THE DEPLOYMENT</p><h2>A working robot.<br/><em>A stalled deal.</em></h2></div><div><p className="large-copy">The customer is ready. Procurement asks who pays if the robot injures someone, damages equipment or is hacked.</p><p>A standard policy can leave the autonomous task unclear. We start by reading that wording against the work your robot will actually do.</p><Link className="text-link" href="/product">See the coverage areas <span>↗</span></Link></div></section>
<CoverageExplorer/><DeploymentPricing/>
<section className="section platform-section"><div className="shell"><div className="section-intro centered"><p className="eyebrow">DEPLOYMENT INTELLIGENCE</p><h2>See the risk.<br/><em>Follow the evidence.</em></h2><p>One view of the robot, the policy and the site. Explore a sample assessment, then bring us your own deployment.</p></div><DeploymentConsole compact/></div></section>
<section className="section shell audiences-section"><div className="section-intro centered"><p className="eyebrow">FROM FIRST PILOT TO A WORKING FLEET</p><h2>For the teams<br/><em>putting robots to work.</em></h2></div><div className="audience-grid"><article><div className="audience-video"><CareVideo src="/films/robot-chess.mp4" label="Robot arm in operation"/></div><div><span className="eyebrow">ROBOTICS COMPANIES</span><h3>Get through procurement.</h3><p>Match the policy to the task your customer is buying.</p><Link className="text-link" href="/startups">For robot makers <span>↗</span></Link></div></article><article><div className="audience-video"><CareVideo src="/films/data-center.mp4" label="Customer data-centre equipment"/></div><div><span className="eyebrow">OPERATORS & DEPLOYERS</span><h3>Put the whole site in view.</h3><p>Review the robots, people and equipment at each location.</p><Link className="text-link" href="/enterprise">For fleet operators <span>↗</span></Link></div></article></div><div className="focus-note"><span className="live-dot"/>Starting with robot arms and inspection fleets. Building toward broader physical AI.</div></section>
<section className="section film-section"><div className="shell"><div className="section-intro centered"><p className="eyebrow">THE HARDWARE STORY</p><h2>Hardware moved forward.<br/><em>Insurance should follow.</em></h2></div><CareVideo featured autoPlay src="/films/hardsurance-stone-to-station.mp4" label="The evolution of hardware"/></div></section>
<section className="section contact-section" id="contact"><div className="shell contact-layout"><div><p className="eyebrow">START WITH YOUR DEPLOYMENT</p><h2>What are you<br/><em>putting to work?</em></h2><p>Tell us about the robot and the site. The first safety and security assessment is free.</p><a className="text-link" href="mailto:contact@hardsurance.com">contact@hardsurance.com <span>↗</span></a><div className="contact-checks"><span>01 / Policy-gap review</span><span>02 / Site & fleet assessment</span><span>03 / Deployment-specific terms</span></div></div><ContactForm/></div></section>
</>}
