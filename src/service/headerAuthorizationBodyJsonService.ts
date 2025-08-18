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


export function headerAuthorizationBodyJsonService(accessToken: string): void {

    // Load the CSV and JSON resource files, using specified path.
    const resource_json_Repository: IJsonRepository = JsonRepository.useJsonFileOf(globalConfig.json_file_path)
    const resource_csv_Repository: ICsvRepository = CsvRepository.useCsvFileOf(globalConfig.csv_file_path)

    // Get all rows of the base column specified in the globalConfig.
    const all_rows_of_base_column: string[] = resource_csv_Repository.columnOf(globalConfig.base_csv_column_name).getLine()

    // Get all data from the JSON file.
    const resource_request_body_json: Object = resource_json_Repository.getJsonAll()

    // ========================================================================================================================================================================
    //   Below codes are for customize the behavior of this Action.
    //   Feel free to contact HIBIKI for question! 
    // =============================================⚠️ WRITE YOUR CODE BELOW ⚠️===================================================================================================+





    // SAMPLE.1 To Get all dattaset in a CSV clumns data named "Contact"
    // const listOf_contact_column: string[] = await resourceCsvRepository.getAllDataInColumnOf("Contact")





    // <<<<<<<<<<< START REQUEST ITERATION, by using rows in the config-specified CSV Column. <<<<<<<<<<<
    for (let i = 0; i < all_rows_of_base_column.length; i++) {
        // >>>>>>>>>>>> LOGIC FOR EACH ROW BELOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        

        const row_of_base_column: string = all_rows_of_base_column[i] || ""
        if (!row_of_base_column) throw Error(`❌ Row [${i}] not found in the CSV file.`)



        // Replace [PLACE-HOLDER] in the URI and JSON with the actual target value.
        const placeHolderReplacer: IPlaceHolderReplacer = PlaceHolderReplacer.for_placeHolder("[PLACE-HOLDER]").replaceWith(row_of_base_column)
        const requestURI_without_placeholder: string = placeHolderReplacer.applyToUri(globalConfig.request_uri)
        const requestJsonBody_without_placeholder: Object = placeHolderReplacer.applyToJson(resource_request_body_json)




        // Send request
        sendRequest({
            URI: requestURI_without_placeholder,
            methodType: globalConfig.request_method,
            securityHeaderName: globalConfig.seuciry_header_name,
            accessToken: accessToken,
            bodyJson: requestJsonBody_without_placeholder
        })

        // console.log(`Sending request for row: ${row_of_base_column}`)
        // console.log(`Request URI: ${requestURI_without_placeholder}`)
        // console.log(`Request Body: ${JSON.stringify(requestJsonBody_without_placeholder, null, 2)}`)



        // ============================================⚠️ WRITE YOUR CODE ABOVE ⚠️=====================================================================================================
        //                                             Above codes are example.
        // ========================================================================================================================================================================
        .then((isSuccess) => {isSuccess ? console.log(`✅ Successfully: [${row_of_base_column}]`) : console.warn(`❌ Failed: [${row_of_base_column}]`);})
    }
}







