import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You had enough battery to screenshot my low battery warning and send it to three people, so I assume one of them is bringing a charger.";

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outputDir, "entry.txt")}`);
