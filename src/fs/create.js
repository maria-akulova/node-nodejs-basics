import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { destinationFolder } from '../utils/workWithFiles.js';

const file = {
    name: 'fresh.txt',
    content: 'I am fresh and young',
    errorMessage: 'FS operation failed'
};

const create = async () => {
    const currDir = dirname(process.argv[1]);
    const filePath = join(currDir, destinationFolder, file.name);

    try {
        await writeFile(filePath, file.content, { flag: 'wx' });
    } catch {
        throw new Error(file.errorMessage);
    }
};

await create();