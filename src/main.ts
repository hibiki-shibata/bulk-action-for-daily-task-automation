// This file is the entry point for the application
// Run this file to start the application
import { requestTypeController } from "./controller/requestTypeController.js"





async function main(): Promise<void> {
    console.log(`=========================================================================\n\n⚠️ Do not forget to update your Access Token in access-token.txt file ⚠️\n\n=========================================================================`)
    requestTypeController()
}


main().catch(error => {
    console.error('An error occurred:', error)
    process.exit(1)
}
)

