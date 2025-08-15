import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { JsonRepository } from '../repository/jsonRepository.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'
import { IJsonRepository } from '../type/jsonRepository.js'
import { globalConfigType } from '../type/globalConfType.js'


const config: globalConfigType = {
    requestUriPath: globalConfig.requestUriPath,
    requestMethod: globalConfig.requestMethod,
    csvPath: globalConfig.requestDataResourcePath.csvPath,
    jsonPath: globalConfig.requestDataResourcePath.jsonPath
}



export async function controller(accessTokenFromCLI: string): Promise<void> {
    // Load CSV and JSON resource files
    const targetDataCsvRepository: ICsvRepository = await CsvRepository.getInstanceAndloadCsvFrom(config.csvPath)
    const resourceJsonObjRepository: IJsonRepository = await JsonRepository.getInstanceAndLoadJsonFrom(config.jsonPath)

    // ===============================================================================================================================================================
    //   You can use the config object to access the global configuration values.
    //   Below codes are example.
    // ============================================= WRITE YOUR CODE BELOW ===========================================================================================





    // A) get Target data list from CSV file for repeating and include it in each request.
    const listOfTargetData: string[] = await targetDataCsvRepository.getAllDataInColumnOf("venueId")

    // B) get default Request body object from JSON file to use in each request.
    const resourceJsonObj: Object = await resourceJsonObjRepository.getAllData()


    // C-1) Send requests using "forEach", which actually play a role "bulk request".
    listOfTargetData.forEach(async (targetID: string) => {
        const requestURI: string = `${config.requestUriPath}${targetID}`
        const requestBody: Object = resourceJsonObj
        sendRequest(accessTokenFromCLI, requestURI, requestBody)
    }
    )


    // // C-2) Case where you want to modify the request body for each request.
    // listOfTargetData.forEach(async (targetID: string) => {
    //     const requestURI: string = config.requestUriPath
    //     const requestBody: Object = {
    //         ...resourceJsonObj,
    //         id: targetID,
    //     }

    //     await sendRequest(accessTokenFromCLI, requestURI, requestBody)
    // })




    // ============================================ WRITE YOUR CODE ABOVE ===========================================================================================
    //   Above codes are example.
    // ===============================================================================================================================================================

}

