import { promises as fs } from 'fs';
import path from 'path';
import { URL } from 'url';

const file = {
    name: 'fresh.txt',
    parentFolder: 'files',
    content: 'I am fresh and young',
    errorMessage: 'FS operation failed'
};

const create = async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const folderPath = path.join(__dirname, file.parentFolder);
    const filePath = path.join(folderPath, file.name);

    try {
        await fs.writeFile(filePath, file.content, { flag: 'wx' });
    } catch {
        throw new Error(file.errorMessage);
    }
};

await create();