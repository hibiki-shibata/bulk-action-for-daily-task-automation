// This file is the entry point for the application
// Run this file to start the application
import { AuthorizationHeaderAndBodyJsonService } from './service/authorizationHeaderAndBodyJsonService.js'
import { fileReader } from './/util/fileReader.js';




async function main(): Promise<void> {
    console.log(`=========================================================================\n\n⚠️ Do not forget to update your Access Token in access-token.txt file ⚠️\n\n=========================================================================`)
    console.log(`STARTING...🤖`)
    AuthorizationHeaderAndBodyJsonService.setAccessToken(fileReader('./resource/access-token.txt')).executeBulkAction()
}


main().catch(error => {
    console.error('An error occurred:', error)
    process.exit(1)
}
)

