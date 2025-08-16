import { PlaceHolderReplacer } from '../util/placeHolderReplacer.js'
import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { JsonRepository } from '../repository/jsonRepository.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'
import { IJsonRepository } from '../type/jsonRepository.js'
import { IPlaceHolderReplacer } from '../type/placeHolderReplacer.js'




export async function headerAuthorizationBOdyJsonService(accessToken: string): Promise<void> {

    // Load the CSV and JSON resource files, using specified path.
    const resourceJsonObjRepository: IJsonRepository = await JsonRepository.getInstanceAndLoadJsonFrom(globalConfig.json_file_path)
    const resourceCsvRepository: ICsvRepository = await CsvRepository.getInstanceAndloadCsvFrom(globalConfig.csv_file_path)

    // Get Target value list from CSV.
    const listOfTargetValuesFromCsv: string[] = await resourceCsvRepository.getAllDataInColumnOf(globalConfig.csv_column_name)

    // Get request body Object from JSON.
    // This JSON file should contain {TARGET-VALUE} placeholder.
    const resourceJson: Object = await resourceJsonObjRepository.getAllData()

    // ===============================================================================================================================================================
    //   Below codes are for customize the behavior of this Action.
    //   Feel free to contact HIBIKI for question! 
    // ============================================= WRITE YOUR CODE BELOW ===========================================================================================







    // Iterate based on data in specified Column Name from CSV.
    listOfTargetValuesFromCsv.forEach((targetValue: string) => {

        // Replace [PLACE-HOLDER] in the URI and JSON with the actual target value.
        const placeHolderReplacer: IPlaceHolderReplacer = PlaceHolderReplacer.replaceWith(targetValue)
        const requestURI_without_placeholder: string = placeHolderReplacer.replaceUriFrom(globalConfig.request_uri)
        const requestJsonBody: Object = placeHolderReplacer.replaceJsonObjFrom(resourceJson)

        console.log(
            `\n\nSending request to: ${requestURI_without_placeholder}\nWith method: ${globalConfig.request_method}\nWith body: ${JSON.stringify(requestJsonBody, null, 2)}\n`
        )

        // sendRequest({
        //     requestURI: requestURI,
        //     requestMethod: globalConfig.Request_Method,
        //     accessToken: BulkActionController.accessToken,
        //     requestBodyJson: requestJsonBody
        // })

    })









    // ============================================ WRITE YOUR CODE ABOVE ===========================================================================================
    //                                             Above codes are example.
    // ==============================================================================================================================================================
}