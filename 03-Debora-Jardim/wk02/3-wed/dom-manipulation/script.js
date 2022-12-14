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
  document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
    }"`
}

randomQuote()
// Part 1
const shortenPageTitle = () => {
  document.querySelector(`#main-title`).textContent = "Im DDOM"
}
shortenPageTitle()

// Part 2
const changeBodyBgColor = () => {
  document.querySelector('body').style.backgroundColor = 'white'

}
changeBodyBgColor()

// Part 3
const removeLastFavoriteThing = () => {
  const list = document.querySelector('#favorite-things')
  const last = list.children[5]
  last.remove()
}
removeLastFavoriteThing()

// Part 4
const makeSpecialTitlesBigger = () => {
  const main = document.querySelectorAll('.special-title')
  for (let i = 0; i < main.length; i++) {
    const bigger = main[i]
    console.log(bigger)
    bigger.style.fontSize = "2rem"
  }
}
makeSpecialTitlesBigger()

// Part 5
const RemoveChicagoRace = () => {
const list = document.querySelector('#past-races')
const last = list.children[3]
last.remove() 
}
RemoveChicagoRace()

// Part 6
const addPastRace = () => {
const newCity = document.querySelector('#past-races');
const para = document.createElement('li'); 
para.textContent = "Buenos Aires"; 
newCity.appendChild(para);
}
addPastRace()

// Part 7 -- precisa melhorar a tecnica de google it as coisas
const createNewBlogPost = () => {
const inBody = document.querySelector('body');
const newDiv = document.createElement('div');
const NewH2 = document.createElement('h2');
const newContent = document.createTextNode('The race for Dulce de Leche');
newDiv.appendChild(newContent);
const currentDiv = document.getElementById('div .blog-post')
document.body.insertBefore(newDiv, currentDiv);
const newBlog = document.querySelector('#blog-post');
const para = document.createElement('p');
para.textContent = "That was a nice race";
newBlog.appendChild(para);
const text = document.createTextNode('Lorem ipsum dolor sit. Elementum curabitur vitae nunc sed velit dignissim. Ut etiam sit amet nisl purus in mollis.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
}
createNewBlogPost() /* AHHH A BUNCH OF CODE AND DIDN'T WORKKKKK
