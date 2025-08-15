### How to prepare environment📚
1. Install Node.js (Download from [Node.js official](https://nodejs.org/en/download))
2. Install dependencies
    ```bash 
    npm install
    ``` 
3. Run the project
    ```bash 
     npm start
    ```


## How to customize Bulk Action🔧
#### Set the source informations for Bulk Action:
- Edit [`./resource/globalConfig.ts`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/globalConfig.ts) to define request URI/method/body information.
- Edit [`./src/resource/requestBody.json`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/requestBody-example.json) to define the source/structure of request body.
- Edit [`./src/resource/venueID.csv`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/targetID-example.csv) to define the source of target data for Bulk-action.

#### Customize the basic behavior, using the source information above:
- Edit `./src/controller/controller.js` to customize the Bulk-request behavior.


#### !Optionnal(Only when you want to customize the CSV reading behavior):
- Edit `./src/repository/csvRepository.ts` to customize the CSV file reading behavior.
