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
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "Welcome to DOM Torretto's page";
  console.log(mainTitle)
}
shortenPageTitle()
// Part 2
const changeBodyBgColor = () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'green'
}
changeBodyBgColor ()
// Part 3
const removeLastFavoriteThing = () => {
  const domFav = document.querySelector('#favorite-things');
  const li = domFav.children[5]
  li.remove ()
  console.log(li)
}
removeLastFavoriteThing()
// Part 4
const makeSpecialTitlesBigger = () => {
  const biggerTitles = document.querySelectorAll ('.special-title')
  for (let biggerTitle of biggerTitles)
  biggerTitle.style.fontSize = '2 rem'
  console.log(biggerTitles)
}
makeSpecialTitlesBigger ()
// Part 5
const RemoveChicagoRace = () => {
  const chicagoRemove = document.querySelector ('#past-races');
  const li = chicagoRemove.children[3]
  li.remove()
  console.log(li)
}
RemoveChicagoRace ()
// Part 6
const addPastRace = () => {
  const futureRace = document.createElement("li")
  futureRace.textContent = "Seoul"
  const pastRaces = document.querySelector('#past-races')
  pastRaces.append(futureRace)
  console.log(pastRaces)
}
addPastRace()

// Part 7
const createNewBlogPost = () => {
  const h1 = document.createElement("h1")
  h1.textContent = "Seoul"

  const p = document.createElement("p")
  p.textContent = "I drove off a building into another!"

  const div = document.createElement("div")
  div.classList.add("blog-post", "purple")
  div.append(h1)
  div.append(p)

  const mainStuff = document.querySelector('.main')
  mainStuff.append(div)
}
createNewBlogPost()
