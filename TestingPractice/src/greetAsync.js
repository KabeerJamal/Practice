const {fetchUser} = require('./apiAsync')
async function greetUser(userId) {
  const user = await fetchUser(userId);
  return `Hello, ${user.name}!`;
}

module.exports = { greetUser };