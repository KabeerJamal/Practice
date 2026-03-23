const {showDisplay} = require("../src/utils/displayUtils")

//1)input has length 3, isOpen 1 ->output has length 1, matches input
//2) input has length 3, isOpen 2 -> output has length 2, matches input
//3)input has length 3, isOpen 0 ->empty output
//4) input ahs length 3, isOpen 3 -> ouptut has length 2

const threeItemsOneOpen = [
  { Name: 'A', IsOpenNow: true, RatingStars: 4, CuisineTypes: [] },
  { Name: 'B', IsOpenNow: false, RatingStars: 3, CuisineTypes: [] },
  { Name: 'C', IsOpenNow: false, RatingStars: 2, CuisineTypes: [] }
]

const threeItemsTwoOpen = [
  { Name: 'A', IsOpenNow: true, RatingStars: 4, CuisineTypes: [] },
  { Name: 'B', IsOpenNow: true, RatingStars: 3, CuisineTypes: [] },
  { Name: 'C', IsOpenNow: false, RatingStars: 2, CuisineTypes: [] }
]

const threeItemsNoneOpen = [
  { Name: 'A', IsOpenNow: false, RatingStars: 4, CuisineTypes: [] },
  { Name: 'B', IsOpenNow: false, RatingStars: 3, CuisineTypes: [] },
  { Name: 'C', IsOpenNow: false, RatingStars: 2, CuisineTypes: [] }
]

const threeItemsAllOpen = [
  { Name: 'A', IsOpenNow: true, RatingStars: 4, CuisineTypes: [] },
  { Name: 'B', IsOpenNow: true, RatingStars: 3, CuisineTypes: [] },
  { Name: 'C', IsOpenNow: true, RatingStars: 2, CuisineTypes: [] }
]

test('returns 1 item when only 1 restaurant is open',()=>{
    const result = showDisplay(threeItemsOneOpen)

   const expected = threeItemsOneOpen.filter(x => x.IsOpenNow)

    expect(result).toStrictEqual(expected)

})

test('returns 2 item when only 2 restaurant is open',()=>{
    const result = showDisplay(threeItemsTwoOpen)

   const expected = threeItemsTwoOpen.filter(x => x.IsOpenNow)

    expect(result).toStrictEqual(expected)

})

test('returns 0 item when only 0 restaurant is open',()=>{
    const result = showDisplay(threeItemsNoneOpen)

   const expected = []

    expect(result).toStrictEqual(expected)

})

test('returns 2 item when  3 restaurant is open',()=>{
    const result = showDisplay(threeItemsAllOpen)

    const expected = threeItemsAllOpen.filter(x => x.IsOpenNow).slice(0, 2)


    expect(result).toStrictEqual(expected)

})