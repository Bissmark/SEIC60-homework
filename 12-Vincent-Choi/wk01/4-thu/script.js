//Where's Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]]

// whereIsWaldo.splice(2,2)
// console.log(whereIsWaldo)
// whereIsWaldo[2][2] = "No one"
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[3][1][1])
//Array Restaurant
// const menu = [
//     "chicken",
//     "apple pie",
//     "soup",
//     "steak",
//     "salad",
//     "turkey sandwich",
//     "potato bake"
// ]
// console.log(menu.sort())

// console.log(menu.shift())
// console.log(menu)

// console.log(menu.splice(2,1))
// console.log(menu)

// const userChoice = prompt("What would you like to order?")
// if (menu.includes(userChoice)) {
//     console.log(`Sure, the ${userChoice} will be served in 15 minutes`)
// } else {
//     console.log("Sorry we don't have that")
// }
//Solar System Part 1
const solarSystem = [
    { name: 'Mercury', ringSystem: false, moons: [] },
    { name: 'Venus', ringSystem: false, moons: [] },
    { name: 'Earth', ringSystem: false, moons: ['The Moon'] },
    { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
    { name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
    { name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
    { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
  ]

const jupiterMoons = solarSystem[4].moons
console.log(jupiterMoons)

const neptuneMoon = solarSystem[solarSystem.length - 1].moons[1]
console.log(neptuneMoon)

solarSystem[1].moons.push('Endor')
venusMoons = solarSystem[1].moons
console.log(venusMoons)

solarSystem.push({ name: 'Pluto', ringSystem: false, moons: ['Charon'] })

solarSystem[2].diameter = '7,917.5'

solarSystem[0].ringSystem = true

solarSystem[6].moons[solarSystem[6].moons.length - 1] = 'Oberon'

console.log(solarSystem)

for (let planet of solarSystem) {
    if (planet.ringSystem === true) {
        console.log(planet)
    }
}

//Solar System Part 2

//need to do haven't done it yet! :(

//Reading list
// THE READING LIST
const books = [
    {title: "The Martian", author: "Andy Weir", alreadyRead: true},
    {title: "Sherlock Holmes", author: "Conan Dyle", alreadyRead: true},
    {title: "Jack the Ripper", author: "M. Christian", alreadyRead: false},
    {title: "Ready Player One", author: "Ernest Cline", alreadyRead: true},
    {title: "Armada", author: "Ernest Cline", alreadyRead: false}
]

for (let book of books) {
    console.log(`${book.title} by ${book.author}`)
}

for (let book of books) {
    if (book.alreadyRead === true) {
        console.log(`You already read ${book.title} by ${book.author}`)
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}.`)
    }
}