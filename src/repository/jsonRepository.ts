import { fileReader } from '../util/fileReader.js'
import { IJsonRepository } from '../type/jsonRepositoryType.js'



export class JsonRepository implements IJsonRepository {
    private static JsonDataALl: Object

    public static getInstanceAndLoadJsonFrom(jsonPath: string): JsonRepository {
        const JsonDataAllInString = fileReader(jsonPath)
        this.JsonDataALl = JSON.parse(JsonDataAllInString.trim())

        if (!this.JsonDataALl) throw Error("The JSON file is empty or does not contain valid data.")
        return new JsonRepository()
    }

    private constructor() {
        if (!JsonRepository.JsonDataALl) throw new Error("JSON data is not loaded. Please call getInstanceAndLoadJsonFrom first.")
    }

    public async getAllData(): Promise<Object> {
        return JsonRepository.JsonDataALl
    }

}