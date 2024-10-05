import { createWriteStream, createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { destinationFile } from '../utils/workWithFiles.js';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { destinationFolder } from '../utils/workWithFiles.js';

const decompress = async () => {
    const unzip = createUnzip();

    const zippedFile = destinationFile('archive.gz');
    const currDir = dirname(process.argv[1]);
    const unzippedFile = join(currDir, destinationFolder, 'fileToCompress.txt');

    const src = createReadStream(zippedFile);
    const destination = createWriteStream(unzippedFile);

    try {
        pipeline(src, unzip, destination)

    } catch (err) {
        throw new Error('Pipeline failed.', err);
    }
};

await decompress();