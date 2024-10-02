import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const list = async () => {
    const currDir = dirname(process.argv[1]);
    const src = join(currDir, destinationFolder);
    try {
        const files = await readdir(src);
        console.log(files);

    } catch {
        throw new Error(errorMessage);
    }
};

await list();