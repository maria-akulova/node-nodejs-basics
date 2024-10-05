import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'node:process';
import { destinationFile } from '../utils/workWithFiles.js';
import { pipeline } from 'node:stream/promises';

const read = async () => {
    const src = destinationFile('fileToRead.txt');
    try {
        await pipeline(
            createReadStream(src),
            stdout,
            { end: false }
        );
        console.log('\n');
    } catch (err) {
        console.error('Pipeline failed:', err);
    }
};

await read();
