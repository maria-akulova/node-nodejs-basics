import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { destinationFolder, errorMessage } from '../utils/workWithFiles.js';


const taskParams = {
    src: 'wrongFilename.txt',
    dist: 'properFilename.md',
}

const rename = async () => {
    const currDir = dirname(process.argv[1]);
    const src = join(currDir, destinationFolder, taskParams.src);
    const dist = join(currDir, destinationFolder, taskParams.dist);
    try {
        await fs.access(dist, fs.constants.F_OK);
        throw new Error(errorMessage);
    } catch (err) {
        if (err.code === 'ENOENT') {
            try {
                await fs.rename(src, dist);
            } catch {
                throw new Error(errorMessage);
            }
        } else {
            throw new Error(errorMessage);
        }
    }

};

await rename();