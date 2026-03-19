const {add, isAdult} = require("../src/index")

test('adds 2 and 3 to get 5', () => {
    expect(add(2,3)).toBe(5)
})

test('adds with negative decimals', () => {
    expect(add(-2.3, -5.1)).toBeCloseTo(-7.4)
})

test('adds with a invalid input', () => {
    expect(() => add("2",3)).toThrow('input must be number')
})

test("age 17", () => {
    expect(isAdult(17)).toBe(false)
})
test("age 18, boundary check", () => {
    expect(isAdult(18)).toBe(true)
})
test("age 19", () => {
    expect(isAdult(19)).toBe(true)
})
