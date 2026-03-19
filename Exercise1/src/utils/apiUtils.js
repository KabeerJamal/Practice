async function handleResponse(response) {
    let data
    try {
        data = await response.json()
    } catch {
        data = {}
    }
    if (!response.ok) {
        const message = data?.error || { message: 'something', status: 404 }
        throw message
    }
    return data
}

//based on what api returns as error i can polish it here
function handleError(error) {
    throw error
}

module.exports = {handleResponse, handleError}