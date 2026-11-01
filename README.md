# Hardsurance — Robotics & Physical AI

Complete Next.js website, including all project files, the original hardware media and the revised deployment-intelligence demo.

## Upload to your existing GitHub repository

1. Unzip Hardsurance-Robotics-Complete.zip.
2. Open the folder named Hardsurance-Website.
3. Open your existing GitHub repository at its top level on main.
4. Choose Add file > Upload files.
5. Select ALL files and folders INSIDE Hardsurance-Website and drag them into GitHub. Do not upload the ZIP or the outer Hardsurance-Website folder.
6. Commit the changes. The project has fewer than 100 files and can be uploaded in one batch. Each individual asset is below GitHub's browser upload size limit.
7. Let Vercel deploy the NEW commit. Check the commit number on the newest deployment. Do not redeploy an old deployment, which rebuilds its old source.

The root of GitHub must contain package.json, package-lock.json, next.config.ts, vercel.json, tsconfig.json, postcss.config.mjs, and the app, components, lib and public folders. Keep your existing repository; you do not need to delete it or start again. Old unused files may remain in an existing repository. They are not imported by the new site. Compatibility with the supplied repository was build-tested.

## Vercel

- Framework: Next.js.
- Root directory: repository root (leave empty).
- Build: npm run build.
- Install: npm ci.
- Output directory: use the framework default; disable custom overrides.
- Node: 22.x (declared in package.json).

vercel.json explicitly selects Next.js and the build/install commands. Once the newest build is Ready, open its Visit link. If it was created as a preview, promote that verified deployment to Production to assign your production domain.

## Local preview

Use Node 22. Install dependencies with npm ci, then run npm run dev. For a production check use npm run build and npm run start. The preview prepared in the working session uses port 3004.

## What changed

- Removed the branded hardware-care / AppleCare product and its demo. The legacy /care URL redirects to /product.
- Built the story around deployment insurance, the procurement blocker and the robot + site + operating evidence.
- Added the interactive “We price your deployment, not a form” section.
- Replaced the demo with Deployment Intelligence: Overview, Policy review, Site assessment and Submission.
- Added animated review playback, selectable findings, evidence and next steps, three fictional deployment scenarios, review checkboxes, editable site notes, a JSON brief download and an enquiry handoff.
- Added rolling-letter navigation with a moving highlight, keyboard focus support and reduced-motion handling.
- Updated Coverage, How it works, Platform, Company, Manifesto, audience pages, equipment pages, FAQs and field notes.
- Retained the original forest/ivory visual identity, mountain landscape, realistic policy imagery and seven non-care hardware videos. The historical film is retained.

## Functional scope

The website and demo are interactive front-end experiences. The demo uses fictional evidence; it does not connect to live robot telemetry, calculate an insurance premium or issue a policy. The optional policy-excerpt checker runs a small set of keywords locally in the browser, clearly labelled in the interface. It is not a live LLM or legal coverage opinion. Plain-text uploads are limited to 1 MB; the excerpt is limited to 12,000 characters.

The sample review download is a JSON file. The enquiry handoff includes the chosen sample deployment and a short summary, not pasted policy text. The form uses the original Formspree endpoint, https://formspree.io/f/xkoelqyb. The phone field is optional. No external test message was submitted during verification, so production email delivery has not been confirmed.

## Verification

- Production build passed in the complete standalone project.
- Production build passed with the new files overlaid on the supplied current repository.
- 21 content pages checked at 320, 360, 390, 768, 1024, 1440 and 1920 pixels: no page overflow, one main heading, no legacy care branding.
- All four demo views checked at four additional viewport sizes, with no page overflow.
- Playback and pause, scenario-specific findings, review marks, excerpt checking, site notes, evidence links, JSON download, same-page enquiry handoff, keyboard coverage tabs, environment switching and /care redirection verified.
- No browser console errors observed during the demo checks.
- Live GitHub/Vercel deployment was not changed by this work.

Private customer discussions, LOI details, fundraising information and the supplied application text are not included in this repository.
