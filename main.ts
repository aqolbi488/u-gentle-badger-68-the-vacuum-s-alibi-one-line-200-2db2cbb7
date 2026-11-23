// The Vacuum's Alibi — one line, at most 200 characters:
// the funniest excuse a robot vacuum can give for missing a spot.
// Deterministic: writes the exact same line on every run.
// No arguments, no network, no environment secrets, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My lidar mapped the spot, my schedule filed it under 'the dog's problem now,' and I docked on 4% battery. The crumb stays. We have an understanding.";

// Fail loudly rather than ever shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
