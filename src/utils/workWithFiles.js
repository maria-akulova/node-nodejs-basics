import { fileURLToPath, URL } from 'url';
import { dirname, join } from 'path';

export const currDir = (currURL) => dirname(new URL(currURL).pathname);

export const destinationFolder = 'files';

export const destinationFolderPath = (currURL) => join(dirname(new URL(currURL).pathname), destinationFolder);

