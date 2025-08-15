import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { jsonRepository } from '../repository/jsonRepository.js'
import { globalConfigType } from '../type/globalConfType.js'


const config: globalConfigType = {
    requestUriPath: globalConfig.requestUriPath,
    requestMethod: globalConfig.requestMethod,
    csvPath: globalConfig.requestDataResourcePath.csvPath,
    jsonPath: globalConfig.requestDataResourcePath.jsonPath
}


export async function controller(accessTokenFromCLI: string): Promise<void> {
    const venueCsvRepository: CsvRepository = await CsvRepository.getInstanceAndloadCsvFrom(config.csvPath)
        
    // Get the list of all venue IDs from the column named "venueID" from CSV file.
    const venueIDList: string[] = await venueCsvRepository.getAllDataInColumnOf("venueID")

    // Get the request body object from the JSON file.
    const reqBodyObjectFromResource: Object = await jsonRepository()

    // Doing bulk action by sending request to each venue ID.
    venueIDList.forEach(async venueID => {
        const requestURI: string = `${config.requestUriPath}${venueID}`
        sendRequest(accessTokenFromCLI, requestURI, reqBodyObjectFromResource)

    })

}

