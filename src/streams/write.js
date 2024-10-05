import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

import { join, dirname } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const write = async () => {
    const fileToHash = 'fileToWrite.txt';
    try {
        const currDir = dirname(process.argv[1]);
        const src = join(currDir, destinationFolder, fileToHash);

        const write = createWriteStream(src);
        stdin.pipe(write)
    } catch {
        throw new Error(errorMessage);
    }
};

await write();