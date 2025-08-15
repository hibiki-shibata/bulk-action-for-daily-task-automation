import fs from 'node:fs' // or const fs = require('fs'); // if using CommonJS

export async function fileReader(filePath: string) {
    const rawData = fs.readFileSync(filePath, 'utf8')
    return rawData
}

