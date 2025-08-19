import { configType } from "../src/type/configType.js"; export const config: configType = {
// =====================================================================================================================================

//                       Feel free to contact HIBIKI for question !

// ============================📝 FILL YOUR CONFIGURATION BELOW 📝==================================================================================






  // A) Request Method.
  request_method: "PUT",


  // B) Request URI.
  //        Optionally, use <Your Column Name> as a placeholder for replacing it with data in the CSV column below.
  request_uri: "https://example-restautnt-management/open/[Customer ID]/customerID/[Venue Address]/venueaddress/[Contact]/contact",



  // C) Primary Column name in CSV file.
  //        Data in this column will replace [<Your Column Name>].
  base_csv_column_name: "Customer ID",



  // D) Optional‼️ : Additional CSV column names.
  //                      If you want to use additional columns in the CSV file, specify them here.
  //                      You can specify up to 10 additional columns.
  optional_csv_column_name_1: "Customer ID",
  optional_csv_column_name_2: "Venue Address",



  // E) Paths to the resource files.
  csv_file_path: "./resource/target-values.csv", // Define your custom values.
  json_file_path: "./resource/request-body-config.json", // Define your request body.



  // F) Access Token header name.
  security_header_name: "Authorization",







// ============================📝 FILL YOUR CONFIGURATION ABOVE 📝==================================================================================

//                      Feel free to contact HIBIKI for question !

// =====================================================================================================================================
}

