## Expected behavior when you run this:📝

### What you manually need:
- CSV file....Define the target values of request.
- JSON file....Define the structure of request body.
- controller.ts.....Simply define the logics how pre-configured data will be used.

### Details ~ step by step:
1. You will configure the tool in [`./resource/globalConfig.ts`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/globalConfig.ts)
2. You will prepare CSV and JSON files, which contain resource data to be used for structuring requests.(example [./resource/](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/tree/main/resource)) --  These resource data will be used in Bulk-Action Logic layer: [`./src/controller/controller.ts`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/src/controller/controller.ts)  
3. 4. You will customize the Bulk-Action Logic layer: [↑](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/src/controller/controller.ts)
5. You will be asked "Access Token" in CLI.
6. You will copy your token from Website, and paste it in CLI.
7. Bulk request will be sent based on Logics in [`./src/controller/controller.ts`.](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/src/controller/controller.ts)
8. After request all sent without error, "succuess" message will be printed.


##



## How to prepare environment📚
1. Install Node.js (Download from [Node.js official](https://nodejs.org/en/download))
2. Install dependencies
    ```bash 
    npm install
    ``` 
3. Run the project
    ```bash 
    npm start
    ```

##


## How to customize Bulk Action🔧
#### Set the source informations for Bulk Action:
- Edit [`./resource/globalConfig.ts`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/globalConfig.ts) to define request URI/method/body information.
- Edit [`./src/resource/requestBody.json`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/requestBody-example.json) to define the source/structure of request body.
- Edit [`./src/resource/venueID.csv`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/targetID-example.csv) to define the source of target data for Bulk-action.

#### Customize the basic behavior, using the source information above:
- Edit [`./src/controller/controller.js`]((https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/src/controller/controller.ts)) to customize the Bulk-request behavior.





#### !! Optional(Only when you want to customize the CSV reading behavior): 
- Edit `./src/repository/csvRepository.ts` to customize the CSV file reading behavior.
- Edit `./src/repository/jsonRepository.ts` to customize the Json file reading behavior.
