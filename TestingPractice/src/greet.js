const { fetchUser } = require('./api');

function greetUser(userId) {
  const user = fetchUser(userId);
  return `Hello, ${user.name}!`;
}

module.exports = { greetUser };