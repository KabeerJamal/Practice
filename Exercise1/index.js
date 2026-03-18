
const POSTCODE = process.argv[2];
const API_BASE_URL = `https://uk.api.just-eat.io`

const API_CONSTANTS = {
    GET_RESTAURANTS : (postcode) => `${API_BASE_URL}/restaurants/bypostcode/${postcode}`
}

async function getRestaurants(postcode) {
    try {
        const restaurants = await fetch(API_CONSTANTS.GET_RESTAURANTS(postcode));

        //use await if you need access to data
        return await handleResponse(restaurants)//includes other possible status code error as well
    } catch (error) {
        handleError(error)//failure to connect to API error only
    }
}

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


function showDisplay(data) {
        let i = 0;
        for (const item of data.Restaurants){

            if (i === 2) {
                return
            }
            if (item.IsOpenNow) {
                printFormat(item)
            }
            i++;
        }
}

function printFormat(item) {
    console.log("--- RESTAURANTS ---")
    console.log("Name: " + item.Name);
    console.log("Rating: " + item.RatingStars)
    let cuisineList = "";
    for (const cuisine of item.CuisineTypes) {
        if (cuisineList === "") {
            cuisineList += `${cuisine.Name}`
        } else {
            cuisineList += `, ${cuisine.Name}`
        }
        
    }
    console.log("Cuisine Types: " + cuisineList)
    console.log("")
}

async function showRestaurants() {
    if (!POSTCODE) {
        console.log("Please enter an input!")
    }

    try {
        const data = await getRestaurants(POSTCODE)

        showDisplay(data.Restaurants)

    } catch (error) {
        console.log(error)
    }
   

}
showRestaurants()