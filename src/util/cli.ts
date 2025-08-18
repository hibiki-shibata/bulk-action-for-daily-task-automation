import readline from 'node:readline'
import { BulkActionController } from '../controller/BulkActionController.js'
import { IBulkActionController } from '../type/bulkActionTypeControllerType.js'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})




// This function prompts the user for an access token in the CLI
export async function askAcccessTokenInCli(): Promise<void> {
    rl.question(
        `=================================================`
        + "\n" +
        `STARTING BULK ACTION ✅`
        + "\n" +
        `Please paste your Authorization token below🤓`
        + "\n" +
        `=================================================\n->`,

        // This function will be called when the user inputs their access token
        async (inputAccessToken: string) => {
            // To Controller            
            const bulkActionController: IBulkActionController = await BulkActionController.getInstanceAndSetAccessToken(inputAccessToken)
            bulkActionController.bulkReqOf_header_Authorization_body_Json()
            rl.close()
        })
}

