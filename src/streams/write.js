import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';


import { destinationFile } from '../utils/workWithFiles.js';

const write = async () => {
    const src = destinationFile('fileToWrite.txt');
    const write = createWriteStream(src);
    await pipeline(
        stdin,
        write
    );
};

await write();