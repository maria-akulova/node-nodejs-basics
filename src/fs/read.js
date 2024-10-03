import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const read = async () => {
    const currDir = dirname(process.argv[1]);
    const src = join(currDir, destinationFolder, 'fileToRead.txt');

    try {
        const content = await readFile(src, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error(errorMessage);
    }
};

await read();