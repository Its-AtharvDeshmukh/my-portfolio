# Atharv Studio — React release 19

A local React portfolio with supplied personal media, projects, certificates, research, experience, and contact links.

## Code

- `src/App.jsx`: content, React components, hooks, interactions, and SVG icons.
- `src/index.css`: visual tokens, layouts, responsive behavior, and animation.
- `src/main.jsx`: React entry point.
- `src/assets/`: included photographs, introduction, résumé, paper, certificate scans, logos, and icons.

Keep the asset folder with the code. This is a React + Vite app; it does not need SSR, API keys, or a portfolio backend.

## Run

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/`. The deployment ZIP contains index.html at its root. For a Vite deployment, use `npm run build` and output directory `dist`. Relative asset paths support subdirectory hosting. Nothing has been published by this task.

## Page order

Introduction → selected projects → how I build → toolkit → AI practice → research → credentials → experience and education → photographs → contact.

## Current behavior

- The opening combines a concise identity with a portrait studio: Meet me, My builds, and AI practice. The project choices open real case studies. The work and résumé actions stay prominent, including on phones. The supplied introduction remains at normal 1× speed.
- Full-width glass navigation is restored. The phone menu, appearance switch, and curated ai. guide remain.
- A horizontally scrollable project selector sits immediately above the selected project's description. The landscape tablet stays stationary while its screen content makes a directional app-style entrance.
- HealthOrbit's original mark uses a fixed teal center with a coral outer ring rotating anticlockwise and a teal inner ring rotating clockwise. The supplied Roavista logo appears inside the tablet header. TravelBharat can use an optional supplied logo later.
- Videos keep their complete 16:9 frame. The tablet uses a light control strip; there is no duplicate bottom-left play triangle. Project websites open separately at normal browser size.
- How I build is a four-step journey with focused explanations, project examples, and a code editor that updates to a question, interface sketch, connections, or refinement checklist. The illustration has restrained spring-based pointer movement. No long pinned scroll scene is used.
- The approved interactive toolkit is preserved. AI practice offers image, video, audio, and model/API views, including the supplied generated image and 10-second video. OpenAI API and Gemini API are explicit; additional tools are described without inventing expertise ratings.
- Research leads with the actual paper title and a source-grounded explanation of its contribution. Actual article page numbers (98–103) sit above larger preview pages; each next image is decoded before turning without a surrounding square panel. It turns automatically every 6.5 seconds while in view, with pause/resume and manual page controls. Manual selection pauses automatic turns. A separate reader provides zoom, scrolling, page labels, and the complete PDF link.
- Certificates retain their working gallery. Photo cards have reserved media geometry, remain visible without a reveal observer, and open full-size. Contact keeps the requested wording, with a theme-aware studio palette and supplied social/contact URLs.
- A flowing contour background is unique to the selected-work/tablet section. Four signals follow its curves. Fixed artwork geometry prevents the background from rescaling when More things I’ve built expands. A soft fade and slight blur introduce the lines alongside the section colour. Circular portrait accents and short code add detail around the image; subtle background arrivals replay with section entry. Outer panels use a shared 24 px radius. Nested tablet screen corners follow the bezel; round icon controls and paper sheets use appropriate geometry.
- Entry animations replay as sections return to view. Continuous decorative motion pauses offscreen; the footer pause control and system reduced-motion preference disable motion. Scrollbars are hidden while scrolling remains available.

The ai. guide and prompt examples are browser-local, curated content. They do not call a live AI model. Media playback begins through user action. Your personal introduction is approximately 27.3 seconds at 1× speed.

See `ASSET-GUIDE.md`, `SOURCES.md`, and `VALIDATION.md` for exact filenames, provenance, checks, and limits.

Release 19 changes only the requested process section, animated circuit behind the opening, soft work-background exit, and AI video controls. The AI video has centre playback and a compact volume overlay; no separate playback strip takes up layout space.
