const quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

// Random quote of the day generator
const randomQuote = () => {
  document.querySelector('#quote-of-the-day').textContent = 
      quotes[Math.floor(Math.random() * quotes.length)]
    }


randomQuote()

///////////////////////////////////////////////////////////////////////////


// Part 1 // 

document.getElementById("main-title").innerHTML = "Welcome to my homepage";
const shortenPageTitle = () => { 
  // document.getElementById().innerHTML = "Welcome to my homepage";

}

// Part 2
document.body.style.backgroundColor = "teal";
const changeBodyBgColor = () => {

}

///////////////////////////////////////////////
// Part 3 
const e = document .querySelector("li:last-child");
e.parentElement.removeChild(e)
const removeLastFavoriteThing = () => {

}

//////////////////////////////////////////////
// Part 4 //

// const specialTitles = document.querySelector('special-title'); 

const makeSpecialTitlesBigger = () => {
  const specialTitles = document.getElementsByClassName('special-title');
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem';
  }
}

/////////////////////////////////////////////////////
// Part 5 // not finished 

const RemoveChicagoRace = () => {
  const pastRaces = document.querySelector('side-bar');
  const chicago = pastRaces.querySelector('li')[3];
  pastRaces.removeChild(chicago);
}

//////////////////////////////////////////////////////
// Part 6 //not finished
// document.getElementById("past-races").innerHTML.add = "Sydney";
// li.classList.add('Sydney');

const past = document.querySelector('past-races');
li.classList.add('Sydney');
const addPastRaces = () => {
} 


//////////////////////////////////////////////////////
// Part 7
const createNewBlogPost = () => {

}
//Got this online, I just tried to change/understand it

const newBlogPost = document.createElement('div');
newBlogPost.className = 'blog-post purple';
const newBlogPostTitle = document.createElement('h2');
newBlogPostTitle.innerHTML = 'Hong Kong';
const newBlogPostText = document.createElement('p');
newBlogPostText.innerHTML = 'This was a fun race!';
newBlogPost.appendChild(newBlogPostTitle);
newBlogPost.appendChild(newBlogPostText);
document.getElementsByClassName('main')[0].appendChild(newBlogPost);
