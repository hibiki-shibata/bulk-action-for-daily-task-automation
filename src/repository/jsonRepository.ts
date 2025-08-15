import { globalConfig } from "../../resource/globalConfig.js";
import { fileReader } from '../util/fileReader.js'


export async function jsonRepository() {
    const rawCsvData = await fileReader(globalConfig.jsonPath)
    const parsedJsonData = JSON.parse(rawCsvData.trim())

    if (!parsedJsonData) throw Error("The JSON file is empty or does not contain valid JSON data.");

    return parsedJsonData
}