import { globalConfig } from "../../resource/globalConfig.js";



export function get_list_of_optional_csv_column_names(): string[] {
  const optionalColumns: string[] = [];


  Object.entries(globalConfig).forEach(([key, value]) => {
    // Ignore keys that are not optional CSV column names or are empty.
    if (!key.startsWith("optional_csv_column_name_") || !value.trim()) return    
    optionalColumns.push(value.trim())
  })

  return optionalColumns;
}