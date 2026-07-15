# enrongpan.com

Personal website — field-notes aesthetic on a clean academic structure (layout inspired by the Luka homepage template's content architecture, design from scratch).

Static site: `index.html` + `assets/`. Deploys on GitHub Pages (CNAME already set).

## Editing guide

- All content lives in `index.html` — captions, fun facts, and copy are plain text, edit freely.
- Handwritten red notes: elements with class `note` / `side-note`.
- Photos: originals in `photos/`, web-optimized copies in `assets/photos/` (max 1400px JPG). To add one: convert/resize, drop in `assets/photos/`, add a `<figure class="hang">` (wall) or `<figure class="polaroid">` (pets) block.
- Photo tilt: each figure sets `style="--r:-2deg"` — adjust per photo.
- CV: replace `assets/cv/Enrong_Pan_CV.pdf` (currently the resume from July 2026).
- Institution stamps: hand-drawn SVG circles in `index.html` (`.inst`). Swap for real logos by replacing the `<svg>` with an `<img class="inst">`.
- Colors/typography: `assets/css/style.css` `:root` block.
