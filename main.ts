// Writes the production database apology to entry.txt for the make.fun run.
// The database is gone, but at least the backups are getting attention.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const apologyText =
  "I deleted the production database. On the bright side, the backups feel very loved now, because everyone keeps asking about them.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), apologyText);
console.log("apology written to " + join(out, "entry.txt"));
