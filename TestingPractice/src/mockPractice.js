function fetchUser(userId) {
  // imagine this calls a real API
}

function greetUser(userId) {
  const user = fetchUser(userId); // pretend this calls an API
  return `Hello, ${user.name}!`;
}

module.exports = {greetUser, fetchUser}
//TODO: why is this giving an error
/**
 * On the first part — here's why requireActual didn't save you:
When greetUser and fetchUser are in the same file, greetUser has a direct reference to fetchUser.
 Jest mocking works by replacing the module's exports — but greetUser doesn't call the export, it calls the local function directly. 
 So the mock never intercepts it. When you split files, greetUser imports fetchUser from another module. Jest can intercept that import 
 and swap it with the fake.
 */