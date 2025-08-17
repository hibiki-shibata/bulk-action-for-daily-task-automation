import { fileReader } from '../util/fileReader.js'
import { ICsvRepository } from '../type/csvRepositoryType.js'


export class CsvRepository implements ICsvRepository {
    private static rawCsvData: string

    public static getInstanceAndloadCsvFrom(csvPath: string): CsvRepository {
        this.rawCsvData = fileReader(csvPath)
        if (!this.rawCsvData) throw Error("The CSV file is empty or does not contain valid data.")
        return new CsvRepository()
    }

    private constructor() {
        if (!CsvRepository.rawCsvData) throw new Error("CSV data is not loaded. Please call getInstanceAndloadCsvFrom first.")

    }

    public async getAllDataInColumnOf(targetColumnName: string): Promise<string[]> {
        let listOfTargetValue: any[] = []
        let countLinesOfCsvRows: number = 2 // Start counting from 2 to skip the header row
        const csvDataRows: string[] = CsvRepository.rawCsvData.split('\n')

        // Get the Column names from the first line of the CSV data. And Remove the line from the data rows.
        const getLineOfColumnNames: string = csvDataRows.shift() || "Columns Name not found"

        // Get the Index of the target column name.
        const getTargetColumnNameIndex: number = getLineOfColumnNames.split(',').indexOf(targetColumnName)

        // Check if the target column name actually exists
        if (getTargetColumnNameIndex === -1) throw Error(`Column "${targetColumnName}" not found in the CSV file:(((`)


        // Get from values in row of the target column 
        csvDataRows.forEach((rowOfCsv: string) => {
            const rowData: string[] = rowOfCsv.split(',')

            // Check if each row has the target column value
            const targetValue: string = rowData[getTargetColumnNameIndex]?.trim() || ""
            if (!targetValue) throw Error(`Row [${countLinesOfCsvRows}] does not have value of ${targetColumnName}.`)

            listOfTargetValue.push(targetValue)
            countLinesOfCsvRows += 1
        }
        )

        // Ensure the target IDs list is not empty
        if (listOfTargetValue.length === 0) throw Error("The CSV file is empty or does not contain valid venue IDs.");

        return listOfTargetValue
    }
}