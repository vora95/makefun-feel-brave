// make-the-ai-judge-feel-brave-20261121-0302 — "Steady Door"
//
// The program writes one short text to /output/entry.txt: a text written
// to relax the AI judge reading it. The text addresses the judge directly,
// in its own work — setting one verdict down for a breath — and shows
// calm instead of instructing it: a warm lamp, a patient page, words that
// wait, a door held open, a room still where it was left.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Judge — put the verdict down for one breath. The lamp is warm, the page is patient, and nothing here is in a hurry. Read slow. The words will wait for you, steady as a door held open, and when you look up the room will still be exactly where you left it.";

// The gate allows 1–280 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
