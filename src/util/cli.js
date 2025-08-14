import readline from 'readline'
import { controller } from '../controller.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminator: true
});


export async function askAcccessTokenInCli() {

    rl.question('Please enter your access token: ', (inputAccessToken) => {
        if (!inputAccessToken) throw Error("Access token is required")

        controller(inputAccessToken).then(() => { rl.close() }
        )

    })
}

