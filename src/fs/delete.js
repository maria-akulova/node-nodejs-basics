import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';

const deleteFile = 'fileToRemove.txt';

const remove = async () => {
    const currDir = dirname(process.argv[1]);
    const target = join(currDir, destinationFolder, deleteFile);
    try {
        await rm(target);
    } catch {
        throw new Error(errorMessage);
    }

};

await remove();