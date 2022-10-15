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

// Display word frequencies for each post body
const displayPostBodyWordFrequencies = async () => {
  const frequencies = await getWordFrequencies();
  console.log(frequencies);
}

// Get the frequencies of words for each post body
const getWordFrequencies = async () => {
  const posts = await fetchPosts();
  let postBodyContent = [];
  let postBodyWords = [];

  posts.forEach(post => postBodyContent.push(post.body));
  postBodyContent = postBodyContent.flatMap(body => body.split(' '));

  postBodyContent.forEach(word => postBodyWords.push(word.split(/\r?\n/)));
  postBodyWords = postBodyWords.flatMap(word => word);

  return postBodyWords.reduce(function(freqMap, word) {
    return freqMap[word] ? ++freqMap[word] : freqMap[word] = 1, freqMap
  }, {});
}

// Fetch posts 
const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}

displayPostTitles();
displayPostBodyWordFrequencies();