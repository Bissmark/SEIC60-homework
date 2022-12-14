const quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

// Random quote of the day generator
const randomQuote = () => {
  document.querySelector("#quote-of-the-day").textContent = `"${
    quotes[Math.floor(Math.random() * quotes.length)]
  }"`;
};

randomQuote();

// Part 1
const shortenPageTitle = () => {
  document.querySelector("#main-title").innerHTML =
    "My name is BOM, I can change html elements.";
};
shortenPageTitle();

// Part 2
const changeBodyBgColor = () => {
  document.body.style.backgroundColor = "yellow";
};
changeBodyBgColor();

// Part 3
const removeLastFavoriteThing = () => {
  let list = document.querySelector("#favorite-things");
  let listItems = list.querySelectorAll("li");
  let lastItem = listItems[listItems.length - 1];
  list.removeChild(lastItem);
};
removeLastFavoriteThing();

// Part 4
const makeSpecialTitlesBigger = () => {
  let x = document.querySelectorAll(".special-title");
  for (let i = 0; i < x.length; i++) {
    x[i].style.fontSize = "2rem";
  }
};
makeSpecialTitlesBigger();

// Part 5
const RemoveChicagoRace = () => {
  let races = document.querySelector("#past-races");
  for (let race of races.children) {
    if (race.textContent === "Chicago") {
      race.remove();
    }
  }
};
RemoveChicagoRace();

// Part 6
const addPastRace = () => {
  const newCity = document.createElement("li");
  newCity.innerText = "Sydney";
  document.querySelector("#past-races").appendChild(newCity);
};
addPastRace();

// Part 7
const createNewBlogPost = () => {
  const newDiv = document.createElement("div");
  newDiv.className = "blog-post purple";
  const newH2 = document.createElement("h2");
  newH2.innerText = "Movie Facts";
  const newP = document.createElement("p");
  newP.innerText = "Is this movie good?";
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  let newMain = document.querySelector(".main");
  newMain.appendChild(newDiv);
};
createNewBlogPost();
