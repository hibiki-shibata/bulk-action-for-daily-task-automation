import { IPlaceHolderReplacer } from "../type/placeHolderReplacer.js";



export class PlaceHolderReplacer implements IPlaceHolderReplacer {
    private placeholdername: string = "[PLACE-HOLDER]"
    private static newValue: string

    public static replaceWith(targetValue: string): PlaceHolderReplacer {
        this.newValue = targetValue
        return new PlaceHolderReplacer()
    }

    private constructor() {
        if (!PlaceHolderReplacer.newValue) throw new Error("Target value is not set. Please call replaceWith first.")
    }

    // Replace {TARGET-VALUE} in the URI with the actual target value.
    replaceUriFrom(request_uri_from_globalConfig: string): string {
        return request_uri_from_globalConfig.replaceAll(this.placeholdername, PlaceHolderReplacer.newValue)
    }

    // Replace {TARGET-VALUE} in the JSON data with the actual target value.
    replaceJsonObjFrom(jsonData: Object): Object {
        const jsonString = JSON.stringify(jsonData)
        const updatedJsonString = jsonString.replaceAll(this.placeholdername, PlaceHolderReplacer.newValue)
        return JSON.parse(updatedJsonString)
    }



}