import { stdout, stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const reverseText = new Transform({
    transform(chank, _, cb) {
        const input = chank.toString().trim();
        const reversed = input.split('').reverse().join('');
        cb(null, reversed + '\n');
    },
});

const transform = async () => {
    try {
        await pipeline(stdin, reverseText, stdout);
        reverseText.destroy();
    } catch (err) {
        throw new Error('Pipeline failed.', err);
    }
};

await transform();