//-----------------------------------------
// WHERE'S WALDO

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]]

// 1. 
whereIsWaldo.splice(1, 1)

// 2. 
whereIsWaldo[1][2] = "No One"

// testing for 1. and 2.
console.log(whereIsWaldo)

// 3.
const waldo = whereIsWaldo[2][1][1]
console.log(waldo)

//-----------------------------------------
// ARRAY RESTAURANT

const menu = [
    "chicken", 
    "apple pie",
    "soup",
    "steak",
    "salad",
    "turkey sandwich",
    "potato bake"
]

// 1. (sorting alphabetially)
menu.sort()

// 2. (remove first element in the array)
menu.shift()

// 3.
menu.splice(2, 2)

// testing for 1., 2. and 3.
console.log(menu)

// 4.
// const userChoice = prompt("What would you like to order?")
// if (menu.includes(userChoice)) {
//     console.log(`Sure, the ${userChoice} will be served in 15 minutes`)
// } else {
//     console.log("Sorry we don't have that")
// }

//-----------------------------------------
// THE SOLAR SYSTEM (PART 1)

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

// 1.
const jupiterMoons = solarSystem[4].moons
console.log(jupiterMoons)

// 2. 
const neptuneMoon = solarSystem[solarSystem.length - 1].moons[1]
console.log(neptuneMoon)

// 3.
solarSystem[1].moons.push('Endor')

// test for 3.
venusMoons = solarSystem[1].moons
console.log(venusMoons)

// 4.
solarSystem.push({ name: 'Pluto', ringSystem: false, moons: ['Charon'] })

// 5.
solarSystem[2].diameter = '7,917.5'

// 6.
solarSystem[0].ringSystem = true

// 7.
solarSystem[6].moons[solarSystem[6].moons.length - 1] = 'Oberon'

// testing for 4., 5., 6. and 7.
console.log(solarSystem)

// 8.
for (let planet of solarSystem) {
    if (planet.ringSystem === true) {
        console.log(planet)
    }
}

//-----------------------------------------
// THE SOLAR SYSTEM (PART 2)

// *** navigate to objects.js in the same directory ***


//-----------------------------------------
// THE READING LIST

// 1a.
const books = [
    {title: "Time Wise", author: "Amantha Imber", alreadyRead: false},
    {title: "Sad Girls", author: "Lang Leav", alreadyRead: true},
    {title: "The Longest Ride", author: "Nicholas Sparks", alreadyRead: true},
    {title: "Milk and Honey", author: "Rupi Kaur", alreadyRead: false},
    {title: "All The Light We Cannot See", author: "Anthony Doerr", alreadyRead: false}
]

// 1b.
for (let book of books) {
    console.log(`${book.title} by ${book.author}`)
}

// 1c.
for (let book of books) {
    if (book.alreadyRead === true) {
        console.log(`You already read ${book.title} by ${book.author}`)
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}.`)
    }
}
