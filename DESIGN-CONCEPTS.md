# enrongpan.com — design concepts

Three directions blending "math-as-art / generative" + "warm analog", built around a one-long-scroll structure and travel photography. Mockups shown in Cowork session, 2026-07-14.

## Shared principles (any concept)

- Voice: first person, curious, lightly funny. Never "Hi, I'm X 👋 I build things for the web."
- Kill the dev-portfolio tropes: no skills-logo grid, no typing-cursor animation, no dark-mode toggle as a feature, no "About / Projects / Contact" navbar as the identity.
- Fun facts are *scattered*, never a bulleted list. They interrupt the page the way personality interrupts a conversation.
- Projects described by what they do for a human ("an AI that reads your shampoo bottle"), tech stack demoted to small mono footnotes.
- One accent color used fearlessly; everything else restrained.
- Photos treated as physical objects (taped, pinned, or mailed) — not a CSS grid gallery.
- Real generative code on the page, but small and purposeful — one living sketch beats ten particle backgrounds.
- Performance: hand-rolled canvas/SVG, no heavy frameworks needed; static site works fine for GitHub Pages + CNAME.

## Concept A — "Field notes on artificial minds" (analog 70 / generative 30)

- Metaphor: a naturalist's notebook where the specimens are algorithms.
- Palette: paper `#f3edde`, ink `#211e15`, annotation red `#bf4126`, faded olive `#6b6350`.
- Type: Fraunces (display + body serif), mono for labels (IBM Plex Mono), Caveat for handwritten marginalia.
- Structure (one scroll): masthead → research as dated journal entries with live "fig." sketches (canvas L-system/program tree that grows slowly) → projects as numbered experiments with rubber stamps (SHIPPED / WORKS / HACKATHON) → travel photos as taped plates with coordinates → marginalia fun facts throughout → correspondence footer.
- Signature interactions: figures literally keep growing while you read; stamps thunk in on scroll; margin notes are hand-rotated.
- Risk: needs disciplined art direction or it drifts twee. Photos must be well curated.

## Concept B — "Fitness landscape" (generative 70 / analog 30)

- Metaphor: the site is a live evolutionary search; visitor scroll advances generations.
- Palette: near-black `#0f120f`, bone `#e9e5d8`, phosphor `#5dcaa5`, amber `#efa22b`, contour `#2e3a30`.
- Type: Space Grotesk (display), IBM Plex Mono (labels/HUD), Caveat only on polaroid captions.
- Structure: hero = topographic contours with a dot population climbing peaks, generation counter ticking with scroll → sections as "peaks" (research 01/02, builds, teaching) with altitude labels → travel photos as warm polaroids pinned to the dark ("field evidence") → contact as "send coordinates".
- Signature interactions: real hill-climbing/GA running in canvas; counter tied to scroll depth; hovering a polaroid reveals a specimen-tag fun fact.
- Risk: dark + mono can read cold; the polaroids are load-bearing warmth. Most technically demanding.

## Concept C — "The grand tour" (50/50, travel spine)

- Metaphor: life as an itinerary — Kingston → Edinburgh → latent space. Pun on the grand-tour method for viewing high-dimensional data (keep the footnote).
- Palette: paper `#f6f1e5`, cobalt `#1f3dae`, stamp coral `#d85a30`, ink `#22242c`.
- Type: Fraunces (big cobalt display), IBM Plex Mono (tickets/labels), Caveat (postcard backs).
- Structure: airmail-striped borders → hero with boarding-pass header + generative postage stamp → itinerary strip = life chapters → research & projects as customs-stamped entries per stop → photos as flippable postcards (front photo, back handwritten fun fact addressed "to whoever's curious") → footer as final stamp.
- Signature interactions: route line drawn live by a pathfinding algorithm as you scroll; postcards flip on click; each stamp is a tiny generative artwork (different seed per page load).
- Risk: strong theme — every future section must fit the travel metaphor.

## Recommendation

C is the most "him" on paper (travel photos become the spine, not decoration) and the friendliest to recruiters; A is the most timeless; B is the most impressive demo of the research itself. A hybrid also works: C's structure with A's marginalia system.

## Next steps

1. Pick a concept (or hybrid) and lock palette/type.
2. Curate 6–10 travel photos + write 8–12 fun facts in your own voice.
3. Draft copy for each scroll section (short — the design carries it).
4. Build static HTML/CSS/JS (GitHub Pages-ready, CNAME already set for enrongpan.com), mobile pass, then the generative touches last.
