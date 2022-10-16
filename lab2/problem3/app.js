class UserProfile {
  constructor(avatar_url, name, login, email, location, public_gists) {
    this.avatar_url = avatar_url,
    this.name = name;
    this.login = login;
    this.email = email;
    this.location = location;
    this.public_gists = public_gists;
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
const getUserProfile = async (username) => {
  const user = await fetchUser(username);
  const userProfile = new UserProfile(user.avatar_url, user.name, user.login, user.email, user.location, user.public_gists);
  displayUser(userProfile);
}

// Get user repositories 
const getUserRepos = async (username) => {
  const repos = await fetchRepos(username);
  repos.forEach(repo => console.log(`Name: ${repo.name} | Description: ${repo.description}`));
}

const displayUser = (userProfile) => {
  document.getElementById('avatar').src = userProfile.avatar_url;
  document.getElementById('name').innerHTML = userProfile.name;
  document.getElementById('login').innerHTML = userProfile.login;
  document.getElementById('location').innerHTML = userProfile.location;
  document.getElementById('gists').innerHTML = userProfile.gists;
}

// Search elements
const search = {
  input: document.getElementById('search-input'),
  button: document.getElementById('search-button')
}

// User input value 
search.button.addEventListener('click', e => {
  e.preventDefault();  
    getUserProfile(search.input.value);
    getUserRepos(search.input.value);
})
