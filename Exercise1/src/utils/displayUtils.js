
function showDisplay(data) {
        let i = 0;
        for (const item of data){

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

module.exports = {showDisplay}