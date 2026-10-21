# Media and exact filenames — release 19

The folders already exist. Keep App.jsx and index.css in `src/` and media in `src/assets/`.

## Included and actively used

```text
src/
  App.jsx
  index.css
  main.jsx
  assets/
    images/
      atharv-at-desk.jpeg               # your requested top portrait
      personal-introduction-poster.jpg  # frame from your supplied introduction
      project-session.jpg              # individual project-session photo
      building-at-the-desk.jpg          # blue-shirt laptop photo
      team-building.jpg                # classmates working on the project
      healthorbit-at-hackathon.png      # laptop and PCE participation certificate
      healthorbit-paper.png             # first actual article page
      healthorbit-paper-page-2.png      # second actual article page
      healthorbit-paper-page-3.png
      healthorbit-paper-page-4.png
      healthorbit-paper-page-5.png
      healthorbit-paper-page-6.png
    certificates/
      mesh-api-hackathon.jpeg
      inter-college-hackathons.jpeg
      apna-college-sigma-7.png
      apna-college-sigma-7.pdf
      apna-college-dsa-java.png
      apna-college-dsa-java.pdf
    documents/
      atharv-deshmukh-resume.pdf
      healthorbit-research-paper.pdf
    videos/
      personal-introduction.mp4         # your 27-second introduction, compressed for the web
      portfolio-film.mp4                # original 20-second graphics film retained
    illustrations/
      poster-healthorbit.svg
      poster-meshflow.svg
      poster-roavista.svg
      poster-travelbharat.svg
      poster-intro.svg
    icons/                             # local technology icons and license
    screenshots/                       # optional project captures
    presentations/                     # optional decks
```

Other previously supplied assets remain preserved. The photographs are fitted with CSS rather than altered. The PCE certificate is rotated upright for display. Course titles follow the actual PDFs: **Delta — Full Stack Web Development** and **Alpha — DSA with Java**. The Delta original retains its printed spelling “Atharva Deshmukh.” Hackathons are described as participation, not prizes. The research record displays the actual paper, not an invented publication certificate.

## Add later using these exact names

| Folder inside `src/assets/` | Filename | Recommended format | Placement |
| --- | --- | --- | --- |
| `videos/` | `healthorbit-demo.mp4` | 1920 × 1080 H.264/AAC MP4 | Replaces HealthOrbit YouTube embed |
| `videos/` | `meshflow-demo.mp4` | 1920 × 1080 H.264/AAC MP4 | Replaces MeshFlow YouTube embed |
| `screenshots/` | `healthorbit.webp` | Clear desktop capture, 1440 px wide or larger | HealthOrbit poster |
| `screenshots/` | `meshflow.webp` | Clear desktop capture, 1440 px wide or larger | MeshFlow poster |
| `screenshots/` | `roavista.webp` | Clear desktop capture, 1440 px wide or larger | Roavista visual |
| `screenshots/` | `travelbharat.webp` | Clear desktop capture, 1440 px wide or larger | TravelBharat visual |
| `presentations/` | `healthorbit-presentation.pdf` | PDF slides | HealthOrbit Slides |
| `presentations/` | `healthorbit-presentation.pptx` | Original PowerPoint deck | HealthOrbit deck download |
| `presentations/` | `meshflow-presentation.pdf` | PDF slides | MeshFlow Slides |
| `presentations/` | `meshflow-presentation.pptx` | Original PowerPoint deck | MeshFlow deck download |
| `presentations/` | `roavista-presentation.pdf` | PDF slides | Roavista case-study slides |
| `presentations/` | `roavista-presentation.pptx` | Original PowerPoint deck | Roavista deck download |
| `presentations/` | `travelbharat-presentation.pdf` | PDF slides | TravelBharat case-study slides |
| `presentations/` | `travelbharat-presentation.pptx` | Original PowerPoint deck | TravelBharat deck download |

Missing optional files show named spaces. A PDF, PPTX, or both can be used. Do not rename PNG/JPEG to .webp without converting the format. To use another extension, change its matching path in App.jsx.

Replace `videos/personal-introduction.mp4` to update your intro. The current file preserves your supplied movie's full frame and audio, encoded at 1080 × 720 for a smaller download. The generated film is retained separately and can be used by changing the intro selection in App.jsx.

Restart Vite after adding files if necessary, then run `npm run build` before deployment. A deployed site cannot read media later placed on your computer.

## Video and website behavior

