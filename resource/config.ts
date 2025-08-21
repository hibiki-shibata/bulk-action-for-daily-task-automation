import { configType } from "../src/type/config.Type.js"; export const config: configType = {
  // =====================================================================================================================================

  //                       Feel free to contact HIBIKI for question !

  // ============================📝 FILL YOUR CONFIGURATION BELOW 📝==================================================================================





  // A) Request URI.
  //        Optionally, use <Your Column Name> as a placeholder for replacing it with data in the CSV column below.
  request_uri: "https://example-restautnt-management/open/[Customer ID]/customerID/[Venue Address]/venueaddress/[Contact]/contact",

  // B) Request Method.
  request_method: "PUT",

  // C) Access Token header name.
  security_header_name: "Authorization",


  // D) Define if you want to include JSON request body or not.
  use_request_body: false,


  // E) Primary Column name in CSV file.
  //        Data in this column will replace the placeholders(e.g.[Customer ID]) in URI / Request Body.
  base_csv_column_name: "Customer ID",


  // F) Optional‼️ : Additional CSV column names.
  //                      If you want to use additional columns in the CSV file, specify them here. (Up to 10 columns)
  optional_csv_column_name_1: "Customer ID",
  optional_csv_column_name_2: "Venue Address",
  optional_csv_column_name_3: "Contact",


  // G) Paths to your resource files.
  csv_file_path: "./resource/custom-values.csv", // Define your custom data.
  json_file_path: "./resource/requestBody-config.json", // Define your request body.






  // ============================📝 FILL YOUR CONFIGURATION ABOVE 📝==================================================================================

  //                      Feel free to contact HIBIKI for question !

  // =====================================================================================================================================
}

