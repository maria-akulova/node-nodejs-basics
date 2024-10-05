import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

import { destinationFile } from '../utils/workWithFiles.js';

const write = async () => {
    const src = destinationFile('fileToWrite.txt');
    const write = createWriteStream(src);
    stdin.pipe(write);
};

await write();