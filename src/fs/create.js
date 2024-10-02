import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { destinationFolderPath } from '../utils/workWithFiles.js';

const file = {
    name: 'fresh.txt',
    content: 'I am fresh and young',
    errorMessage: 'FS operation failed'
};

const create = async () => {
    const destinationFolder = destinationFolderPath(import.meta.url);
    const filePath = path.join(destinationFolder, file.name);

    try {
        await writeFile(filePath, file.content, { flag: 'wx' });
    } catch {
        throw new Error(file.errorMessage);
    }
};

await create();