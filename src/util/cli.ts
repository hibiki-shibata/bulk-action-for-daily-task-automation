import readline from 'node:readline'
import { BulkActionTypeController } from '../controller/BulkActionTypeController.js'
import { IBulkActionTypeController } from '../type/IBulkActionTypeControllerType.js'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})


const separationLine = "================================================="


// This function prompts the user for an access token in the CLI
export async function askAcccessTokenInCli(): Promise<void> {
    rl.question(
        `${separationLine}`
        + "\n" +
        `STARTING BULK ACTION ✅`
        + "\n" +
        `Please paste your Authorization token below🤓`
        + "\n" +
        `${separationLine}\n->`,

        // This function will be called when the user inputs their access token
        async (inputAccessToken: string) => {
            const bulkActionTypeController: IBulkActionTypeController = await BulkActionTypeController.getInstanceAndSetAccessToken(inputAccessToken)
            bulkActionTypeController.header_Authorization_body_Json()
            rl.close()
        })
}

