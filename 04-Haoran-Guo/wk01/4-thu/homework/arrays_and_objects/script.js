// Where's Waldo 

// const whereIsWaldo = [
//     ["Timmy", "Frank"], 
//     "Eggbert",                  
//     ["Lucinda", "Jacc", "Neff", "Snoop"],                  
//     ["Petunia", ["Baked Goods", "Waldo"]]
// ]

//Remove Eggbert (hint look at the slice/splice method(s))
// console.log(whereIsWaldo);
// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);

// //Change "Neff" to "No One"
// whereIsWaldo[2][2] = "No One";
// console.log(whereIsWaldo); 

//Access and console.log "Waldo"
// console.log(whereIsWaldo[3][1][1]);

//Array Restaurant 

// const menu = [
//     "chicken",
//     "apple pie",
//     "soup",
//     "steak",
//     "salad",
//     "turkey sandwich",
//     "potato bake"
// ];

// console.log(menu.sort())

// console.log(menu.shift())
// console.log(menu)

// console.log(menu.splice(2,1))
// console.log(menu)

// const choice = function (arr){
//     let userChoice = prompt("What do you like to eat?");
//     let result = arr.includes(userChoice);
//     if (result){
//         console.log("Sure, the chicken will be served in 15 minutes");
//     }else{
//         console.log("Sorry, we don't have that");
//     }
// }

// choice(menu);

// The Solar System, Part 1
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

// Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
//console.log(solarSystem[4]['moons']);

//Print the name of Neptune's moon "Nereid" to the console.
// console.log(solarSystem[solarSystem.length - 1]["moons"])

//Add a new moon called "Endor" to Venus' moons array.
// solarSystem[1]["moons"].push("Endor");
// console.log(solarSystem[1]);

//Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
// solarSystem.push({ name: 'Pluto', ringSystem: true, moons: ['Charon'] });
// console.log(solarSystem);

//Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
// solarSystem[2]["diameter"] = "12742km";
// console.log(solarSystem[2]);

//Change Mercury's ringSystem boolean to true.
// solarSystem[0]["ringSystem"] = true;
// console.log(solarSystem[0]);

//Change Uranus' moon "Umbriel" to "Oberon"
// solarSystem[3]["moons"].splice(3,1,"Oberon");
// console.log(solarSystem[3]["moons"]);

//Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.

// for (let planet of solarSystem){
//     let flag = planet["ringSystem"]; 
//     if (flag){
//         console.log(planet);
//     }
// }


// The Solar System, Part 2 
// const system = { 
//     Mercury: 
//      { radiusp: 'same ',
//        name: 'Mercury',
//        density: 5.43,
//        tilt: 2,
//        image: 'textures/mercury.gif',
//        rotationperiod: 1408,
//        period: 0.24,
//        radiuse: 2439,
//        satellites: 0,
//        au: 0.3871,
//        eccentricity: 0.206,
//        velocity: 47.89,
//        mass: 0.06,
//        inclination: 7 },
//     Venus: 
//      { radiusp: 'same ',
//        name: 'Venus',
//        density: 5.25,
//        tilt: 177.3,
//        image: 'textures/venus.gif',
//        rotationperiod: 5832,
//        period: 0.62,
//        radiuse: 6052,
//        satellites: 0,
//        au: 0.7233,
//        eccentricity: 0.007,
//        velocity: 35.04,
//        mass: 0.82,
//        inclination: 3.4 },
//     Earth: 
//      { radiusp: 6357,
//        name: 'Earth',
//        density: 5.52,
//        tilt: 23.45,
//        image: 'textures/earth.gif',
//        rotationperiod: 23.93,
//        period: 1,
//        radiuse: 6378,
//        satellites: 1,
//        au: 1,
//        eccentricity: 0.017,
//        velocity: 29.79,
//        mass: 1,
//        inclination: 0 },
//     Mars: 
//      { radiusp: 3380,
//        name: 'Mars',
//        density: 3.95,
//        tilt: 25.19,
//        image: 'textures/mars.gif',
//        rotationperiod: 24.62,
//        period: 1.88,
//        radiuse: 3397,
//        satellites: 2,
//        au: 1.524,
//        eccentricity: 0.093,
//        velocity: 24.14,
//        mass: 0.11,
//        inclination: 1.85 },
//     Jupiter: 
//      { radiusp: 66854,
//        name: 'Jupiter',
//        density: 1.33,
//        tilt: 3.12,
//        image: 'textures/jupiter.gif',
//        rotationperiod: 9.92,
//        period: 11.86,
//        radiuse: 71490,
//        satellites: 69,
//        au: 5.203,
//        eccentricity: 0.048,
//        velocity: 13.06,
//        mass: 317.89,
//        inclination: 1.3 },
//     Saturn: 
//      { radiusp: 54360,
//        name: 'Saturn',
//        density: 0.69,
//        tilt: 26.73,
//        image: 'textures/saturn.gif',
//        rotationperiod: 10.66,
//        period: 29.46,
//        radiuse: 60268,
//        satellites: 30,
//        au: 9.539,
//        eccentricity: 0.056,
//        velocity: 9.64,
//        mass: 95.18,
//        inclination: 2.49 },
//     Uranus: 
//      { radiusp: 24973,
//        name: 'Uranus',
//        density: 1.29,
//        tilt: 97.86,
//        image: 'textures/uranus.gif',
//        rotationperiod: 17.24,
//        period: 84.01,
//        radiuse: 25559,
//        satellites: 24,
//        au: 19.19,
//        eccentricity: 0.046,
//        velocity: 6.81,
//        mass: 14.53,
//        inclination: 0.77 },
//     Neptune: 
//      { radiusp: 24340,
//        name: 'Neptune',
//        density: 1.64,
//        tilt: 29.6,
//        image: 'textures/neptune.gif',
//        rotationperiod: 16.11,
//        period: 164.79,
//        radiuse: 25269,
//        satellites: 8,
//        au: 30.06,
//        eccentricity: 0.01,
//        velocity: 5.43,
//        mass: 17.14,
//        inclination: 1.77 },
//     Pluto: 
//      { radiusp: 'same',
//        name: 'Pluto',
//        density: 2.03,
//        tilt: 122.46,
//        image: 'textures/pluto.gif',
//        rotationperiod: 153.3,
//        period: 248.54,
//        radiuse: 1160,
//        satellites: 1,
//        au: 39.48,
//        eccentricity: 0.248,
//        velocity: 4.74,
//        mass: 0.002,
//        inclination: 17.15 } 
//   }

