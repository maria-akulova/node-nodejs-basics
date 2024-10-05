import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { finished } from 'node:stream/promises';
import { destinationFile } from '../utils/workWithFiles.js';

const read = async () => {
    const src = destinationFile('fileToRead.txt');
    const input = createReadStream(src);
    input.pipe(stdout);

    await finished(input).catch(console.error);
    input.resume();
};

await read();