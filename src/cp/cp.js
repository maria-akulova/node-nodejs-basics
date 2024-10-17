import { destinationFile } from '../utils/workWithFiles.js';
import { fork } from 'node:child_process';

const src = destinationFile('script.js');

const spawnChildProcess = async (args) => {
    const child = fork(src, args);
    child.on('error', (err) => {
        throw new Error(err);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--some-arg', 'value1', '--other', 1337]);
