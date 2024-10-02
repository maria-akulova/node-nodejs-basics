import { promises as fs } from 'fs';
import path from 'path';
import { destinationFolderPath } from '../utils/workWithFiles.js';

const file = {
    name: 'fresh.txt',
    content: 'I am fresh and young',
    errorMessage: 'FS operation failed'
};

const create = async () => {
    const folderPath = destinationFolderPath(import.meta.url);
    const filePath = path.join(folderPath, file.name);

    try {
        await fs.writeFile(filePath, file.content, { flag: 'wx' });
    } catch {
        throw new Error(file.errorMessage);
    }
};

await create();