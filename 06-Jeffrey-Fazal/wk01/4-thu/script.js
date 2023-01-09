console.log('Where is Waldo')
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]]
whereIsWaldo.splice(1,1) // removes 1 item (Eggbert) on index 1
whereIsWaldo[1][2] = 'No One' //renames neff to no one
console.log(whereIsWaldo[2][1][1]) //logs waldo
console.log(whereIsWaldo)

console.log('Array Returant')

let menu = ['chicken', 'apple pie', 'soup','steak','salad','turkey sandwich','potato bake'];

menu = menu.sort()
menu.splice(0,1)
menu.splice(2,1)

foodChoice = 'steak';

for(const item of menu ) {
    if (item === foodChoice){
        console.log(`Sure, the ${item} will be served in 15 minutes`)
    }else {
        console.log("Sorry, we do not have that")
        //break? Should I be breaking my code here
    }
}

console.log('The solar system part 1')
const solarSystem = [
    { name: 'Mercury', ringSystem: false, moons: [] },
    { name: 'Venus', ringSystem: false, moons: [] },
    { name: 'Earth', ringSystem: false, moons: ['The Moon'] },// diameter 12,742 km
    { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
    { name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
    { name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
    { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
  ]

console.log(solarSystem)
console.log(solarSystem[4].moons)
console.log(solarSystem[7].moons[1])
solarSystem[0].moons = ['Endor']
solarSystem.push({ name: 'Pluto', ringSystem: true, moons: ['Charon']})
console.log(solarSystem)
// Up to question 5

// Attempting reading list
console.log("The reading list")

const bookList = [
    {tiitle: 'The Godfather', author:'Mario Puzo',alreadyRead: true},
    {tiitle: 'Metro 2033', author:'Dmitry Glukhovsky',alreadyRead: false},
    {tiitle: 'Snowpiercer: Vol 1 - The Escape Hardcover', author:'Benjamin Legrand',alreadyRead: false},
    {tiitle: 'The Clean Coder: A Code of Conduct for Professional Programmers Paperback', author:'Unknown',alreadyRead: false},
    {tiitle: 'Metro 2033', author:'Dmitry Glukhovsky',alreadyRead: false}
]

for (const bookinfo of bookList)
    (console.log(bookinfo.bookinfo))