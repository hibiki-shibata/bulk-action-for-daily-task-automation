### How to prepare environment
1. Install Node.js (Download from [Node.js official](https://nodejs.org/en/download))
2. Install dependencies
    ```bash 
    npm install
    ``` 
3. Run the project
    ```bash 
     npm start
    ```

### How to customize Bulk Action
- Edit `./resource/globalConfig.ts` to change the Bulk-request URI/method/body information.
- Edit `./src/resource/requestBody.json` to define the structure of request body for the Bulk-request.
- Edit `./src/resource/venueID.csv` is used to customize the Bulk-action target data.
- Edit `./src/repository/csvRepository.ts` to customize the CSV file reading behavior.
- Edit `./src/controller/controller.js` to customize the Bulk-request behavior.