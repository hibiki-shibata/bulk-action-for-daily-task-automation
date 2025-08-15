import { fileReader } from '../util/fileReader.js'


interface ICsvRepository {
    getAllDataInColumnOf(columnName: string): Promise<string[]>
}


export class CsvRepository implements ICsvRepository {
    private static rawCsvData: string

    public static async getInstanceAndloadCsvFrom(csvPath: string) {
        this.rawCsvData = await fileReader(csvPath)
        if (!this.rawCsvData) throw Error("The CSV file is empty or does not contain valid data.")
        return new CsvRepository()
    }

    private constructor() {
      if (!CsvRepository.rawCsvData)throw new Error("CSV data is not loaded. Please call getInstanceAndloadCsvFrom first.")
        
    }

    public async getAllDataInColumnOf(columnName: string): Promise<string[]> {
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