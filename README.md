# Atharv Studio — React release 11

A React portfolio built around your projects, practical skills, published research, certificates, experience, and supplied photographs.

## Main files

- `src/App.jsx`: all content, React components, hooks, interactions, and line icons.
- `src/index.css`: the complete visual system, responsive layouts, and motion.
- `src/main.jsx`: starts React.

Keep `src/assets/` alongside the source files. This React + Vite app does not need SSR, a portfolio backend, or API keys.

## Run

Use Node.js 22.12 or newer:

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/`. The deploy ZIP has index.html at its root. For Netlify or Vercel, select Vite, build with `npm run build`, and use `dist` as the output directory. Asset paths support subdirectory hosting.

## Page order

Introduction → projects → building approach → toolkit → research → certificates → experience and education → photo gallery → contact.

## This release

- The laptop and its hinge animation are replaced by a simple landscape tablet frame. Project videos retain their full frame, with play/pause and volume controls below them.
- Four project selectors, clear contribution notes, project details, and separate full-site links replace the repeated walkthrough section. No live websites are scaled into tiny iframes.
- Your opening section includes your supplied desk portrait, a coding detail, recent project context, résumé access, and your actual introduction video at its original 1× speed.
- A full-width glass navigation bar supports desktop and phone menus. Normal scrolling works with scrollbars hidden.
- Main cards and controls share the 24 px corner token. The tablet's inset screen corners follow its bezel; circular icon controls remain circular.
- A shorter four-stage building scene, the preserved interactive toolkit, and replayable entry animations support the page. Animation pause and reduced-motion handling are included.
- Research keeps five turning article leaves over a sixth actual page. Certificates retain their existing layout.
- Photos use a regular two-column gallery with captions beneath the images. Every photo opens in a full-size view.
- The earlier contact layout is restored with larger text and four profile cards. Email, phone, WhatsApp, résumé, GitHub, LinkedIn, LeetCode, and Instagram use supplied links.
- Optional job-portal URLs remain editable in PROFILES. Unconfigured profiles are hidden from visitors.
- Dark-mode backgrounds and text colors are updated, including the animated building story.

The `ai.` guide offers curated portfolio answers; it does not call an AI service. No sound starts without opening or playing a video. Your personal introduction, publication, certificate scans, and photographs are included in the source archive.

See ASSET-GUIDE.md for exact filenames, SOURCES.md for provenance, and VALIDATION.md for checked behavior and practical limits.
