## Expected behavior overview ~ step by step ~ 📝
1. Prepare resource files. (Check out ["What you manually prepare"](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/README.md#what-you-manually-prepare))
2. Run this Project in CLI.
3. You will be asked for Authorization Token.
4. Bulk task automatically starts.
5. After all request sent without error, you will see message "HEY, DONE❤️".



##



## What you manually prepare📝:
1.Edit [`./resource/globalConfig.ts`](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/globalConfig.ts)...Configure Request method, URI, CSV column name🔧.
   - Inspect request format(Request URL, Request Method, Request Body) in network log on your Browser, and copy it.

2. Edit/Create [JSON file](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/request-body.json)....Define the structure of request body📝.
   - Copy the inspected request Body in the step1.
   - Use [PLACE-HOLDER]
   
3. Edit/Create [CSV file](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/resource/target-values.csv)....Define the target values of request📝.

#### Optional‼️
4. [headerAuthorizationBodyJsonService.ts](https://github.com/hibiki-shibata/bulk-action-for-daily-task-automation/blob/main/src/service/headerAuthorizationBodyJsonService.ts).....Let's easily chage pattern of Bulk Actions!
- When your requirement wasn't satisfied by default behavior, custmize the behavior here! It will be simple!



##


##  ※ How to run this Project📚:
#### Prerequisite:
1. Install Node.js (Download from [Node.js official](https://nodejs.org/en/download))
2. Install dependencies by command.
    ```bash 
    npm install
    ```
    
    Run the project by command🔥
    ```bash
    npm start
    ```







