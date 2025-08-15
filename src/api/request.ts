import { globalConfig }from "../../resource/globalConfig.js"

export async function sendRequest(accessToken: string, requestURI: string, requestBodyJson: Object): Promise<boolean> {
    const response: Response = await fetch(requestURI, {

        method: globalConfig.requestMethod,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        body: JSON.stringify(requestBodyJson),
        signal: AbortSignal.timeout(5000)
    }).catch(error => {
        throw Error(`Network error: [${error.message}] for URI: [${requestURI}]`)
    })

    if (!response.ok) throw Error(`Request failed with status ${response.status} for URI: ${requestURI}`)
    console.log(`Request sent successfully for URI: ${requestURI}`)

    return response.ok
}