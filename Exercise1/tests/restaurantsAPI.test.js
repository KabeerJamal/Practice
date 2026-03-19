//fetch api call succeeds + handle respinse succeeds
//fetch api call succeeds + handle response failes
//fetch api call fails
jest.mock('../src/constants/apiConstants', () => ({
    API_CONSTANTS: {
        GET_RESTAURANTS: (postcode) => `https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`
    }
}))
jest.mock('../src/utils/apiUtils', () => ({
    handleResponse : jest.fn()
}))
global.fetch = jest.fn()
const fakePostcode = 1234;

const {getRestaurants} = require('../src/api/restaurantsAPI')
const { API_CONSTANTS } = require('../src/constants/apiConstants')
const { handleResponse } = require('../src/utils/apiUtils')


test('Success route, returns restaurant data for valid postcode', async () => {
    fetch.mockReturnValue({
        ok: true,
        json: () => Promise.resolve({"Name": "Kababjees"})  
    })
    handleResponse.mockReturnValue({"Name": "Kababjees"})

    await expect(getRestaurants(fakePostcode)).resolves.toStrictEqual({"Name": "Kababjees"})

})


test('Error in handle response', async () => {
    fetch.mockReturnValue({
        ok: true,
        json: () => Promise.resolve({"Name": "Kababjees"})  
    })
    handleResponse.mockImplementation(() => {throw new Error("Somehting went wrong")})

    await expect(getRestaurants(fakePostcode)).rejects.toThrow(new Error("Somehting went wrong"))

})


test('Error in fetch call', async () => {
    fetch.mockImplementation(() => {throw new Error('network error')})
    await expect(getRestaurants(fakePostcode)).rejects.toThrow(new Error('network error'))

})