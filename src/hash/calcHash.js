import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';
import { finished } from 'node:stream/promises';

import { destinationFile } from '../utils/workWithFiles.js';

const calculateHash = async () => {
    const src = destinationFile('fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const input = createReadStream(src);
    input.pipe(hash).setEncoding('hex').pipe(stdout);

    await finished(input).catch(console.error);
    input.resume();
};

await calculateHash();