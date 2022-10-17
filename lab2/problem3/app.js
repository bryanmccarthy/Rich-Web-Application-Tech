class User {
  constructor(avatar_url, name, login, email, location, public_gists, repos) {
    this.avatar_url = avatar_url,
    this.name = name;
    this.login = login;
    this.email = email;
    this.location = location;
    this.public_gists = public_gists;
    this.repos = repos;
  }
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
  const newUser = new User(user.avatar_url, user.name, user.login, user.email, user.location, user.public_gists, repos);
  displayUser(newUser);
}

// Display user profile and repos
const displayUser = (user) => {
  document.getElementById('avatar').src = user.avatar_url;
  document.getElementById('name').innerHTML = user.name;
  document.getElementById('login').innerHTML = user.login;
  document.getElementById('location').innerHTML = user.location;
  document.getElementById('gists').innerHTML = user.public_gists;
  user.repos.forEach(repo => {
    console.log(`Repo name: ${repo.name} Repo desc: ${repo.description}`);
  });
}

// Search elements
const search = {
  input: document.getElementById('search-input'),
  button: document.getElementById('search-button')
}

// User input value 
search.button.addEventListener('click', e => {
  e.preventDefault();  
    getUser(search.input.value);

})
