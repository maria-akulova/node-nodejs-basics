import { cp } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const copy = async () => {
    const currDir = dirname(process.argv[1]);
    const src = join(currDir, destinationFolder);
    const dest = join(currDir, 'files_copy');

    try {
        await cp(src, dest, { force: false, errorOnExist: true, recursive: true })
    } catch {
        throw new Error(errorMessage);
    }
};

await copy();
