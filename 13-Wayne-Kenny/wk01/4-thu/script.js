//// Where's Waldo
// let whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]]
// whereIsWaldo[2][2] = 'No One'
// console.log(whereIsWaldo[2][2])
// console.log(whereIsWaldo[3][1][1])
// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);

//// Array Restaurant
// let menu = ['chicken', 'apple pie', 'soup', 'steak', 'salad', 'turkey sandwich', 'potato bake']

// Arranging Alphabetically
// menu.sort()
// console.log(menu)
// arr = menu.sort((a, b) => a.localeCompare(b));
// console.log(arr)

///Removing the 1st element
// menu.shift();
// console.log(menu)

///Removing the 3rd element
// menu.splice(2, 1)
// console.log(menu)

// Prompt a user for what they would like to eat from the menu.
// let userChoice = (prompt('What would you like to eat?'));
// if (menu.includes('chicken') && userChoice === 'chicken') {
//     console.log('Sure, the chicken will be served in 15 minutes');
// } else {
//     console.log('Sorry we don\'t have that')
// }

//// The Solar System, Part 1
// const solarSystem = [
//     { name: 'Mercury', ringSystem: false, moons: [] },
//     { name: 'Venus', ringSystem: false, moons: [] },
//     { name: 'Earth', ringSystem: false, moons: ['The Moon'] },
//     { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
//     { name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
//     { name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
//     { name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
//     { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
//   ]
// // // Add a new moon called Endor
// solarSystem[1].moons = 'Endor'
// console.log(solarSystem)

// // // Print the array of Jupiters moons
// console.log(solarSystem[4].moons)

// // //Print the name of Neptunes moon
// console.log(solarSystem[7].moons[1])



// // // Add Pluto object to the solarSystem
// const pluto = { name: 'Pluto', ringsystem: true, moons: ['Charon'] }
// solarSystem.push(pluto)
// console.log(solarSystem)

// // // Add a new key value to Earth
// solarSystem[2].diameter = '24,901'
// console.log(solarSystem)

// // // Change Mercurys ringSystem boolean to true
// solarSystem[0].ringSystem = true
// console.log(solarSystem)

// Change Uranus' moon Umbriel to Oberon
// solarSystem[6].moons[3] = 'Oberon'
// console.log(solarSystem[6].moons)

// Iterate through the SS array and print out any objects that have a ringSystem (ringSystem = true) and ignore the others.
// You want to make a loop that goes over each item in the array, and include an if statement.
// Example output:

// { name: 'Mercury', ringSystem: true, moons: [] }
// { name: 'Jupiter', ringSystem: true, moons: [ 'Europa', 'Ganymede', 'Io', 'Callisto' ] }
// { name: 'Saturn', ringSystem: true, moons: [ 'Titan', 'Enceladus', 'Rhea', 'Mimas' ] }
// { name: 'Uranus', ringSystem: true, moons: [ 'Miranda', 'Titania', 'Ariel', 'Oberon' ] }
// { name: 'Neptune', ringSystem: true, moons: [ 'Triton', 'Nereid' ] }

// for (let i = 0; i < solarSystem.length; i++) {
//     if (solarSystem[i].ringSystem) {
//         console.log(solarSystem[i])
//     }
// }


