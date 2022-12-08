// //Where's Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]]
// whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo)
// whereIsWaldo[1][2] = "No One"
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[2][1][1])

//Array Restaurant
// const menu = ['chicken',
//     'apple pie',
//     'soup',
//     'steak',
//     'salad',
//     'turkey sandwich',
//     'potato bake']
// menu.sort()
// console.log(menu)
// menu.shift()
// menu.splice(1,1)
// console.log(menu)

// let choice = prompt("what would you like to eat?").toLowerCase()
// while (choice === null || choice === ""){
//     choice = prompt("No empty answer please.")
// }
// const checking = menu.filter(function(any){
//     return any === choice
// })
// if (choice === checking[0]){
//     console.log(`Sure, the ${choice} will be served in 15 minutes`)
//     } else {
//         console.log("Sorry, we don't have that")
//     }

//The Solar System, Part 1
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

//1
let targetPlanet = 0
for (let r in solarSystem){
  if (solarSystem[r].name === "Jupiter"){
    targetPlanet = r
  }
}
console.log(solarSystem[targetPlanet].moons)

//2
for (let r in solarSystem){
  if (solarSystem[r].name === "Neptune"){
    targetPlanet = r
  }
}
for (i in solarSystem[targetPlanet].moons){
  if (solarSystem[targetPlanet].moons[i] === "Nereid"){
    console.log(solarSystem[targetPlanet].moons[i])
  }
}

//3
for (let r in solarSystem){
  if (solarSystem[r].name === "Venus"){
    targetPlanet = r
  }
}
solarSystem[targetPlanet].moons.push('Endor')

//4
solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon']})

//5
for (let r in solarSystem){
  if (solarSystem[r].name === "Earth"){
    targetPlanet = r
  }
}
solarSystem[targetPlanet].diameter = '7,917.5 mi'

//6
for (let r in solarSystem){
  if (solarSystem[r].name === "Mercury"){
    targetPlanet = r
  }
}
solarSystem[targetPlanet].ringSystem = true

//7
for (let r in solarSystem){
  if (solarSystem[r].name === "Uranus"){
    targetPlanet = r
  }
}
let targetMoon = 0
for (i in solarSystem[targetPlanet].moons){
  if (solarSystem[targetPlanet].moons[i] === "Umbriel"){
    targetMoon = i
  }
}
solarSystem[targetPlanet].moons[targetMoon] = 'Oberon'

//8
for (let ring in solarSystem){
  if (solarSystem[ring].ringSystem === true){
    console.log(solarSystem[ring])
  }
}
