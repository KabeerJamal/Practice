const {handleResponse, handleError} = require(`../utils/apiUtils`)
const {API_CONSTANTS} = require(`../constants/apiConstants`)

async function getRestaurants(postcode){
    try {
        const restaurants = await fetch(API_CONSTANTS.GET_RESTAURANTS(postcode));

        //use await if you need access to data
        return await handleResponse(restaurants)//includes other possible status code error as well
    } catch (error) {
        throw error//failure to connect to API error only
    }
}

module.exports = {getRestaurants}