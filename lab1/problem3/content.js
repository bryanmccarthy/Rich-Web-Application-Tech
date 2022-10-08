//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

let catBreeds = [
  "Devon Rex",
  "Abyssinian",
  "Sphynx",
  "Scottish Fold",
  "American Shorthair",
  "Persian",
  "British Shortahir",
  "Ragdoll",
  "Exotic Shorthair"
]

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length);
    imgs[i].src = catsImages[randomImg];
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}

//href link for every a element is changed to a cat video
const a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++){
    a[i].href = "https://www.youtube.com/watch?v=MUws5oXXYa8";
}

//button elements changed to say CAT
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].innerText = "Don't press me";
  buttons[i].style.backgroundColor = "lightgreen";
  buttonListener(buttons[i]);
}

//all elements 
const elements = document.getElementsByTagName("*");

//button pressed clears the page and says cat
function buttonListener(button) {
  button.addEventListener('click', e => {
    e.stopPropagation();
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerText = "cat";
    }
  });
}

//list elements show random cat breeds
const lists = document.getElementsByTagName("li");
for (let i = 0; i < lists.length; i++) {
  const catBreed = Math.floor(Math.random() * catBreeds.length);
  lists[i].innerText = catBreeds[catBreed];
}
