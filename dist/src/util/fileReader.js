import fs from 'node:fs'; // or const fs = require('fs'); // if using CommonJS
export async function fileReader(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    return rawData;
}
//# sourceMappingURL=fileReader.js.map