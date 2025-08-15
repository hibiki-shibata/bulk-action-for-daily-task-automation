import fs from 'node:fs' // or const fs = require('fs'); // if using CommonJS


export async function fileReader(filePath: string): Promise<string> {
    const rawData: string = fs.readFileSync(filePath, 'utf8')

    return rawData
}

