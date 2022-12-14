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
const shortenPageTitle = () => {
  document.querySelector('#main-title').textContent = 'Hi! I am DOM'
}
shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
  document.querySelector('body').style.backgroundColor = 'fuchsia';
}
changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
  //let childNode = parentNode.removeChild(childNode);
  const list = document.querySelector('#favorite-things');
  console.log(list.children)
  list.removeChild(list.lastElementChild);
}
removeLastFavoriteThing()

// Part 4
const makeSpecialTitlesBigger = () => {
  for(i=0;i<2;i++){
  document.querySelectorAll('.special-title')[i].style.fontSize = '2em'
  }
}
makeSpecialTitlesBigger()

// Part 5
const RemoveChicagoRace = () => {
  const list = document.querySelectorAll('#past-races li')
  let cities = [];
  for (let i = 0; i< list.length;i++){
    cities.push(list[i].innerText) 
  }
  const chicagoindex = cities.indexOf('Chicago');
  const chicago = list[chicagoindex]
  chicago.remove()

}
RemoveChicagoRace()

// Part 6
const addPastRace = () => {
  const newLi = document.createElement('li')
  newLi.textContent = 'Bangkok'
  const list = document.querySelector('#past-races')
  console.log(list)
  list.append(newLi)
}
addPastRace()

// Part 7
const createNewBlogPost = () => {
  const newDiv = document.createElement('div')
  newDiv.className = "blog-post purple"
  const newh1 = document.createElement('h1')
  newh1.innerText = 'Bangkok'
  const newP = document.createElement('p')
  newP.innerText = 'I STOLE A GIANT BANK VAULT WITH MY CAR!'

  // newDiv.appendChild(newh1, newP)
  // console.log(newDiv)
  newDiv.append(newh1, newP)
  const list = document.querySelector('.main')
  list.append(newDiv)
  // console.log(list)
}
createNewBlogPost()
