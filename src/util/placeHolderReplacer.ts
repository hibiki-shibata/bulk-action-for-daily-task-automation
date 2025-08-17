import { IPlaceHolderReplacer } from "../type/placeHolderReplacerType.js";



export class PlaceHolderReplacer implements IPlaceHolderReplacer {
    private placeholdername: string
    private newValue!: string;


    public static replaceOf(placeholder: string): PlaceHolderReplacer {
        if (!placeholder) throw new Error("Placeholder name is not provided.")
        return new PlaceHolderReplacer(placeholder)
    }


    public replaceBy(newValue: string): PlaceHolderReplacer {
        if (!this.placeholdername) throw new Error("Placeholder name is not set. Please call placeHolder first.")
        this.newValue = newValue
        return this
    }


    private constructor(placeholder: string) {
        this.placeholdername = placeholder
        if (!this.placeholdername) throw new Error("Placeholder name is not set. Please call placeHolder first.")
    }


    // Replace {TARGET-VALUE} in the URI with the actual target value.
    replaceUriFrom(request_uri_from_globalConfig: string): string {
        return request_uri_from_globalConfig.replaceAll(this.placeholdername, this.newValue)
    }

    // Replace {TARGET-VALUE} in the JSON data with the actual target value.
    replaceJsonObjFrom(jsonData: Object): Object {
        const jsonString = JSON.stringify(jsonData)
        const updatedJsonString = jsonString.replaceAll(this.placeholdername, this.newValue)
        return JSON.parse(updatedJsonString)
    }



}