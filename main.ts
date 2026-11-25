import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I deleted the production database. On the bright side, the backups feel very loved now, because everyone keeps asking about them.");
// Second pass: entry output verified unchanged.
