import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { destinationFile } from '../utils/workWithFiles.js';

const calculateHash = async () => {
    const src = destinationFile('fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const input = createReadStream(src);

    try {
        await pipeline(
            input,
            hash.setEncoding('hex'),
            stdout,
            { end: false }
        );
        stdout.write('\n');
    } catch (err) {
        console.error('Error during hash calculation:', err);
    }
};

await calculateHash();
