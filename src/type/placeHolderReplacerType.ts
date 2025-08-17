export interface IPlaceHolderReplacer {
  replaceUriFrom(uri: string): string
  replaceJsonObjFrom(jsonData: Object): Object
}