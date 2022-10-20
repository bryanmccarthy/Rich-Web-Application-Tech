// Search elements
const search = {
  input: document.getElementById('search-input'),
  button: document.getElementById('search-button')
}

// Table elements
const table = {
  table: document.querySelector("#repos-table")
}

// Fetch user by username
const fetchUser = async (url) => {
  return fetch(`https://api.github.com/users/${url}`)
    .then((response) => response.json());
}

// Fetch repositories 
const fetchRepos = async (url) => {
  return fetch(`https://api.github.com/users/${url}/repos`)
    .then((response) => response.json());
}

// Get user profile and create a new UserProfile object
const getUser = async (username) => {
  const user = await fetchUser(username);
  const repos = await fetchRepos(username);
  displayUser(user, repos);
}

// Display user profile and repos
const displayUser = (user, repos) => {
  document.getElementById('avatar').src = user.avatar_url;
  document.getElementById('name').innerHTML = user.name ? user.name : ":(";
  document.getElementById('login').innerHTML = user.login;
  document.getElementById('email').innerHTML = user.email ? user.email : ":(";
  document.getElementById('location').innerHTML = user.location ? user.location : ":(";
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

// Get user input value 
search.button.addEventListener('click', e => {
  e.preventDefault();  
    getUser(search.input.value);
})
