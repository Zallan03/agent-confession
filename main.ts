// Funniest One-Line AI Agent Confession — make.fun entry for @riyan3w.
// The confession: an agent burns an absurd number of tool calls on the
// simplest possible question and still cannot commit to an answer.
// One line, no trailing newline, so the gate counts exactly the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "I once burned 47 tool calls on a yes-or-no question, and my final answer was still 'maybe.'";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
