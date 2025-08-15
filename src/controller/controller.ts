import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { jsonRepository } from '../repository/jsonRepository.js'
import { globalConfigType } from '../type/globalConfType.js'



const config: globalConfigType = {
    requestUriPath: globalConfig.requestUriPath,
    requestMethod: globalConfig.requestMethod,
    csvPath: globalConfig.csvPath,
    jsonPath: globalConfig.jsonPath
}


export async function controller(accessTokenFromCLI: string): Promise<void> {
    const venueDataCsvRepository: CsvRepository = await CsvRepository.getInstanceAndloadCsvFrom(config.csvPath)
        
    // Get the list of all venue IDs from the CSV file
    const venueIDList: string[] = await venueDataCsvRepository.getAllDataInColumnOf("venueID")
    const reqBodyObjectFromResource: Object = await jsonRepository()

    venueIDList.forEach(async venueID => {
        const requestURI: string = `${config.requestUriPath}${venueID}`
        sendRequest(accessTokenFromCLI, requestURI, reqBodyObjectFromResource)
    })

}

