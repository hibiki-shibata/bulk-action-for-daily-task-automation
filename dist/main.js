// This file is the entry point for the application
// Run this file to start the application
import { askAcccessTokenInCli } from './src/util/cli.ts';
async function main() {
    await askAcccessTokenInCli();
}
main().catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map