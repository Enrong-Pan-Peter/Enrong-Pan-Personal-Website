// Ring order, not filename order. One row per photo: file in /public,
// name = place (left of the ring), type = a fun caption (right), year right.
export const PROJECTS = [
  { file: "clock_tower.jpg", name: "Edinburgh", type: "walked the long way home", year: "2025" },
  { file: "sheep.jpg", name: "The Highlands", type: "the sheep were unbothered", year: "2025" },
  { file: "dome.jpg", name: "Old Town Rooftops", type: "homework due that night", year: "2025" },
  { file: "taxi.jpg", name: "Hong Kong", type: "where the Cantonese comes from", year: "2024" },
  { file: "lake.jpg", name: "Lake Ontario", type: "the sky showing off", year: "2026" },
  { file: "lighthouse.jpg", name: "Kingston Lighthouse", type: "numb fingers, no regrets", year: "2024" },
  { file: "tree.jpg", name: "Somewhere High", type: "mist doing its best work", year: "2024" },
  { file: "real_moon.jpg", name: "Blood Moon", type: "worth the neck ache", year: "2023" },
  { file: "cat_0.jpg", name: "A Window Seat", type: "not my cat, great taste", year: "2024" },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
