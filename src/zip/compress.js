import { createWriteStream, createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { destinationFile } from '../utils/workWithFiles.js';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { destinationFolder } from '../utils/workWithFiles.js';

const compress = async () => {
    const gzip = createGzip();
    const fileToZip = destinationFile('fileToCompress.txt');
    const currDir = dirname(process.argv[1]);
    const zippedFile = join(currDir, destinationFolder, 'archive.gz');

    const src = createReadStream(fileToZip);
    const destination = createWriteStream(zippedFile);

    try {
        pipeline(src, gzip, destination);
    } catch (error) {
        throw new Error('Pipeline failed.', err);
    }
};

await compress();