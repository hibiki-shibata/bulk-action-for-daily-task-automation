import { globalConfigType } from "../src/type/globalConfigType.js"; export const globalConfig: globalConfigType = {
  // =====================================================================================================================================

  //                       Feel free to contact HIBIKI for question !

  // ============================📝 WRITE YOUR CODE BELOW 📝==================================================================================







  // A) Request Method. 
  //       e.g. "POST", "PUT", "DELETE".
  request_method: "PUT",



  // B) Request URI.
  //        Optionally, use [PLACE-HOLDER] as a placeholder for replacing it with data in the CSV column below.
  request_uri: "https://example-restautnt-management/open/[PLACE-HOLDER]/demo",




  // C) Primary Column name in CSV file.
  //        Data in this column will replace [PLACE-HOLDER].
  base_csv_column_name: "customerID",








// D) Optional‼️ : Additional CSV column names.
  //                      If you want to use additional columns in the CSV file, specify them here.
  //                      You can specify up to 10 additional columns.
  optional_csv_column_name_1: "customerName",
  optional_csv_column_name_2: "Venue Address",
  optional_csv_column_name_3: "Contact",




  // E) OPTIONAL‼️ : Security Header Name.
  //                     If your API requires a security header name wasn't default - "Authorization".
  seuciry_header_name: "Authorization",



  // F) OPTIONAL‼️ : Paths to the resource files.
  //                    Only if you don't wamt to use default file.
  csv_file_path: "./resource/target-values.csv",
  json_file_path: "./resource/request-body.json",









  // ============================📝 WRITE YOUR CODE ABOVE 📝==================================================================================

  //                      Feel free to contact HIBIKI for question !

  // =====================================================================================================================================
}

