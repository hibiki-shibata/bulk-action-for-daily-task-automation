import readline from 'node:readline'
import { controller } from '../controller.js'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})


export async function askAcccessTokenInCli(): Promise<void> {

    rl.question('Please enter your access token: ', (inputAccessToken: String) => {
        if (!inputAccessToken) throw Error("Access token is required")

        controller(inputAccessToken).then(() => { rl.close() }
        )

    })
}

