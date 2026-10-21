# Validation — React release 11

Checked locally in the Codex in-app browser, completed 21 October 2026.

## Build and files

- Production build passes: 80 modules transformed.
- JavaScript: 294.1 KB / 88.7 KB gzip. CSS: 123.3 KB / 24.4 KB gzip. Media are separate resources.
- All 65 generated deployment files returned HTTP 200 from the local production preview.
- Introduction remains the supplied approximately 27.3-second movie, encoded as H.264/AAC MP4 at 1080 × 720. Its player explicitly uses playbackRate 1.
- Actual publication pages, certificate scans, résumé, and supplied photographs remain included.

## Targeted release checks

- Updated layouts inspected at 320 × 740, 390 × 844, 768 × 1024, and 1366 × 768. No horizontal page overflow was observed in the checked views.
- Laptop is removed. The landscape tablet preview fits the desktop work view, with its bottom at approximately 700 px in a 768 px viewport.
- Project frame, selector container, selector buttons, and primary project action all report the shared 24 px outer radius. Nested screen corners follow the bezel inset; circular controls stay circular.
- Project switching updates the contribution, source/live link, tags, and matching preview. MeshFlow case study opens and closes correctly.
- The supplied MeshFlow video reached its playing state using the expected privacy-enhanced YouTube embed ID and custom controls. External live-site links are separate from playback.
- Phone menu opens, closes after selection, and lands on the selected section. Contact and Toolkit anchors were checked near 0 px section offset.
- Distant section links open directly instead of scrolling through the entire long page; nearby links retain a native smooth glide. Final hero → Contact navigation landed at approximately 0 px.
- Contact now occupies its own view on a tall tablet; its anchor was checked at approximately 0 px after the layout fix.
- Expanded landing copy and requested portrait are present. The next section does not peek into the opening 1366 × 768 viewport.
- Photo grid has four separate cards, all images load, and captions remain beneath the images. A photo dialog at 320 px had equal client/scroll width and a loaded full-size image.
- The earlier contact structure is restored with larger text, four profile cards, and supplied email/phone/WhatsApp/résumé links. Unconfigured portal links are hidden.
- Dark-mode toolkit is readable on a phone. The building-story background and text were checked in dark mode after fixing the light-text/pastel-background conflict.
- No captured console warnings/errors during final browser checks.

## Retained behavior checked in preceding iterations

The components below retain their prior implementation:

- Four-stage story advances with scrolling and reverses when scrolling up. Its scroll distance is shorter and moving-card backdrop blur is removed.
- Toolkit entrance resets offscreen and replays on return. Selecting technologies updates the central explanation; the phone composition retains surrounding icons.
- Five actual article leaves turn sequentially over a sixth page. Differing leaf angles and loaded images were inspected.
- Certificate filters and actual scans work. Both hackathon records are labeled participation.
- Introduction playback, pause, and dialog close were checked at normal 1× speed.
- Animation pause, reduced-motion handling, Escape/focus restoration, offscreen video pause, and the curated ai. guide remain implemented.

## Practical limits

- Viewport QA is not testing on physical Windows/Mac/Android/iOS devices or separate Safari/Firefox sessions. No numerical frame-rate benchmark was performed.
- The tablet is CSS artwork, not an imported 3D device or a physical iPad model.
- YouTube can show its title, branding, and related overlays even with native controls disabled. Custom controls sit below the full video frame. Optional local project MP4s provide branding-free playback.
- Project hosting, authentication, cold starts, and video availability depend on external services. Full-site/source links remain available.
- Exact job-portal URLs, optional project decks, and local project demo MP4s still need the owner's files or URLs. None were fabricated.
- The ai. guide gives curated answers and does not call a live AI service.

The source archive excludes installed dependencies and generated dist. The deployment archive contains dist contents with index.html at its root. Nothing was published.
