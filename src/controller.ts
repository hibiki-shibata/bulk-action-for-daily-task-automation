import { globalConfig } from '../globalConfig.js'
import { sendRequest } from './api/request.js'
import { csvRepository } from './repository/csvRepository.js'
import { jsonRepository } from './repository/jsonRepository.js'


export async function controller(accessTokenFromCLI) {
    const venueIDList = await csvRepository()
    const requestBodyJson = await jsonRepository()

    venueIDList.forEach(async venueID => {
        const requestURI = `${globalConfig.requestUriPath}${venueID}`
        sendRequest(accessTokenFromCLI, requestURI, requestBodyJson)
    })

}

