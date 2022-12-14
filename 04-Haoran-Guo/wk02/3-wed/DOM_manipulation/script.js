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
  let title = document.querySelector('#main-title');
  // console.dir(title)
  return title.innerHTML = "Dom Toretto's Homepage";
}

shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
  document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  // console.log(`rgba(${Math.floor(Math.random()*16777215).toString(16)})`)
}

changeBodyBgColor();

// Part 3
const removeLastFavoriteThing = () => {
  const favourites = document.querySelector('#favorite-things');
  const items = favourites.querySelectorAll('li');
  const last = items[items.length-1];
  // console.log(items)
  last.remove();

}

removeLastFavoriteThing();

// Part 4
const makeSpecialTitlesBigger = () => {
  const titles = document.querySelectorAll('.special-title');
  // console.log(titles);
  Array.from(titles).forEach(title => {
    title.style.fontSize = '2rem';
  })


}

makeSpecialTitlesBigger();

// Part 5
const RemoveChicagoRace = () => {
  const pastRace = document.querySelector("#past-races");
  const races = pastRace.children; // this is a nodeList

  // console.log(races)
  // console.log(Array.from(races)[3].innerText)

  Array.from(races).forEach(r => {
    if (r.innerText.includes("Chicago")) {
      r.remove();
    }
  })
  // console.log(Array.from(races)[3].innerText)

}
RemoveChicagoRace()

// Part 6
const addPastRace = () => {
  const pastRace = document.querySelector("#past-races");
  const newLi = document.createElement('li');
  newLi.innerText = 'Melbourne';
  pastRace.appendChild(newLi);
  // console.log(pastRace)
}

addPastRace();

// Part 7
const createNewBlogPost = () => {
  const main = document.querySelector(".main");
  const newDiv = document.createElement("div");
  newDiv.classList.add("blog-post");

  const newH2 = document.createElement("h2");
  newH2.innerText = "Melbourne"

  const newP = document.createElement("p");
  newP.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"

  newDiv.append(newH2);
  newDiv.append(newP);
  main.appendChild(newDiv);

  // console.log(newDiv)
  // console.log(main.children)

}

createNewBlogPost();