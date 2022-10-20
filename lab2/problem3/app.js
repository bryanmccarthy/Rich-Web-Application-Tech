// Search elements
const search = {
  input: document.getElementById('search-input'),
  button: document.getElementById('search-button'),
  error: document.getElementById('search-error')
}

// Table elements
const table = {
  table: document.querySelector("#repos-table")
}

// Fetch user by username
const fetchUser = async (url) => {
  return fetch(`https://api.github.com/users/${url}`)
    .then((response) => response.json())
    .catch(e => console.log(e));
}

// Fetch repositories 
const fetchRepos = async (url) => {
  return fetch(`https://api.github.com/users/${url}/repos`)
    .then((response) => response.json())
    .catch(e => console.log(e));
}

// Get user profile and create a new UserProfile object
const getUser = async (username) => {
  const user = await fetchUser(username);
  const repos = await fetchRepos(username);
  user.message === "Not Found" ? search.error.innerHTML = `${username} was not found` : displayUser(user, repos);
}

// Display user profile and repos
const displayUser = (user, repos) => {
  table.table.innerHTML = ""; // Remove existing repos
  document.getElementById('avatar').src = user.avatar_url;
  document.getElementById('name').innerHTML = user.name ? user.name : "no name :(";
  document.getElementById('login').innerHTML = user.login;
  document.getElementById('email').innerHTML = user.email ? user.email : "no email :(";
  document.getElementById('location').innerHTML = user.location ? user.location : "no location :(";
  document.getElementById('gists').innerHTML = user.public_gists;
  repos.forEach(repo => {
    addRepoToTable(repo.name, repo.description);
  });
}

// Add repository row into table
const addRepoToTable = (name, description) => {
  const repoRow = table.table.insertRow(table.table.rows.length);
  const repoName = repoRow.insertCell(0);
  const repoDescription = repoRow.insertCell(1);
  repoName.innerHTML = name;
  repoDescription.innerHTML = description;
}

const clearSearch = () => {
  search.input.value = "";
}

// Get user input value 
search.button.addEventListener('click', e => {
  e.preventDefault();  
    getUser(search.input.value);
    clearSearch();
})
