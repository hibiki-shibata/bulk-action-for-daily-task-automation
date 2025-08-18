import fs from 'node:fs' // or const fs = require('fs'); // if using CommonJS


export function fileReader(filePath: string): string {
    if (!fs.existsSync(filePath)) throw new Error(`❌File not found: ${filePath}`);    
    const rawData: string = fs.readFileSync(filePath, 'utf8')
    return rawData
}

