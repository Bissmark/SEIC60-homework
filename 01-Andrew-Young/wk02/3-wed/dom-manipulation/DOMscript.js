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
  let newTitle = document.querySelector("#main-title");
  newTitle.innerText = "DOMTOWN";
  // console.log(newTitle);
}

shortenPageTitle();

// Part 2
const changeBodyBgColor = () => {
  let newBody = document.querySelector("body")
  newBody.style.background-color; "green";
  console.log(changeBodyBgColor());

}

// Part 3
const removeLastFavoriteThing = () => {

}

// Part 4
const makeSpecialTitlesBigger = () => {

}

// Part 5
const RemoveChicagoRace = () => {

}

// Part 6
const addPastRace = () => {

}

// Part 7
const createNewBlogPost = () => {

}
