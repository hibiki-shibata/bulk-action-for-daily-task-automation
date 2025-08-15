export interface ICsvRepository {
    getAllDataInColumnOf(columnName: string): Promise<string[]>
}
