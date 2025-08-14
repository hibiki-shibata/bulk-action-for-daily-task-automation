import { globalConfig } from "../../config.js";
import { fileReader } from '../util/fileReader.js'

export async function csvRepository() {
    let listOfVenueIdsToUpdate = []
    let countLinesOfCsvRows = 1

    const rawCsvData = await fileReader(globalConfig.csvPath)
    const csvDataRows = rawCsvData.split('\n')

    csvDataRows.forEach(rowOfCsv => {        
        const validRow = csvDataFormatValidator(rowOfCsv)
        if (!validRow) {
            console.log(`Invalid CSV format at line ${countLinesOfCsvRows}: "${rowOfCsv}". Please ensure the CSV file does not contain empty lines or multiple columns.`);
        } else listOfVenueIdsToUpdate.push(validRow)
        
        countLinesOfCsvRows += 1
    }
    )

    if (listOfVenueIdsToUpdate.length === 0) throw Error("The CSV file is empty or does not contain valid venue IDs.");

    return listOfVenueIdsToUpdate
}


//Spec1: Does not allow empty lines in the CSV.
//Spec2: Does not allow multiple columns in the CSV.
function csvDataFormatValidator(rowOfCsv) {
    let trimedRowOfCsvData = rowOfCsv.trim()
    const isEmptyRow = trimedRowOfCsvData === ""
    const hasMultipleColumns = trimedRowOfCsvData.includes(",")

    if (isEmptyRow || hasMultipleColumns) {
        return false
    } else return trimedRowOfCsvData

}