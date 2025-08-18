import { IBulkActionController } from '../type/bulkActionTypeControllerType.js'
import { headerAuthorizationBodyJsonService } from '../service/headerAuthorizationBodyJsonService.js'



export class BulkActionController implements IBulkActionController {
    private static accessToken: string

    // Constructor to initialize the access token.
    public static async getInstanceAndSetAccessToken(accessToken: string): Promise<BulkActionController> {
        this.accessToken = accessToken
        if (!this.accessToken) throw new Error("❌Access token is not provided. Please call getInstanceAndSetAccessToken first.")
        return new BulkActionController()
    }

    public constructor() {
        if (!BulkActionController.accessToken) console.log("WARNING!!!!\nAccess token is not set. Please call getInstanceAndSetAccessToken first.")
    }

    private requiredAccessTokenValidator(): void {
        if (!BulkActionController.accessToken) throw new Error("Access token is not set. Please call getInstanceAndSetAccessToken first.")
    }


    public async bulkReqOf_header_Authorization_body_Json(): Promise<void> {
        this.requiredAccessTokenValidator()

        // Call the service to perform the bulk action with the access token.
        headerAuthorizationBodyJsonService(BulkActionController.accessToken)
    }
}


