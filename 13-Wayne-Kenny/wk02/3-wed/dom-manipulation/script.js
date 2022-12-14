const quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

// Random quote of the day generator
// const randomQuote = () => {
//   document.querySelector('#quote-of-the-day').textContent = `"${
//       quotes[Math.floor(Math.random() * quotes.length)]
//     }"`
// }

// randomQuote()

// Part 1
// const shortenPageTitle = () => {
//   const mainTitle = document.querySelector('#main-title');
//   mainTitle.textContent = 'Welcome to Dom Torettos home page';
//   console.log(mainTitle);
// }
// shortenPageTitle();

// Part 2
// const changeBodyBgColor = () => {
// const mainBody = document.querySelector('body')
// mainBody.style.backgroundColor = 'lightblue';

// }
// changeBodyBgColor()

// Part 3
// const removeLastFavoriteThing = () => {
// const listItems = document.querySelectorAll('#favorite-things li')
// // console.log(listItems);
// const leastFav = listItems[listItems.length - 1];
// // console.log(leastFav)
// leastFav.remove();
// }
// removeLastFavoriteThing()

// Part 4
// const makeSpecialTitlesBigger = () => {
// const specialTitles = document.querySelectorAll('.special-title')
// // specialTitles[0].style.fontSize = '2rem'
// // specialTitles[1].style.fontSize = '2rem'
// for (let i = 0; i < specialTitles.length; i++){
//   specialTitles[i].style.fontSize = '2rem';

// }
// }
// makeSpecialTitlesBigger()

// Part 5
// const RemoveChicagoRace = () => {
//   const listItems = document.querySelectorAll('#past-races li');
//   const noRace = listItems[3];
//   noRace.remove();
//   console.log(noRace)
// }
// RemoveChicagoRace()

// Part 6
// const addPastRace = () => {
//   const listItems = document.querySelector('#past-races');
//   console.log(listItems)
//   const newLi = document.createElement('li');
//   newLi.innerHTML = 'Sydney';
//   listItems.append(newLi);
//   console.log(listItems)

// }
// addPastRace()

// Part 7
// const createNewBlogPost = () => {
// const mainDiv = document.querySelector('.main');
// const newDiv = document.createElement('div');
// const newTitle = document.createElement('h2');
// const newPara = document.createElement('p');
// console.log(newDiv, mainDiv)
// mainDiv.append(newDiv)
// newDiv.append (newTitle)
// newDiv.append(newPara)
// newPara.innerHTML = 'Drove with Sharks';
// newTitle.innerText = 'Sydney'
// newDiv.className = 'blog-post purple'
// newTitle.style.color = 'white'
// newTitle.style.fontSize = '2rem'
// // console.log(mainDiv)
// }
// createNewBlogPost()