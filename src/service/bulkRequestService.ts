// import { sendRequest } from '../api/request.js'


// export class BulkRequestService {
//     private accessToken: string

//     constructor(accessToken: string) {
//         this.accessToken = accessToken        
//         if (!this.accessToken) throw new Error("Access token is required to send requests.") // Validate access token before proceeding
//     }

//     public async sendBulkRequest(listOfTargetID: string[], requestURI: string, requestBody: Object): Promise<void> {
//         // for (let i = 0; i < numberOfRequests; i++) sendRequest(this.accessToken, requestURI, requestBody)
//         listOfTargetID.forEach(async (targetID: string) => {
//             const uriWithId = `${requestURI}${targetID}`
//                 await sendRequest(this.accessToken, uriWithId, requestBody)
           
//         }
//         )
//     }

// }