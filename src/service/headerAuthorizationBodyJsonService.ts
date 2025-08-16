// ================= CUSTOMIZATION HERE ====================================================================================================================================

import { PlaceHolderReplacer } from '../util/placeHolderReplacer.js'
import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { JsonRepository } from '../repository/jsonRepository.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'
import { IJsonRepository } from '../type/jsonRepository.js'
import { IPlaceHolderReplacer } from '../type/placeHolderReplacer.js'


// ~~~~~~~~~~~~~~~~~~ Useful methods/variables for customization: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// 1. Get all data from your arbitrary Column in the CSV.
//      resourceCsvRepository.getAllDataInColumnOf(<Column Name Here>)
//         e.g.
//            const abc: string[] = await resourceCsvRepository.getAllDataInColumnOf("Venue Address")
//            console.log(abc) // returns all data in the specified column as an array of strings


// 2. Get all Data from the JSON file.
//      resourceJson
//          e.g.
//             console.log(resourceJson) // returns all your JSON data as an Object


// 3. Replace place specified values in the URI or JSON.
//       PlaceHolderReplacer.replaceOf(<String value to replace>).replaceBy(<String value to replace By>)
//          e.g. 
//              const abc = PlaceHolderReplacer.replaceOf("Paris").replaceBy("Tokyo")
//              abc.replaceUriFrom("https://example.com/Paris/example") // returns "https://example.com/Tokyo/example"



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export async function headerAuthorizationBOdyJsonService(accessToken: string): Promise<void> {

    // Load the CSV and JSON resource files, using specified path.
    const resourceJsonObjRepository: IJsonRepository = JsonRepository.getInstanceAndLoadJsonFrom(globalConfig.json_file_path)
    const resourceCsvRepository: ICsvRepository = CsvRepository.getInstanceAndloadCsvFrom(globalConfig.csv_file_path)

    // Get Target value list from CSV.
    const listOfTargetValuesFromCsv: string[] = await resourceCsvRepository.getAllDataInColumnOf(globalConfig.csv_column_name)

    // Get request body Object from JSON.
    // This JSON file should contain {TARGET-VALUE} placeholder.
    const resourceJson: Object = await resourceJsonObjRepository.getAllData()

// ========================================================================================================================================================================

//   Below codes are for customize the behavior of this Action.
//   Sample methods/variables useful for customization are provided in the bottom of this file.
//   Feel free to contact HIBIKI for question! 

// ============================================= WRITE YOUR CODE BELOW ===================================================================================================+









    // Iterate based on data in specified Column Name from CSV.
    listOfTargetValuesFromCsv.forEach((targetValue: string) => {


        // Replace [PLACE-HOLDER] in the URI and JSON with the actual target value.
        const placeHolderReplacer: IPlaceHolderReplacer = PlaceHolderReplacer.replaceOf("[PLACE-HOLDER]").replaceBy(targetValue)
        const requestURI_without_placeholder: string = placeHolderReplacer.replaceUriFrom(globalConfig.request_uri)
        const requestJsonBody_without_placeholder: Object = placeHolderReplacer.replaceJsonObjFrom(resourceJson)



        // Send request
        sendRequest({
            URI: requestURI_without_placeholder,
            methodType: globalConfig.request_method,
            accessToken: accessToken,
            bodyJson: requestJsonBody_without_placeholder
        })

    })











// ============================================ WRITE YOUR CODE ABOVE =====================================================================================================

//                                             Above codes are example.

// ========================================================================================================================================================================
}







