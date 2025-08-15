// This file is the entry point for the application
// Run this file to start the application
import { askAcccessTokenInCli } from './util/cli.js';


async function main(): Promise<void> {
    await askAcccessTokenInCli()
}


main().catch(error => {
    console.error('An error occurred:', error);
}
)

