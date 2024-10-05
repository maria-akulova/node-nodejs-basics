import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';
import { finished } from 'node:stream/promises';

import { join, dirname } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const calculateHash = async () => {
    const fileToHash = 'fileToCalculateHashFor.txt';
    try {
        const currDir = dirname(process.argv[1]);
        const src = join(currDir, destinationFolder, fileToHash);
        const hash = createHash('sha256');
        const input = createReadStream(src);
        input.pipe(hash).setEncoding('hex').pipe(stdout);

        await finished(input).catch(console.error);
        input.resume();
    } catch {
        throw new Error(errorMessage);
    }
};

await calculateHash();