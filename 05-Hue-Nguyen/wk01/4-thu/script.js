// //Where's Waldo
// const whereIsWaldo = [
//     ["Timmy", "Frank"], "Eggbert",
//     ["Lucinda", "Jacc", "Neff", "Snoop"],
//     ["Petunia", ["Baked Goods", "Waldo"]]
// ];

// const indexOfEggBert = whereIsWaldo.indexOf('Eggbert');
// whereIsWaldo.splice(indexOfEggBert, 1);

// whereIsWaldo[1][2] = "No One";

// console.log(whereIsWaldo);


// // Array restaurant
// const menuItems = [
//     'chicken',
//     'apple pie',
//     'soup',
//     'steak',
//     'salad',
//     'turkey sandwich',
//     'potato bake'
// ];
// // sort to alphabetize the menu items
// menuItems.sort();
// console.log(menuItems);

// //remove the 1st item from the menu items
// menuItems.splice(0, 1);
// console.log(menuItems);

// //remove the 3rd item from the menu items
// menuItems.splice(2, 1)
// console.log(menuItems);

// //prompt a user for what they would like to eat from the menu.
// const serveFood = function () {
//     const foodChoice = prompt('What would you like?').toLowerCase();
//     if (menuItems.indexOf(foodChoice) > -1) {
//         alert(`Sure, ${foodChoice} will be served in 15 minutes`)
//     } else {
//         alert(`Sorry, we don't serve ${foodChoice}`)
//     }
// }

// serveFood();


// // The solar system, part 1
// const solarSystem = [
//     { name: 'Mercury', ringSystem: false, moons: [] },
//     { name: 'Venus', ringSystem: false, moons: [] },
//     { name: 'Earth', ringSystem: false, moons: ['The Moon'] },
//     { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
//     { name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
//     { name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
//     { name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
//     { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
// ];

// // Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
// console.log(solarSystem[4].moons);

// // Print the name of Neptune's moon "Nereid" to the console.
// console.log(solarSystem[solarSystem.length - 1].moons[1]);

// // Add a new moon called "Endor" to Venus' moons array.
// const venusMoons = solarSystem[1].moons;
// venusMoons.push('Endor')
// console.log(solarSystem);

// // Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
// const pluto = {
//     name: 'Pluto',
//     ringSystem: false,
//     moons: ['Charon']
// }
// solarSystem.push(pluto);
// console.log(solarSystem)

// // Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
// const earth = solarSystem[2];
// earth.diameter = '12742';
// console.log(earth);

// // Change Mercury's ringSystem boolean to true.
// const mercury = solarSystem[0];
// mercury.ringSystem = true;
// console.log(solarSystem)

// // Change Uranus' moon "Umbriel" to "Oberon";
// const uranmusMoons = solarSystem[7].moons;
// const indexOfUmbriel = uranmusMoons.indexOf('Umbriel');
// uranmusMoons[indexOfUmbriel] = 'Oberon';

// // Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
// for (let planet of solarSystem) {
//     if (planet.ringSystem === true) {
//         console.log(planet);
//     }    
// }

// // // The solar system part 2
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

// // Print the mass of Mercury
// console.log((`The mass of Mercury ${system.Mercury.mass}`));

// // Print the eccentricity of Venus
// const venusEccentricity = system.Venus.eccentricity;
// console.log(`the eccentricity of Venus is ${venusEccentricity}`);

// // Print the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
// const sumSatellites = system.Jupiter.satellites + system.Saturn.satellites + system.Uranus.satellites + system.Neptune.satellites;
// console.log(`The sume of the number of satellites of Jupiter, Saturn, Uranus, and Neptune is ${sumSatellites}`);

// // Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
// let mercuryRadiusp = system.Mercury.radiusp;
// console.log(`The original Mercury's radiusp is ${mercuryRadiusp}`);
// if (typeof mercuryRadiusp === "string") {
//     mercuryRadiusp = system.Mercury.radiuse;
// }

// // Print Mercury's radiusp (should be 2439, not 'same').
// console.log(`The current Mercury's radiusp is ${mercuryRadiusp}`);

// // Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
// const jupiterMomentum = system.Jupiter.velocity * system.Jupiter.mass;
// const plutoMomentum = system.Pluto.velocity * system.Pluto.mass;
// const diff = jupiterMomentum - plutoMomentum;
// console.log(`the difference between Jupiter's momentum and Pluto's momentum is ${diff}`);

// // Planet X
// const planetX = {
//     radiusp: 1235,
//     name: 'Sophie',
//     density: 1.54,
//     tilt: 222.3,
//     image: 'sophie.gif',
//     rotationperiod: 321.3,
//     period: 367.5,
//     radiuse: 2654,
//     satellites: 1,
//     au: 23.2,
//     eccentricity: 0.848,
//     velocity: 5.21,
//     mass: 0.021,
//     inclination: 32.11
// };

// system.Sophie = planetX;
// console.log(system);

// The Reading List
const books = [
    {
        title: 'How not to be wrong',
        author: 'Jordan Ellenberg',
        alreadyRead: false
    },
    {
        title: 'Quiet',
        author: 'Susan Cain',
        alreadyRead: false
    },
    {
        title: 'Smarter, Faster, Better',
        author: 'Charles Duhigg',
        alreadyRead: true
    },
    {
        title: 'David and Goliath',
        author: 'Malcolm Gladwell',
        alreadyRead: false
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        alreadyRead: false
    }
];

//Log the book and its author
for (let book of books) {
    console.log(`${book.title} by ${book.author}`);
}

//Update code above
for (let book of books) {
    if (book.alreadyRead === true) {
        console.log(`I have already read ${book.title} by ${book.author}`);
    } else {
        console.log(`I want to read ${book.title} by ${book.author}.`);

    }
}
