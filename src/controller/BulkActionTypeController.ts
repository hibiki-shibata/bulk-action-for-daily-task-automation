import { IBulkActionTypeController } from '../type/IBulkActionTypeControllerType.js'
import { headerAuthorizationBodyJsonService } from '../service/headerAuthorizationBodyJsonService.js'



export class BulkActionTypeController implements IBulkActionTypeController {
    private static accessToken: string

    // Constructor to initialize the access token.
    public static async getInstanceAndSetAccessToken(accessToken: string): Promise<BulkActionTypeController> {
        this.accessToken = accessToken
        return new BulkActionTypeController()
    }

    public constructor() {
        if (!BulkActionTypeController.accessToken) console.log("WARNING!!!!\nAccess token is not set. Please call getInstanceAndSetAccessToken first.")
    }

    private requiredAccessTokenValidator(): void {
        if (!BulkActionTypeController.accessToken) throw new Error("Access token is not set. Please call getInstanceAndSetAccessToken first.")
    }


    public async header_Authorization_body_Json(): Promise<void> {
        this.requiredAccessTokenValidator()

        // Call the service to perform the bulk action with the access token.
        headerAuthorizationBodyJsonService(BulkActionTypeController.accessToken)
    }
}


