async function handleResponse(response) {
    let data
    try {
        data = await response.json()
    } catch {
        data = {}
    }
    if (!response.ok) {
        throw data.error
    }
    return data
}

//based on what api returns as error i can polish it here
function handleError(error) {
    throw error
}

module.exports = {handleResponse, handleError}