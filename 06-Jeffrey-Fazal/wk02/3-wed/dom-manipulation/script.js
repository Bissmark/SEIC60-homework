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
mainTitle = document.querySelector('#main-title')
newTtile = "Dom's Story"
mainTitle.innerHTML = newTtile
}

shortenPageTitle()


// Part 2
const changeBodyBgColor = () => {

const bgColor = document.querySelector('body')
bgColor.setAttribute('style','background-color: red')
}

changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
const favThings = document.querySelector('#favorite-things > li:nth-last-child(1)')
// const rmlstFav = parent.children[1]
favThings.remove()

}
removeLastFavoriteThing()

// Part 4
const makeSpecialTitlesBigger = () => {
const newTitlesize = document.querySelector(".special-title h1")
bgColor.setAttribute('style','text-size: 100')
}

// Part 5
const RemoveChicagoRace = () => {
const pastRaces = document.querySelector('#past-races > li:nth-child(4)')
pastRaces.remove()
}
RemoveChicagoRace()

// Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.

// Part 6
const addPastRace = () => {
const pastRaces = document.querySelector('#past-races')
const newCity = 'Sydney'
li = document.createElement("li")
li.appendChild(document.createTextNode(newCity));
pastRaces.appendChild(li)

}
addPastRace()
// Part 7

const createNewBlogPost = () => {

}
// createNewBlogPost() 