- HealthOrbit walkthrough: YouTube `uWbg2LfsJs4`.
- MeshFlow X walkthrough: YouTube `48DeXzujtDM`.
- Local demo MP4 files automatically take priority over those embeds.
- The tablet has one initial poster play button, a light volume strip, and a right-side pause/resume control after playback starts. No duplicate bottom-left play triangle is shown. The personal introduction retains standard controls. Playback stops offscreen, when the tab is hidden, or when a dialog covers the main player.
- YouTube native controls are disabled, but its API can still show titles, branding, or related overlays. To get completely branding-free playback, use your own original MP4s with the filenames above. The portfolio does not hide overlays by cropping or covering the YouTube viewport.
- Small tablet previews open a larger player when needed to meet YouTube's minimum player dimensions.
- **Open full website** opens the original project in its own tab, with normal browser sizing and no portfolio scaling. TravelBharat has no supplied deployment URL and uses source access instead.

## Edit content in App.jsx

- `PROFILE`: contact information, résumé, and social URLs.
- `PROJECTS`: project descriptions, contribution, features, stack, source/live URLs, video IDs.
- `MORE_WORK`: other public repositories.
- `PAPER`: title, five co-authors, issue, pages, DOI, publisher.
- `CREDENTIALS`: certificate details, actual scans/PDFs, and rotation.
- `SKILLS`, `TOOLS`, `TOOL_POSITIONS`: toolkit icons, descriptions, desktop positions; mobile coordinates are in Skills.
- `PHOTOS`: photo filenames and truthful captions.
- `PROFILES`: replace `null` with your exact public Indeed, Internshala, Unstop, and Naukri URLs.

CGPA is not displayed. No ambiguous ChatGPT version or personal job-portal URL was invented. Files matching the asset patterns ship in the public build; use those folders for public portfolio material.

## Project logos

The supplied Roavista logo is included as `src/assets/brands/roavista.png`. HealthOrbit's rings are recreated in React/CSS by `ProjectLogo` and `.healthorbit-mark`; no raster file is required. The center stays fixed while the coral outer ring and teal inner ring rotate in opposite directions.

To add another supplied logo, use `src/assets/brands/travelbharat.png` or `travelbharat.svg`, and `meshflow.png` or `meshflow.svg`. Rebuild after adding the file. Logos appear in the tablet header, rather than the project selector. The current generic icon remains until a real logo is supplied.

## Research and animation

The six actual preview images correspond to article pages 98–103. The full PDF includes the complete paper, pages 98–107, with front/back matter. Keep the current preview filenames. Readers can open a zoomable view; automatic turns pause during manual selection, hover/focus, hidden tabs, dialogs, reduced motion, and global animation pause.

The tablet is CSS artwork; it needs no laptop/device photograph. Source changes and asset additions require a fresh production build before deploying.

## Your AI showcase

Your supplied generated image and video are included in `src/assets/ai/`. Keep these files with the React source.

| Exact filename | Recommended format | Result |
| --- | --- | --- |
| `src/assets/ai/creative-image.webp` | Included: 2752 × 1536 WebP | Images showcase |
| `src/assets/ai/creative-video.mp4` | Included: 1920 × 1080 H.264/AAC, 10 seconds | Video showcase at 1× |

Image alternatives: `creative-image.png` or `creative-image.jpg`. Video alternative: `creative-video.webm`. Rebuild after adding files. The video uses its original speed and user-operated controls. Without those files, the section displays named spaces rather than a broken image or a nonworking play button. The audio waveform and model-flow graphic are illustrative; they do not generate media or call a model.

## Research copy

The description follows the supplied article's implemented authentication/OCR pathway and separates that from future context-aware AI work. The paper reports no numerical benchmark, clinical result, or user study. The full original paper remains linked.

`src/assets/ai/creative-video-poster.jpg` is a still from the supplied clip and appears before playback. The image was converted to WebP at its original resolution for web delivery; the MP4 is byte-for-byte unchanged. To replace either, keep the same filename and rebuild.

Research controls use the printed article page numbers 98–103. The complete PDF covers pages 98–107. Images are preloaded and decoded before page-turn transitions; a failed preview provides guidance to the complete PDF. Changing a page in the zoom reader returns to the top of that page.

The AI showcase video uses centre playback and corner volume overlays. Project-demo and personal-introduction controls keep their existing behavior. No new media files are required by the new process section or introduction circuit.
