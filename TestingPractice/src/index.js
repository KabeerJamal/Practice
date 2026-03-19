function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("input must be number")
    }
    return a + b;
}
function isAdult(age) {
    return age>=18
}

function fetchUser(userId) {
  // imagine this calls a real API
}

function greetUser(userId) {
  const user = fetchUser(userId); // pretend this calls an API
  return `Hello, ${user.name}!`;
}

module.exports = { add, isAdult };