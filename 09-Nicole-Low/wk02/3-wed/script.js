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
    document.querySelector('#main-title').textContent = "Dom Toretto"
}
shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
    document.querySelector('body').style.backgroundColor = "pink" 
}
changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
    document.querySelector('#favorite-things').lastElementChild.remove()

}
removeLastFavoriteThing()

// Part 4
const makeSpecialTitlesBigger = () => {
    const specialTitles = document.querySelectorAll('.special-title')
    for (let specialTitle of specialTitles) {
        specialTitle.style.fontSize = "2rem"
    }
}
makeSpecialTitlesBigger()

// Part 5
const RemoveChicagoRace = () => {
    const pastRaces = document.querySelector('#past-races')
    pastRaces.children[3].remove()
}
RemoveChicagoRace()

// Part 6
const addPastRace = () => {
    const newRace = document.createElement("li")
    newRace.textContent = "Sydney"
    const pastRaces = document.querySelector('#past-races')
    pastRaces.append(newRace)
}
addPastRace()

// Part 7
const createNewBlogPost = () => {
    // new h2
    const newH1 = document.createElement("h1")
    newH1.textContent = "Sydney"
    //styling
    newH1.style.color = "#FFF"
    newH1.style.fontSize = "2em"

    // new p
    const newP = document.createElement("p")
    newP.textContent = "I JUMPED MY CAR OVER THE OPERA HOUSE!"

    // new div
    const newDiv = document.createElement("div")
    newDiv.classList.add("blog-post", "purple")
    newDiv.append(newH1)
    newDiv.append(newP)

    const mainContent = document.querySelector('.main')
    mainContent.append(newDiv)
}
createNewBlogPost()
