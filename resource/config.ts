import { configType } from "../src/type/config.Type.js"; export const config: configType = {
// =====================================================================================================================================

//                       Feel free to contact HIBIKI for question !

// ============================📝 FILL YOUR CONFIGURATION BELOW 📝==================================================================================




  // A) Request Method.
  request_method: "PUT",

  // B) Request URI.
  //        Optionally, use <Your Column Name> as a placeholder for replacing it with data in the CSV column below.
  request_uri: "https://example-restautnt-management/open/[Customer ID]/customerID/[Venue Address]/venueaddress/[Contact]/contact",

  // C) Primary Column name in CSV file.
  //        Data in this column will replace the placeholders(e.g.[Customer ID]) in URI / Request Body.
  base_csv_column_name: "Customer ID",

  // D) Optional‼️ : Additional CSV column names.
  //                      If you want to use additional columns in the CSV file, specify them here. (Up to 10 columns)
  optional_csv_column_name_1: "Customer ID",
  optional_csv_column_name_2: "Venue Address",

  // E) Paths to your resource files.
  csv_file_path: "./resource/custom-values.csv", // Define your custom data.
  json_file_path: "./resource/requestBody-config.json", // Define your request body.

  // F) Access Token header name.
  security_header_name: "Authorization",





// ============================📝 FILL YOUR CONFIGURATION ABOVE 📝==================================================================================

//                      Feel free to contact HIBIKI for question !

// =====================================================================================================================================
}

