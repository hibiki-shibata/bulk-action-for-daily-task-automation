import fs from 'fs';

export async function fileReader(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf8')
    return rawData
}

