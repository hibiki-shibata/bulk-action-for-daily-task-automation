import { globalConfigType } from "../src/type/globalConfigType.js"; export const globalConfig: globalConfigType = {
  // =====================================================================================================================================

  //                       Feel free to contact HIBIKI for question !

  // ============================📝 WRITE YOUR CODE BELOW 📝==================================================================================






  // A) Request Method. 
  //       e.g. "POST", "PUT", "DELETE".
  request_method: "PUT",



  // B) Request URI.
  //      Optionally, use [PLACE-HOLDER] as a placeholder for replacing it with data in the CSV column below.
  request_uri: "https://example-restautnt-management/open/[PLACE-HOLDER]/demo",



  // C) Target Column name in CSV file.
  //      Data in this column will replace [PLACE-HOLDER].
  csv_column_name: "Venue Address",




// D) OPTIONAL‼️ : Security Header Name.
  //    If your API requires a security header name wasn't default - "Authorization", 
  seuciry_header_name: "Authorization",



  // E) OPTIONAL‼️ : Paths to the resource files.
  //                 Only if you don't wamt to use default file.
  csv_file_path: "./resource/target-values.csv",
  json_file_path: "./resource/request-body.json",



  // ============================📝 WRITE YOUR CODE ABOVE 📝==================================================================================

  //                      Feel free to contact HIBIKI for question !

  // =====================================================================================================================================
}

