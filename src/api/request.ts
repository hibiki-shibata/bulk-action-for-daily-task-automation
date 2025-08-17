interface IRequestArgs {
    URI: string,
    methodType: string,
    securityHeaderName: string,
    accessToken: string,
    bodyJson: Object
}

export async function sendRequest({ URI, methodType, securityHeaderName, accessToken, bodyJson }: IRequestArgs): Promise<boolean> {
    const response: Response = await fetch(URI, {

        method: `${methodType}`,
        headers: {
            'Content-Type': 'application/json',
            [securityHeaderName]: `${accessToken}`
        },
        body: JSON.stringify(bodyJson),
        signal: AbortSignal.timeout(5000)
    }).catch(error => {
        return new Response(null, { status: 500, statusText: error.message });
    })

    if (!response.ok) console.warn(`Error: ${response.status} ${response.statusText}`)

    return response.ok

}