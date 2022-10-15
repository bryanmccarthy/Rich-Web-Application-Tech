// Fetch user by username
const fetchUsers = async (url) => {
  return fetch(`https://api.github.com/users/${url}`)
    .then((response) => response.json());
}

// Fetch repositories 
const fetchRepos = async (url) => {
  return fetch(`https://api.github.com/users/${url}/repos`)
    .then((response) => response.json());
}

/* 
log for now
*/
const userProfile = async () => {
  const user = await fetchUsers('test');

  const name = user.name;
  console.log(name);
  const username = user.login;
  console.log(username);
  const email = user.email;
  console.log(email);
  const location = user.location;
  console.log(location);
  const gists = user.public_gists;
  console.log(gists);
}

const userRepos = async () => {
  const repos = await fetchRepos('test');

  repos.forEach(repo => console.log(`Name: ${repo.name} | Description: ${repo.description}`));
}

userProfile();
userRepos();