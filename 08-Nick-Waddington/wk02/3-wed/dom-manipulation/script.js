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
  document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
}

randomQuote()

// Part 1

const shortenPageTitle = () => {
  const title = document.querySelector('#main-title')
  title.textContent = 'It\'s all about Family'
  return title
}
shortenPageTitle()
// Part 2
const changeBodyBgColor = () => {
  const backgroundColour = document.querySelector('body')
  backgroundColour.style.backgroundColor = 'fuchsia'
  return backgroundColour
}
changeBodyBgColor()
// Part 3
const removeLastFavoriteThing = () => {

  const list = document.querySelector('#favorite-things')
  const listItem = list.children[5]
  listItem.remove()
  return listItem
}
removeLastFavoriteThing()
// Part 4
const makeSpecialTitlesBigger = () => {

  const titles = document.querySelectorAll('.special-title')

  console.log(titles);
  for (let i=0; i<titles.length; i++){
    titles[i].style.fontSize = '2rem'
  }
}
makeSpecialTitlesBigger()
// Part 5
const RemoveChicagoRace = () => {
  const pastRaces = document.querySelector('#past-races')
  const listItem = pastRaces.children[3]
  listItem.remove()
  return listItem
}
RemoveChicagoRace()
// Part 6
const addPastRace = () => {
  const pastRaces = document.querySelector('#past-races')
  pastRaces.append('Berlin')
  return console.log(pastRaces);
}
addPastRace()
// Part 7
const createNewBlogPost = () => {
  const newBlog = document.createElement('div')
  const container = document.querySelector('.main')
  container.append(newBlog)
  // console.log(container);
  const newHeading = document.createElement('h2')
  newBlog.append(newHeading)
  // console.log(container);
  const newPara = document.createElement('p')
  newBlog.append(newPara)
  newHeading.textContent = 'Berlin'
  newPara.textContent = 'I like to go fast.'
  // newBlog.classList.add('blog-post purple')
  newBlog.className = ('blog-post purple')
  newHeading.style.color = '#fff'
  newHeading.style.fontSize = '2em'
  newPara.style.fontSize = '2em'
  console.log(container);
}
createNewBlogPost()