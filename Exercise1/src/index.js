const {POSTCODE} = require("./constants/processInput")
const {showDisplay} = require("./utils/displayUtils")
const {getRestaurants} = require("./api/restaurantsAPI")

async function showRestaurants() {
    if (!POSTCODE) {
        throw new Error("Please enter an input!")
    }
    
    try {
        const data = await getRestaurants(POSTCODE)

        showDisplay(data.Restaurants)

    } catch (error) {
        throw error
    }
   

}
showRestaurants()