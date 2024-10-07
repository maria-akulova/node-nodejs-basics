import { Worker } from 'node:worker_threads';
import { availableParallelism } from 'node:os';
import { dirname, join } from 'node:path';
import { destinationFile } from '../utils/workWithFiles.js';

const counter = 10;
const currDir = dirname(process.argv[1]);
const workerSrc = join(currDir, 'worker.js');

const initWorker = (initCounter) => new Promise((resolve) => {
    const worker = new Worker(workerSrc, { workerData: initCounter });
    worker.on('message', (data) => resolve({
        status: "resolved",
        data
    }));
    worker.on('error', (e) => resolve({
        status: "error",
        data: null
    }));
})

const performCalculations = async () => {
    const sizeOfPool = availableParallelism();
    const workerPool = Array.from({ length: sizeOfPool }, (_, i) => initWorker(counter + i));
    const result = await Promise.all(workerPool);
    console.log(result);
};

await performCalculations();