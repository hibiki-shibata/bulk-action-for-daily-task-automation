import { AuthorizationHeaderAndBodyJsonService } from '../service/authorizationHeaderAndBodyJsonService.js';
import { AuthorizationHeaderAndNobodyService } from '../service/authorizationHeaderAndNoBodyService.js';
import { config } from '../../resource/config.js';
import { fileReader } from '../util/fileReader.js';

export async function requestTypeController(): Promise<void> {
    const accessTokenFromFile = fileReader('./resource/access-token.txt');

    if (!config.use_request_body) {
        // If NOT using request body, call the service for authorization header and no body.
        console.log("Starting with NO Request body...🤖")
        AuthorizationHeaderAndNobodyService.setAccessToken(accessTokenFromFile).executeBulkAction()

    } else {
        // Otherwise,  call the service for authorization header and body JSON
        console.log("Starting with Request body...🤖")
        AuthorizationHeaderAndBodyJsonService.setAccessToken(accessTokenFromFile).executeBulkAction()
    }

}