//// The Solar System, Part 2
// const system = {
//     Mercury:
//     {
//         radiusp: 'same ',
//         name: 'Mercury',
//         density: 5.43,
//         tilt: 2,
//         image: 'textures/mercury.gif',
//         rotationperiod: 1408,
//         period: 0.24,
//         radiuse: 2439,
//         satellites: 0,
//         au: 0.3871,
//         eccentricity: 0.206,
//         velocity: 47.89,
//         mass: 0.06,
//         inclination: 7
//     },
//     Venus:
//     {
//         radiusp: 'same ',
//         name: 'Venus',
//         density: 5.25,
//         tilt: 177.3,
//         image: 'textures/venus.gif',
//         rotationperiod: 5832,
//         period: 0.62,
//         radiuse: 6052,
//         satellites: 0,
//         au: 0.7233,
//         eccentricity: 0.007,
//         velocity: 35.04,
//         mass: 0.82,
//         inclination: 3.4
//     },
//     Earth:
//     {
//         radiusp: 6357,
//         name: 'Earth',
//         density: 5.52,
//         tilt: 23.45,
//         image: 'textures/earth.gif',
//         rotationperiod: 23.93,
//         period: 1,
//         radiuse: 6378,
//         satellites: 1,
//         au: 1,
//         eccentricity: 0.017,
//         velocity: 29.79,
//         mass: 1,
//         inclination: 0
//     },
//     Mars:
//     {
//         radiusp: 3380,
//         name: 'Mars',
//         density: 3.95,
//         tilt: 25.19,
//         image: 'textures/mars.gif',
//         rotationperiod: 24.62,
//         period: 1.88,
//         radiuse: 3397,
//         satellites: 2,
//         au: 1.524,
//         eccentricity: 0.093,
//         velocity: 24.14,
//         mass: 0.11,
//         inclination: 1.85
//     },
//     Jupiter:
//     {
//         radiusp: 66854,
//         name: 'Jupiter',
//         density: 1.33,
//         tilt: 3.12,
//         image: 'textures/jupiter.gif',
//         rotationperiod: 9.92,
//         period: 11.86,
//         radiuse: 71490,
//         satellites: 69,
//         au: 5.203,
//         eccentricity: 0.048,
//         velocity: 13.06,
//         mass: 317.89,
//         inclination: 1.3
//     },
//     Saturn:
//     {
//         radiusp: 54360,
//         name: 'Saturn',
//         density: 0.69,
//         tilt: 26.73,
//         image: 'textures/saturn.gif',
//         rotationperiod: 10.66,
//         period: 29.46,
//         radiuse: 60268,
//         satellites: 30,
//         au: 9.539,
//         eccentricity: 0.056,
//         velocity: 9.64,
//         mass: 95.18,
//         inclination: 2.49
//     },
//     Uranus:
//     {
//         radiusp: 24973,
//         name: 'Uranus',
//         density: 1.29,
//         tilt: 97.86,
//         image: 'textures/uranus.gif',
//         rotationperiod: 17.24,
//         period: 84.01,
//         radiuse: 25559,
//         satellites: 24,
//         au: 19.19,
//         eccentricity: 0.046,
//         velocity: 6.81,
//         mass: 14.53,
//         inclination: 0.77
//     },
//     Neptune:
//     {
//         radiusp: 24340,
//         name: 'Neptune',
//         density: 1.64,
//         tilt: 29.6,
//         image: 'textures/neptune.gif',
//         rotationperiod: 16.11,
//         period: 164.79,
//         radiuse: 25269,
//         satellites: 8,
//         au: 30.06,
//         eccentricity: 0.01,
//         velocity: 5.43,
//         mass: 17.14,
//         inclination: 1.77
//     },
//     Pluto:
//     {
//         radiusp: 'same',
//         name: 'Pluto',
//         density: 2.03,
//         tilt: 122.46,
//         image: 'textures/pluto.gif',
//         rotationperiod: 153.3,
//         period: 248.54,
//         radiuse: 1160,
//         satellites: 1,
//         au: 39.48,
//         eccentricity: 0.248,
//         velocity: 4.74,
//         mass: 0.002,
//         inclination: 17.15
//     }
// }
// Mass of Mercury 
//   console.log(system.Mercury.mass)

// //   Print the eccentricity of Venus
// console.log(system.Venus.eccentricity)

// //   Print the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
// // 1. find number of jupiter's satellites
// const satellitesJupiter = system.Jupiter.satellites
// // 2. find number of Saturns satellites
// const satellitesSaturn = system.Saturn.satellites
// // 3. find number of Uranus satellites
// const satellitesUranus = system.Uranus.satellites
// // 4. find number of Neptune satellites
// const satellitesNeptune = system.Neptune.satellites
// // 5. Calculate the combined satallites
// let totalSatallites = (satellitesJupiter + satellitesNeptune + satellitesSaturn + satellitesUranus)
// console.log(totalSatallites)

// //   Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). 
// console.log(typeof system.Mercury.radiusp)

// //If Mercury's radiusp is a string, change the value to be the same as its radiuse value. 
// system.Mercury.radiusp = system.Mercury.radiuse
// console.log(typeof system.Mercury.radiusp)

// //   Print Mercury's radiusp (should be 2439, not 'same').
// console.log(system.Mercury.radiusp)

// //   Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity
// //and mass).
// const momentumJupiter = (system.Jupiter.mass * system.Jupiter.velocity)
// const momentumPluto = (system.Pluto.mass * system.Pluto.velocity)
// console.log(momentumJupiter - momentumPluto)

// Planet X
// const planetX = 
// {
//     radiusp: 'same',
//         name: 'PlanetX',
//             density: 2.05,
//                 tilt: 122.50,
//                     rotationperiod: 365,
//                         period: 248.54,
//                             radiuse: 1160,
//                                 satellites: 1,
//                                     au: 39.48,
//                                         eccentricity: 0.248,
//                                             velocity: 4.74,
//                                                 mass: 0.002,
//                                                     inclination: 17.15
// }
// system.planetX = planetX
// console.log(system)

//// The Reading List
// Keep track of which books you read and which books you want to read!

// 1a. Create an array of 5 objects, where each object is a book containing a title (a string), author (a string), and alreadyRead 
// (a boolean indicating if you read it yet).

// const readList = [
//     {
//         title: 'Unfinished Tales',
//         author: 'J.R.R. Tolkien',
//             alreadyRead: true
//     },
//     {
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         alreadyRead: true
//     },
//     {
//         title: 'Star Wars',
//         author: 'George Lucas',
//         alreadyRead: false
//     },
//     {
//         title: 'Empire Strikes Back',
//         author: 'George Lucas',
//         alreadyRead: false
//     },
//     {
//         title: 'The Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         alreadyRead: true
//     },
// ]
// console.log(readList)

// 1b. Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// for (let i = 0; i < readList.length; i++) {
//     console.log(`${readList[i].title} by ${readList[i].author}`)
// }

// 1c. Now update the code from 1b to use an if/else statement to output one of the two following strings, depending on whether you've read it yet:

// for (let i = 0; i < readList.length; i++) {
//     if (readList[i].alreadyRead)
//     console.log(`You're already read ${readList[i].title} by ${readList[i].author}`)
// } else {
//     console.log(`You still need to read ${readList[i].title} by ${readList[i].author}`)
// }

