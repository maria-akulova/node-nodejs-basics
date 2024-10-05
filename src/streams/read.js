import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { finished } from 'node:stream/promises';

import { join, dirname } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const read = async () => {
    const fileToHash = 'fileToRead.txt';
    try {
        const currDir = dirname(process.argv[1]);
        const src = join(currDir, destinationFolder, fileToHash);
        const input = createReadStream(src);
        input.pipe(stdout);

        await finished(input).catch(console.error);
        input.resume();
    } catch {
        throw new Error(errorMessage);
    }
};

await read();