// Print the mass of Mercury
// console.log(system["Mercury"]["mass"]);

// Print the eccentricity of Venus
// console.log(system["Venus"]["eccentricity"]);

// Print the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
// let sum = 0; 
// const arr = ["Jupiter", "Saturn", "Uranus",  "Neptune" ]
// for (let planet in system){
//     if (arr.includes(planet)){
//     sum += system[planet]["satellites"];
//     }
// }
// console.log(sum);

//Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
// const radiusCheck = function(arr) {
//     const flag = 'string'; 
//     if (typeof arr["radiusp"] ==='string') {
//         arr["radiusp"] = arr["radiuse"]; 
//     }
// }

// radiusCheck(system["Mercury"]);

//Print Mercury's radiusp (should be 2439, not 'same').
// console.log(system["Mercury"]["radiusp"]);

// Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
// const momentumDifference = function(arr1, arr2) {
//     return arr1["velocity"] * arr1["mass"] - arr2["velocity"] * arr2["mass"];
// }

// console.log(momentumDifference(system["Jupiter"], system["Pluto"]));

//Planet X
// system["PlanetX"] = {
//     radiusp: 'same',
//        name: 'PlanetX',
//        density: 52.03,
//        tilt: 1522.46,
//        image: 'textures/planetX.gif',
//        rotationperiod: 1553.3,
//        period: 2458.54,
//        radiuse: 11560,
//        satellites: 15,
//        au: 359.48,
//        eccentricity: 0.2548,
//        velocity: 4.754,
//        mass: 0.0052,
//        inclination: 157.15
// }
// console.log(system); 


// The Reading List 
// 1a. Create an array of 5 objects, where each object is a book containing a title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
const books =[
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        alreadyRead: true
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        alreadyRead: false
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        alreadyRead: false
    },
    {
        title: 'Great Expectations',
        author: 'Charles Dickens',
        alreadyRead: false
    }, 
    {
        title: 'The Old Man and the Sea',
        author: 'Ernest Hemmingway',
        alreadyRead: true
    }
]

// 1b. Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// for (let book of books) {
//     console.log(`${book.title} by ${book.author}`);
// }

//1c. Now update the code from 1b to use an if/else statement to output one of the two following strings, depending on whether you've read it yet:
// const readingStatus = function (book) {
//     if (book.alreadyRead) {
//         console.log(`You already read ${book.title} by ${book.author}`);
//     }else{
//         console.log(`You still need to read ${book.title} by ${book.author}`);
//     }

// };

// for (let book of books) {
//     readingStatus(book);
// }