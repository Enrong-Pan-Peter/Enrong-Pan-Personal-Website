# enrongpan.com

Personal website — field-notes aesthetic on a clean academic structure (layout inspired by the Luka homepage template's content architecture, design from scratch).

Static site: `index.html` + `assets/`. Deploys on GitHub Pages (CNAME already set).

## Editing guide

- All content lives in `index.html` — captions, fun facts, and copy are plain text, edit freely.
- Handwritten red notes: elements with class `note` / `side-note`.
- Photos: originals in `photos/`, web-optimized copies in `assets/photos/` (max 1400px JPG). To add one: convert/resize, drop in `assets/photos/`, add a `<figure class="hang">` (wall) or `<figure class="polaroid">` (pets) block.
- Photo tilt: each figure sets `style="--r:-2deg"` — adjust per photo.
- CVs: two buttons — `assets/cv/Enrong_Pan_Resume.pdf` and `assets/cv/Enrong_Pan_Academic_CV.pdf`. The academic CV is currently a copy of the resume as a placeholder; replace it with the real one.
- Institution stamps: hand-drawn SVG circles in `index.html` (`.inst`). Swap for real logos by replacing the `<svg>` with an `<img class="inst">`.
- Colors/typography: `assets/css/style.css` `:root` block.
- Photo wheel: the actual [Viscose carousel](https://github.com/Yousuf-developer/Viscose-carousel) by Yousuf Soomro (MIT), customized with these photos/captions and embedded as a static export in `wheel/`. The customized source lives in `wheel-src/` — edit `wheel-src/components/ring/projects.js` (photos/captions) or `params.js` (tunables), then `npm install && npm run build` inside `wheel-src/` and copy `out/` over `wheel/`. Local customizations beyond photos: portrait 2:3 cards with contain-fit (no cropping), two-row side labels at smaller sizes, height-aware scaling (`fitHeight: 1`), an idle auto-turn every `autoDelay` seconds, and a "scroll · drag · click a card" hint that fades on first interaction. The bundled PP Neue Montreal font was removed and replaced with Satoshi (free license); the sample artwork images were removed.
- Boat loading screen: Three.js scene (vendored `assets/js/three.min.js`) inspired by a 3D loader by [@reijowrites](https://x.com/reijowrites/status/1993682958058717212), remodeled from scratch. Falls back to a flat SVG boat if WebGL/JS is unavailable.
- Local preview: the embedded wheel needs a server (browsers block its module files under `file://`). Run `python3 -m http.server` in this folder and open `http://localhost:8000`. On the published site it just works.
