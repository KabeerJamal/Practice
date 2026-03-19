const {greetUser} = require('../src/greetAsync')

jest.mock('../src/apiAsync', () => ({
  fetchUser: jest.fn()
}));

//Mock first → then import → so you receive the mocked function you can control.
const {fetchUser} = require('../src/apiAsync')


/*
Perfect. You got it exactly right.
A promise is just a box. To look inside:

In normal code: await or .then/.catch
In Jest: .resolves or .rejects — then chain your normal matchers after

That's all there is to it.

If we dont use .resolves it returns promise and then we basically compairng promise with .tobe("Hello, alice!")?

Exactly. Try it yourself, remove resolves and see what happens. 
That error message will make it stick better than me explaining it.

 expect(received).toBe(expected) // Object.is equality

    Expected: "Hello, alice!"
    Received: Promise {}
*/

test('greets user by name', async () => {
  fetchUser.mockReturnValue({ name: 'alice' })
  await expect(greetUser(1)).resolves.toBe('Hello, alice!')
});

test('api throws an error',async () => {
  fetchUser.mockImplementation(() => {throw Error("api throws an error")});
  await expect(greetUser(1)).rejects.toThrow('api throws an error');
})