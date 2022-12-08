//Where's Waldo

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]]

// console.log(whereIsWaldo)
whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)
whereIsWaldo[1][2] = "No One"
// console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1]);

//Array Restaurant

const restaurant = [
    'chicken',
    'apple pie',
    'soup',
    'steak',
    'salad',
    'turkey sandwich',
    'potato bake'
]
restaurant.sort();
restaurant.splice(0, 1)
restaurant.splice(2, 1)
const userInput = prompt ("What would you like to each from the menu?")
    
for (let i = 0; i<restaurant.length; i++) {
    if (userInput === restaurant[i]){
        console.log(`Sure, the ${restaurant[i]} will be served in 15 minutes`)
        break
    } else if (restaurant.length - 1 === i){
    console.log('Sorry, we don\'t have that.')
}
}
console.log(restaurant);

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

console.log(solarSystem[4].moons)
console.log(solarSystem[7].moons[1])
solarSystem[1].moons.push('Endor')
solarSystem.push({
    name: 'Pluto',
    ringSystem: true,
    moons: ['Charon']
})
solarSystem[2]['diameter'] = '7,917.5 mi'
solarSystem[0].ringSystem = true
solarSystem[6].moons[3] = 'Omberon'
for (let i = 0; i<solarSystem.length; i++){
    if (solarSystem[i].ringSystem === true){
    console.log(solarSystem[i]);
}
}
console.log(solarSystem);

//The Solar System, Part 2

const system = { 
    Mercury: 
     { radiusp: 'same ',
       name: 'Mercury',
       density: 5.43,
       tilt: 2,
       image: 'textures/mercury.gif',
       rotationperiod: 1408,
       period: 0.24,
       radiuse: 2439,
       satellites: 0,
       au: 0.3871,
       eccentricity: 0.206,
       velocity: 47.89,
       mass: 0.06,
       inclination: 7 },
    Venus: 
     { radiusp: 'same ',
       name: 'Venus',
       density: 5.25,
       tilt: 177.3,
       image: 'textures/venus.gif',
       rotationperiod: 5832,
       period: 0.62,
       radiuse: 6052,
       satellites: 0,
       au: 0.7233,
       eccentricity: 0.007,
       velocity: 35.04,
       mass: 0.82,
       inclination: 3.4 },
    Earth: 
     { radiusp: 6357,
       name: 'Earth',
       density: 5.52,
       tilt: 23.45,
       image: 'textures/earth.gif',
       rotationperiod: 23.93,
       period: 1,
       radiuse: 6378,
       satellites: 1,
       au: 1,
       eccentricity: 0.017,
       velocity: 29.79,
       mass: 1,
       inclination: 0 },
    Mars: 
     { radiusp: 3380,
       name: 'Mars',
       density: 3.95,
       tilt: 25.19,
       image: 'textures/mars.gif',
       rotationperiod: 24.62,
       period: 1.88,
       radiuse: 3397,
       satellites: 2,
       au: 1.524,
       eccentricity: 0.093,
       velocity: 24.14,
       mass: 0.11,
       inclination: 1.85 },
    Jupiter: 
     { radiusp: 66854,
       name: 'Jupiter',
       density: 1.33,
       tilt: 3.12,
       image: 'textures/jupiter.gif',
       rotationperiod: 9.92,
       period: 11.86,
       radiuse: 71490,
       satellites: 69,
       au: 5.203,
       eccentricity: 0.048,
       velocity: 13.06,
       mass: 317.89,
       inclination: 1.3 },
    Saturn: 
     { radiusp: 54360,
       name: 'Saturn',
       density: 0.69,
       tilt: 26.73,
       image: 'textures/saturn.gif',
       rotationperiod: 10.66,
       period: 29.46,
       radiuse: 60268,
       satellites: 30,
       au: 9.539,
       eccentricity: 0.056,
       velocity: 9.64,
       mass: 95.18,
       inclination: 2.49 },
    Uranus: 
     { radiusp: 24973,
       name: 'Uranus',
       density: 1.29,
       tilt: 97.86,
       image: 'textures/uranus.gif',
       rotationperiod: 17.24,
       period: 84.01,
       radiuse: 25559,
       satellites: 24,
       au: 19.19,
       eccentricity: 0.046,
       velocity: 6.81,
       mass: 14.53,
       inclination: 0.77 },
    Neptune: 
     { radiusp: 24340,
       name: 'Neptune',
       density: 1.64,
       tilt: 29.6,
       image: 'textures/neptune.gif',
       rotationperiod: 16.11,
       period: 164.79,
       radiuse: 25269,
       satellites: 8,
       au: 30.06,
       eccentricity: 0.01,
       velocity: 5.43,
       mass: 17.14,
       inclination: 1.77 },
    Pluto: 
     { radiusp: 'same',
       name: 'Pluto',
       density: 2.03,
       tilt: 122.46,
       image: 'textures/pluto.gif',
       rotationperiod: 153.3,
       period: 248.54,
       radiuse: 1160,
       satellites: 1,
       au: 39.48,
       eccentricity: 0.248,
       velocity: 4.74,
       mass: 0.002,
       inclination: 17.15 } 
  }

console.log(system.Mercury.mass);
console.log(system.Venus.eccentricity);
const satellitesSum = (system.Jupiter.satellites + system.Saturn.satellites + system.Uranus.satellites + system.Neptune.satellites)
console.log(satellitesSum);
console.log(typeof system.Mercury.radiuse)
if (typeof system.Mercury.radiusp === 'string' ) {
    console.log('This is a string.');
}
system.Mercury.radiusp = 2439
console.log(system.Mercury.radiusp)
const jupiterMomentum = (system.Jupiter.velocity * system.Jupiter.mass)
const plutoMomentum = (system.Pluto.velocity * system.Pluto.mass)
console.log(jupiterMomentum);
console.log(plutoMomentum);
console.log(`Jupiter's momentum is ${jupiterMomentum}. Pluto's momentum is ${plutoMomentum}. The difference is ${jupiterMomentum - plutoMomentum}`);

//Planet X

const planetX = {
    Xyno:
    {radiusp: 1234,
    name: 'Xyno',
    density: 11.11,
    tilt: 56.32,
    image: 'textures/Xyno.gif',
    rotationperiod: 19,
    period: 255.5,
    radiuse: 1999,
    satellites: 15,
    au: 48.39,
    eccentricity: 4.32,
    velocity: 6.66,
    mass: 1.1,
    inclination: 21.21 }
}

//function copied from: https://stackoverflow.com/questions/9843884/add-javascript-object-into-another-javascript-object
//I don't really understand what hasOwnProperty is doing
function mix(source, target){
    for(var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}
mix (planetX, system)

// console.log(planetX);
console.log(system);

//The Reading List

const books = [
{title: 'The Habit',
 author: 'C J Falcon',
 alreadyRead: true},
{title: 'Bride & Bread & Juice',
 author: 'Sam Samson',
 alreadyRead: true},
{title: 'Lord of the Chicken King',
 author: 'Isaac Tesla',
 alreadyRead: false},
{title: 'Game of Polite Combat',
 author: 'Lord Gaben',
 alreadyRead: true},
{title: 'Romeo & Bill',
 author: 'Christopher Nolan',
 alreadyRead: false}
]

for (let i=0;i<books.length;i++){
    if (books[i].alreadyRead === true){
        console.log(`You have aready read ${books[i].title} by ${books[i].author}.`);
    } else {
        console.log(`You still need to read ${books[i].title} by ${books[i].author}.`);
    }
}
