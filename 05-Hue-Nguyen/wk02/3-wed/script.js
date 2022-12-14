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
  document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
    }"`
}

randomQuote()

// Part 1
const shortenPageTitle = () => {
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = 'DOM Toretto';
  console.log(mainTitle);

}
shortenPageTitle();

// Part 2
const changeBodyBgColor = () => {
  const body = document.querySelector('body');
  console.log(body);
  body.style.backgroundColor = '#eab676';
}
changeBodyBgColor();

// Part 3
const removeLastFavoriteThing = () => {
  const favThings = document.querySelectorAll('#favorite-things li');
  console.log(favThings)
  const lastThing = favThings[favThings.length - 1];
  // console.log(lastThing);
  lastThing.remove();
}
removeLastFavoriteThing();

// Part 4
const makeSpecialTitlesBigger = () => {
  const specialTitles = document.querySelectorAll('.special-title');
  // console.log(specialTitles);
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem';
  }
}
makeSpecialTitlesBigger();

// Part 5
const RemoveChicagoRace = () => {
  const pastRaces = document.querySelectorAll('#past-races li');
  // console.log(pastRaces);

  let cities = [];
  for (let i = 0; i < pastRaces.length; i++) {
    cities.push(pastRaces[i].textContent) 
  }
  // console.log(cities)
  const chicagoIndex = cities.indexOf('Chicago');
  // console.log(chicagoIndex)
  const chicago = pastRaces[chicagoIndex];
  chicago.remove();
}
RemoveChicagoRace();

// Part 6
const addPastRace = () => {
  const newListEl = document.createElement('li');
  newListEl.innerText = 'HCM City';
  // console.log(newListEl)
  
  const pastRaces = document.querySelector('#past-races');
  pastRaces.appendChild(newListEl);
  // console.log(pastRaces);

}
addPastRace();

// Part 7
const createNewBlogPost = () => {
  const main = document.querySelector('.main');

  const newBlogDiv = document.createElement('div');
  newBlogDiv.className = 'blog-post purple';

  const newTitle = document.createElement('h2');
  newTitle.innerText = 'Manila';
  // style the title of the new blog
  newTitle.style.fontSize = '2em';
  newTitle.style.color = 'white';

  const newBlogPara = document.createElement('p');
  newBlogPara.innerText = 'RACE TO THE MOON';

  main.appendChild(newBlogDiv)
  newBlogDiv.appendChild(newTitle);
  newBlogDiv.appendChild(newBlogPara);
  // console.log(main);
};
createNewBlogPost();
