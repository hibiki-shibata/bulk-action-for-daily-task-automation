export const globalConfig = {
  requestUriPath: "https://example-restautnt-management/open/", // Base URI for the request
  requestMethod: "PUT", // You may want to modify ~/src/api/request.ts to adjust depends on POST, DELETE, etc methods.


  // Relative path from the root of the project to the files.
  requestDataResourcePath: {
    csvPath: "./resource/targetID-example.csv", // Path to the CSV that contains the target IDs
    jsonPath: "./resource/requestBody-example.json" // Path to the JSON that contains the structure of request body.
  },
}


