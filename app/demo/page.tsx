import {DeploymentConsole} from '@/components/deployment-console';
export const metadata={title:'Interactive deployment demo'};
export default function Demo(){return <div className="demo-page shell-wide"><div className="demo-intro"><div><p className="eyebrow">EXPLORE A SAMPLE ASSESSMENT</p><h1>Put the risk <em>in view.</em></h1></div><p>Choose a deployment. Run the review.<br/>Open a finding to see what sits behind it.</p></div><DeploymentConsole/></div>}
