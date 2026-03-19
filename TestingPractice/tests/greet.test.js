const { greetUser } = require('../src/greet');
jest.mock('../src/api', () => ({
  fetchUser: jest.fn()
}));
//Mock first → then import → so you receive the mocked function you can control.
const {fetchUser} = require('../src/api')

test('greets user by name', () => {
  fetchUser.mockReturnValue({ name: 'alice' })
  const result = greetUser(1);
  expect(result).toBe('Hello, alice!');
});

test('api throws an error', () => {
  fetchUser.mockImplementation(() => {throw Error("api throws an error")});
  expect(() => greetUser(1)).toThrow("api throws an error")

})