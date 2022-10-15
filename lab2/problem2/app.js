
// Display post titles with more than six words
const displayPostTitles = async () => {
  const postTitles = await getPostTitles();
  console.log(postTitles);
}

// Get post titles with more than six words
const getPostTitles = async () => {
  const posts = await fetchPosts();
  const postTitles = [];

  posts.forEach(post => postTitles.push(post.title));
  return postTitles.filter(title => title.split(' ').length > 6);
}

// Fetch posts 
const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}

displayPostTitles();