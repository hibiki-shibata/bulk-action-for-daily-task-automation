// ================= CUSTOMIZATION HERE ====================================================================================================================================

import { PlaceHolderReplacer } from '../util/placeHolderReplacer.js'
import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { JsonRepository } from '../repository/jsonRepository.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'
import { IJsonRepository } from '../type/jsonRepositoryType.js'
import { IPlaceHolderReplacer } from '../type/placeHolderReplacerType.js'


// ~~~~~~~~~~~~~~~~~~ Useful methods/variables for customization: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   1. Get all data from your arbitrary Column in the CSV.
//      resourceCsvRepository.getAllDataInColumnOf(<Column Name Here>)
//         e.g.
//            const abc: string[] = await resourceCsvRepository.getAllDataInColumnOf("Venue Address")
//            console.log(abc) // returns all data in the specified column as an array of strings


//   2. Get all Data from the JSON file.
//      resourceOf_request_body_json
//          e.g.
//             console.log(resourceOf_request_body_json) // returns all your JSON data as an Object


//   3. Replace place specified values in the URI or JSON.
//       PlaceHolderReplacer.replaceOf(<String value to replace>).replaceBy(<String value to replace By>)
//          e.g. 
//              const abc = PlaceHolderReplacer.replaceOf("Paris").replaceBy("Tokyo")
//              abc.replaceUriFrom("https://example.com/Paris/example") // returns "https://example.com/Tokyo/example"



// ✅ Below codes, which is used for default Bulk behavior are the actual example of how to use the above methods/variables.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export async function headerAuthorizationBodyJsonService(accessToken: string): Promise<void> {

    // Load the CSV and JSON resource files, using specified path.
    const resourceJsonObjRepository: IJsonRepository = JsonRepository.getInstanceAndLoadJsonFrom(globalConfig.json_file_path)
    const resourceCsvRepository: ICsvRepository = CsvRepository.getInstanceAndloadCsvFrom(globalConfig.csv_file_path)

    // Get Target value list from CSV.
    const rowsList_of_target_csv_column: string[] = await resourceCsvRepository.getAllDataInColumnOf(globalConfig.csv_column_name)

    // Get request body Object from JSON file.
    const resourceOf_request_body_json: Object = await resourceJsonObjRepository.getAllData()

// ========================================================================================================================================================================
//   Below codes are for customize the behavior of this Action.
//   Feel free to contact HIBIKI for question! 
// =============================================⚠️ WRITE YOUR CODE BELOW ⚠️===================================================================================================+




    // SAMPLE.1 To Get all dattaset in a CSV clumns data named "Contact"
    // const listOf_contact_column: string[] = await resourceCsvRepository.getAllDataInColumnOf("Contact")




    // <<<<<<<<<<< START REQUEST ITERATION, by using rows in the config-specified CSV Column. <<<<<<<<<<<
    rowsList_of_target_csv_column.forEach((row_of_target_csv_column: string) => {
    // >>>>>>>>>>>> LOGIC FOR EACH ROW BELOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        


        // Replace [PLACE-HOLDER] in the URI and JSON with the actual target value.
        const placeHolderReplacer: IPlaceHolderReplacer = PlaceHolderReplacer.replaceOf("[PLACE-HOLDER]").replaceBy(row_of_target_csv_column)
        const requestURI_without_placeholder: string = placeHolderReplacer.replaceUriFrom(globalConfig.request_uri)
        const requestJsonBody_without_placeholder: Object = placeHolderReplacer.replaceJsonObjFrom(resourceOf_request_body_json)


        // Send request
        sendRequest({
            URI: requestURI_without_placeholder,
            methodType: globalConfig.request_method,
            securityHeaderName: globalConfig.seuciry_header_name,
            accessToken: accessToken,
            bodyJson: requestJsonBody_without_placeholder
        })


// ============================================⚠️ WRITE YOUR CODE ABOVE ⚠️=====================================================================================================
//                                             Above codes are example.
// ========================================================================================================================================================================
            .then((isSuccess) => {isSuccess ? console.log(`✅ Successfully: [${row_of_target_csv_column}]`) : console.warn(`❌ Failed: [${row_of_target_csv_column}]`);})
    })

}







