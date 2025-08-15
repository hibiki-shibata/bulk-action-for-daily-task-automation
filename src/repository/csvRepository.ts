// import { globalConfig } from "../../resource/globalConfig.js";
import { fileReader } from '../util/fileReader.js'

// export async function csvRepository() {
//     let listOfVenueIdsToUpdate: any[] = []
//     let countLinesOfCsvRows = 1

//     const rawCsvData = await fileReader(globalConfig.csvPath)
//     const csvDataRows = rawCsvData.split('\n')

//     csvDataRows.forEach((rowOfCsv: any) => {
//         const validRow = csvDataFormatValidator(rowOfCsv)
//         if (!validRow) {
//             console.log(`Invalid CSV format at line ${countLinesOfCsvRows}: "${rowOfCsv}". Please ensure the CSV file does not contain empty lines or multiple columns.`);
//         } else listOfVenueIdsToUpdate.push(validRow)

//         countLinesOfCsvRows += 1
//     }
//     )

//     if (listOfVenueIdsToUpdate.length === 0) throw Error("The CSV file is empty or does not contain valid venue IDs.");

//     return listOfVenueIdsToUpdate
// }


//Spec1: Does not allow empty lines in the CSV.
//Spec2: Does not allow multiple columns in the CSV.
// function csvDataFormatValidator(rowOfCsv: string) {
//     let trimedRowOfCsvData = rowOfCsv.trim()
//     const isEmptyRow = trimedRowOfCsvData === ""
//     const hasMultipleColumns = trimedRowOfCsvData.includes(",")

//     if (isEmptyRow || hasMultipleColumns) {
//         return false
//     } else return trimedRowOfCsvData

// }


interface ICsvRepository {
    getAllDataInColumnOf(columnName: string): Promise<string[]>
}


export class CsvRepository implements ICsvRepository {
    private static rawCsvData: string

    public static async getInstanceAndloadCsvFrom(csvPath: string) {
        this.rawCsvData = await fileReader(csvPath)
        if (!this.rawCsvData) throw Error("The CSV file is empty or does not contain valid data.");

        return new CsvRepository()
    }

    public async getAllDataInColumnOf(columnName: string): Promise<string[]> {
        if (!CsvRepository.rawCsvData) throw Error("CSV data is not loaded. Please call getInstanceAndloadCsvFrom first.");

        var listOfTargetIdsToUse: any[] = []
        var countLinesOfCsvRows: number = 1

        // Get the Index of the asked column name
        const csvDataRows = CsvRepository.rawCsvData.split('\n')
        const getColumnNameIndex = csvDataRows[0].split(',').indexOf(columnName)
        console.log(CsvRepository.rawCsvData)
        console.log(`Column "${columnName}" index: ${getColumnNameIndex} csvFirstRow: ${csvDataRows}`)

        // Check if the asked column name actually exists
        if (getColumnNameIndex === -1) throw Error(`Column "${columnName}" not found in the CSV file:(((`)


        // Get from entire rows target IDs in the specified column 
        csvDataRows.forEach((rowOfCsv: string) => {
            const rowData = rowOfCsv.split(',')
            const targetID = rowData[getColumnNameIndex].trim()
            if (targetID) listOfTargetIdsToUse.push(targetID)

            countLinesOfCsvRows += 1
        }
        )

        // Ensure the target IDs list is not empty
        if (listOfTargetIdsToUse.length === 0) throw Error("The CSV file is empty or does not contain valid venue IDs.");

        return listOfTargetIdsToUse
    }
}