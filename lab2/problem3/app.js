class UserProfile {
  constructor(name, username, email, location, gists) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.location = location;
    this.gists = gists;
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
const getUserProfile = async () => {
  const user = await fetchUser('bryanmccarthy');
  const userProfile = new UserProfile(user.name, user.username, user.email, user.location, user.gists);
}

// Get user repositories 
const getUserRepos = async () => {
  const repos = await fetchRepos('test');

  repos.forEach(repo => console.log(`Name: ${repo.name} | Description: ${repo.description}`));
}
