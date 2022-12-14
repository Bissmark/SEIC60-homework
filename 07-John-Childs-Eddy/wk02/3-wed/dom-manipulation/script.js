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
  let newTitle = document.querySelector(`#main-title`)
  newTitle.innerHTML = "Welcome to the DOM!"
}

// Part 2
const changeBodyBgColor = () => {
  let newBody = document.querySelector(`body`)
  newBody.style.background = `white`;
}

// Part 3
const removeLastFavoriteThing = () => {
  let listItems = document.querySelectorAll(`#favorite-things li`);
  let lastItem = listItems[listItems.length -1]
  lastItem.remove()
}

// Part 4
const makeSpecialTitlesBigger = () => {
  let specialItems = document.querySelectorAll(`.special-title`)
  for (let i = 0; i < specialItems.length; i++) {
  specialItems[i].style.fontSize = `2rem`;
  console.log(specialItems)
}
}

// Part 5
const RemoveChicagoRace = () => {
  let moreListItems = document.querySelectorAll(`#past-races li`);
  let removeItem = moreListItems[moreListItems.length -3]
  removeItem.remove()
}

// Part 6
const addPastRace = () => {
  const node1 = document.createElement("li");
  node1.innerHTML = `Sydney`;
  document.querySelector(`#past-races`).appendChild(node1);
}

// Part 7
const createNewBlogPost = () => {
const node = document.createElement("div");
node.className = "blog-post";
const newH1 = document.createElement("h1");
newH1.innerHTML = `Sydney`;
const newP = document.createElement("p");
newP.innerHTML = `Wow wow wow wow wow`;
document.querySelector(`.main`).appendChild(node);
node.appendChild(newH1);
node.appendChild(newP);
}

shortenPageTitle();
changeBodyBgColor();
removeLastFavoriteThing();
makeSpecialTitlesBigger();
RemoveChicagoRace();
addPastRace();
createNewBlogPost();

// console.log(lists[0].children)
// console.log(lists[1].children)
// console.log(li.style)

// console.log(container.children)

// li.style.backgroundColor = 'fuchsia'
// li.style.color = '#fff'

// li.className = 'selected'

// classList
// console.log(li.classList)
// li.classList.add('selected', 'add', 'more', 'infinity')
// li.classList.remove('add', 'more')
// li.classList.toggle('selected')
// li.classList.toggle('newclassname')

// img.src = 'https://placedog.net/700'
// img.alt = 'Random doggo'

// console.log(li.textContent)
// li.innerText = 'Hello World'
// li.innerHTML = 'Hello <strong>World</strong>'
// li.textContent = 'Hello <strong>World</strong>'

// append, prepend, after, before
// const newDiv = document.createElement('li')
// newDiv.textContent = 'New element'
// console.log(newDiv)
// container.append(newDiv)
// container.prepend(newDiv)
// li.after(newDiv)

// .remove
// li.remove()

// console.dir(li)

// // ONE
// let newTitle = document.querySelector(`#main-title`)
// newTitle.innerHTML = "Welcome to the DOM!"

// // // TWO
// let newBody = document.querySelector(`body`)
// newBody.style.background = `white`;

// // // THREE
// let listItems = document.querySelectorAll(`#favorite-things li`);
// let lastItem = listItems[listItems.length -1]
// lastItem.remove()

// // // FOUR
// let specialItems = document.querySelectorAll(`.special-title`)
// for (let i = 0; i < specialItems.length; i++) {
//   specialItems[i].style.fontSize = `2rem`;
//   console.log(specialItems)
// }

// // // FIVE
// let moreListItems = document.querySelectorAll(`#past-races li`);
// let removeItem = moreListItems[moreListItems.length -3]
// removeItem.remove()

// // SIX
// const node1 = document.createElement("li");
// node1.innerHTML = `Sydney`;
// document.querySelector(`#past-races`).appendChild(node1);


// //  SEVEN
// // {/* <div class="blog-post purple">
// //         <h1>Los Angeles</h1>
// //         <p>I RACED PAUL WALKER AND WON HIS CAR WITH MY CAR!</p>
// //       </div> */}

// // create: 1. div with blog post class. 2. create h1 and innerHTML should be Sydney. 
// // 3. create new child element <p> and append to bottom of div

// console.log(node)

// // const newH1 = document.createElement("h1");
// // newH1.innerHTML = `Sydney`;
// // document.querySelector(`.blog-post`).appendChild(newH1);

// // const newP = document.createElement("p");
// // newP.innerHTML = `Wow wow wow wow wow`;
// // document.querySelector(`.blog-post`).appendChild(newP);

// // console.log(raceItems)





