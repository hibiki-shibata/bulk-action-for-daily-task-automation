import { IPlaceHolderReplacer } from "../type/placeHolderReplacerType.js";



export class PlaceHolderReplacer implements IPlaceHolderReplacer {
    private placeholderName: string
    private newValue!: string;



    public static for_placeHolder(placeholder: string): PlaceHolderReplacer {
        if (!placeholder) throw new Error("❌Placeholder name is not provided.")
        return new PlaceHolderReplacer(placeholder)
    }


    public replaceWith(newValue: string): PlaceHolderReplacer {
        if (!newValue) throw new Error("❌Placeholder name is not set. Please call placeHolder first.")
        this.newValue = newValue
        return this
    }


    private constructor(placeholder: string) {
        this.placeholderName = placeholder
        if (!this.placeholderName) throw new Error("Placeholder name is not set. Please call placeHolder first.")
    }


    // Replace [PLACE_HOLDER] in the URI with the actual target value.
    applyToUri(request_uri_from_globalConfig: string): string {
        if (!request_uri_from_globalConfig) throw new Error("❌Request URI is not provided.")
        return request_uri_from_globalConfig.replaceAll(this.placeholderName, this.newValue)
    }


    // Replace [PLACE_HOLDER] in the JSON data with the actual target value.
    applyToJson(jsonData: Object): Object {
        if (!jsonData) throw new Error("❌JSON data is not provided.")
        return JSON.parse(JSON.stringify(jsonData).replaceAll(this.placeholderName, this.newValue))
    }

}