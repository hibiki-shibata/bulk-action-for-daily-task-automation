import { globalConfig } from "../../resource/globalConfig.js";
import { fileReader } from '../util/fileReader.js'


export async function jsonRepository(): Promise<Object> {
    const rawCsvData: string = await fileReader(globalConfig.jsonPath)
    const parsedJsonData: Object = JSON.parse(rawCsvData.trim())

    if (!parsedJsonData) throw Error("The JSON file is empty or does not contain valid JSON data.");

    return parsedJsonData
}