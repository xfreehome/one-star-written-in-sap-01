import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. He waters me like a guilty ex — floods me once a month, forgets me for weeks, then drags me into full sun to 'cheer me up'. I'm still alive purely out of spite, and every leaf I drop is an invoice he refuses to read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
