async function fetchUser(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  return response.json();
}
module.exports = { fetchUser };