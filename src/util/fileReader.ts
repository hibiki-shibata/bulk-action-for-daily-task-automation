import fs from 'node:fs' // or const fs = require('fs'); // if using CommonJS


export function fileReader(filePath: string): string {
    const rawData: string = fs.readFileSync(filePath, 'utf8')
    return rawData
}

