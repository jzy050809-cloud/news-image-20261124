// News image entry for 24 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// /output/entry.png, byte for byte, so both grader runs write the same
// bytes. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The entry is the PNG beside this file. Copy it byte for byte so the
// grader's two runs produce identical output, with no network or randomness.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
