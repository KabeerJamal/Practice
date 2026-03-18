const API_BASE_URL = `https://uk.api.just-eat.io`

const API_CONSTANTS = {
    GET_RESTAURANTS : (postcode) => `${API_BASE_URL}/restaurants/bypostcode/${postcode}`
}

module.exports = {API_CONSTANTS}