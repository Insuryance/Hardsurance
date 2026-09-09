# Hardsurance

A clean, multi-page Next.js site for Hardsurance.

## Deploy on Vercel

1. Upload every file and folder in this repository to the root of the GitHub repository.
2. In Vercel, import that repository and select the **Next.js** framework preset.
3. Leave the Root Directory empty.
4. Leave the Output Directory empty. Do not set it to `dist`.
5. Use `npm run build` as the build command.
6. Deploy.

The contact form posts to Formspree at `https://formspree.io/f/xkoelqyb`.

## Local commands

```bash
npm install
npm run dev
npm run build
```

Node 22 is specified in `package.json` for consistent Vercel builds.
