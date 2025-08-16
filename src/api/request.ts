interface IRequestArgs {
    URI: string,
    methodType: string,
    accessToken: string,
    bodyJson: Object
}

export async function sendRequest({ URI, methodType, accessToken, bodyJson }: IRequestArgs): Promise<void> {
    const response: Response = await fetch(URI, {

        method: methodType,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        body: JSON.stringify(bodyJson),
        signal: AbortSignal.timeout(5000)
    }).catch(error => {
        throw Error(`Network error: [${error.message}] for URI: [${URI}]`)
    })

    if (!response.ok) throw Error(`Request failed with status ${response.status} for URI: ${URI}`)
    console.log(`Request sent successfully for URI: ${URI}`)
}