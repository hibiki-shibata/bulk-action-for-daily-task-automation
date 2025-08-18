// ================= Welcome to customization! Scroll Down for customization. NO EDIT BELOW⚠️  ==============================================================================================================
import { PlaceHolderReplacer } from '../util/placeHolderReplacer.js'
import { globalConfig } from '../../resource/globalConfig.js'
import { sendRequest } from '../api/request.js'
import { CsvRepository } from '../repository/csvRepository.js'
import { JsonRepository } from '../repository/jsonRepository.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'
import { IPlaceHolderReplacer } from '../type/placeHolderReplacerType.js'
import { bulkActionServiceType } from '../type/bulkActionServiceType.js'

export class AuthorizationHeaderAndBodyJsonService implements bulkActionServiceType {
    private static accessToken: string
    private resource_csv_Repository: ICsvRepository
    private resource_request_body_json: Object

    private constructor() {
        // Load the CSV and JSON resource files, using specified path.
        this.resource_csv_Repository = CsvRepository.useCsvFileOf(globalConfig.csv_file_path)
        this.resource_request_body_json = JsonRepository.useJsonFileOf(globalConfig.json_file_path).getJsonAll()
    }

    public static setAccessToken(accessToken: string): AuthorizationHeaderAndBodyJsonService {
        if (!accessToken) throw new Error("❌Access token is not provided.")
        this.accessToken = accessToken
        return new AuthorizationHeaderAndBodyJsonService()
    }


    public executeBulkAction(): void {
        //Prep for Iteration: Get all rows of the base column specified in the globalConfig. 
        const rowsAll_in_base_column = this.resource_csv_Repository.columnOf(globalConfig.base_csv_column_name).getLine()

// ~~~~~~~~~~~~~~~~~~ Useful Methods/Variables For Customization. Scroll Down for customization ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   1. Get arbitrary data from your CSV file.
//         e.g.
//            this.resource_json_Repository.columnOf("Venue Address").getLine() // returns all data in the "Venue Address" column as an array
//            this.resource_json_Repository.columnOf("Venue Address").rowOf(2).getValue()  // returns the value of the "Venue Address" column in the 2nd row
//            this.resource_json_Repository.rowOf(2).columnOf("Venue Address").getValue() //  returns the value of the "Venue Address" column in the 2nd row


//   2. Get all Data from your JSON file.
//          e.g.
//             console.log(this.resource_request_body_json) // returns all your JSON data as an Object


//   3. Replace place specified values in the URI or JSON.
//          e.g.
//              PlaceHolderReplacer.for_placeHolder("[PLACE-HOLDER]").replaceWith("Tokyo").applyToUri("https://example.com/[PLACE-HOLDER]/example")         // returns "https://example.com/Tokyo/example"
//              PlaceHolderReplacer.for_placeHolder("[PLACE-HOLDER]").replaceWith("Tokyo").applyToJson({ "location": "[PLACE-HOLDER}" })  ï


// ✅ For further customization, you can also use the `CsvRepository` and `JsonRepository` as below to access your CSV and JSON data, respectively.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// =============================================⚠️ WRITE YOUR CODE BELOW ⚠️=================================================================================================



        // <<<<<<<<<<< START REQUEST ITERATION, based on base CSV Column. <<<<<<<<<<<
        for (let i = 0; i < rowsAll_in_base_column.length; i++) {
            // >>>>>>>>>>>> LOGIC FOR EACH ROW BELOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        



            // Replace the name of base column as placeholders in the request URI and JSON body with the value of the base column for the current row.
            //  e.g. base_column_name = "Venue Address" request_uri = "https://example.com/[Venue Address]/example" --replace--> https://example.com/Tokyo/example.
            const row_of_base_column: string = rowsAll_in_base_column[i] || ""
            if (!row_of_base_column) throw Error(`❌ Line of [${i}] not found in the CSV file.`)
            const placeHolderReplacer: IPlaceHolderReplacer = PlaceHolderReplacer.for_placeHolder(globalConfig.base_csv_column_name).replaceWith(row_of_base_column)
            const requestURI_without_placeholder: string = placeHolderReplacer.applyToUri(globalConfig.request_uri)
            const requestJsonBody_without_placeholder: Object = placeHolderReplacer.applyToJson(this.resource_request_body_json)




            // Send request
            sendRequest({
                URI: requestURI_without_placeholder,
                methodType: globalConfig.request_method,
                securityHeaderName: globalConfig.seuciry_header_name,
                accessToken: AuthorizationHeaderAndBodyJsonService.accessToken,
                bodyJson: requestJsonBody_without_placeholder
            })

                // console.log(`Sending request for row: ${row_of_base_column}`)
                // console.log(`Request URI: ${requestURI_without_placeholder}`)
                // console.log(`Request Body: ${JSON.stringify(requestJsonBody_without_placeholder, null, 2)}`)



                // ============================================⚠️ WRITE YOUR CODE ABOVE ⚠️=====================================================================================================
                //                                           Above codes are Default logic.
                // ===========================================================================================================================================================================
                .then((isSuccess) => { isSuccess ? console.log(`✅ Successfully: [${row_of_base_column}]`) : console.warn(`❌ Failed: [${row_of_base_column}]`); })
        }


    }
}