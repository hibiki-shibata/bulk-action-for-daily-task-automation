import { sendRequestMethodArgType } from '../type/sendRequestMethodArgType.js'


export async function sendRequest({ URI, methodType, securityHeaderName, accessToken, bodyJson }: sendRequestMethodArgType): Promise<boolean> {
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
     
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) console.warn(`Error: ${response.status} ${response.statusText}`)

    return response.ok

}