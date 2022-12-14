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
  document.querySelector("#main-title").innerHTML = "I'm DOM. Welcome!"
}
shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
  document.querySelector("body").style.backgroundColor = "gold"
}
changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
  const listFav = document.querySelector("#favorite-things")
  listFav.removeChild(listFav.children[listFav.childElementCount-1])
}
removeLastFavoriteThing()

// Part 4
const makeSpecialTitlesBigger = () => {
  //console.log(document.querySelectorAll(".special-title"));
  const specList = document.querySelectorAll(".special-title");
  // for (let i = 0; i < specList.length; i++) {
  for (let i of specList) {
    i.style.fontSize = '2rem';
  }
}
makeSpecialTitlesBigger()

// Part 5
const RemoveChicagoRace = () => {
  const listRac = document.querySelector("#past-races")
  for (let i of listRac.children) {
      if (i.innerHTML === 'Chicago') {
        i.remove()
      }
    }
  }
  // listRac.removeChild(listRac.children[listRac.childElementCount-1])

RemoveChicagoRace()

// Part 6
const addPastRace = () => {
  const listRac = document.querySelector("#past-races");
  const node = document.createElement("li");
  const textnode = document.createTextNode("Hong Kong");
  node.appendChild(textnode);
  listRac.appendChild(node);
}
addPastRace()

// Part 7
const createNewBlogPost = () => {
  const div = document.createElement("div");
  div.className = 'blog-post';
  const h2 = document.createElement("h2");
  const h2text = document.createTextNode("Hong Kong");
  h2.appendChild(h2text);
  const p = document.createElement("p");
  const ptext = document.createTextNode("Never Again!");
  p.appendChild(ptext);
  div.appendChild(h2);
  div.appendChild(p)
  document.querySelector(".main").appendChild(div);
}
createNewBlogPost()
