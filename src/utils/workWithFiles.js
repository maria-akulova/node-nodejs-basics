import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const currDir = (metaURL) => dirname(fileURLToPath(metaURL));

export const destinationFolder = 'files';
export const errorMessage = 'FS operation failed';

export const destinationFolderPath = (metaURL) => join(dirname(fileURLToPath(metaURL)), destinationFolder);

