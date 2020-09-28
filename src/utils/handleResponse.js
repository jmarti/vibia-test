export function handleResponse(response) {
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw Error(message);
    }

    return response.json();
}