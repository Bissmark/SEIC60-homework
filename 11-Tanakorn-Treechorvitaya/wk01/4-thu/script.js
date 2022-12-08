// Research Array Methods on MDN

// Where's Waldo
    const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                        ["Lucinda", "Jacc", "Neff", "Snoop"],
                        ["Petunia", ["Baked Goods", "Waldo"]]
    ]
    // 1 Remove Eggbert (hint look at the slice/splice method(s))
    whereIsWaldo.splice(1,1)
    console.log(whereIsWaldo)

    // 2 Change "Neff" to "No One"
    whereIsWaldo[1][2] = "No One"
    console.log(whereIsWaldo)

    // 3 Access and console.log "Waldo"
    console.log(whereIsWaldo[2][1][1])

// Array Restaurant
const menuMain = ["chicken",
    "apple pie",
    "soup",
    "steak",
    "salad",
    "turkey sandwich",
    "potato bake"]
// let menu = menuMain ***** Have question on this why when operate some command on menu it is also impact menuMain
let menu = ["chicken",
"apple pie",
"soup",
"steak",
"salad",
"turkey sandwich",
"potato bake"]
        // 1 Use the array method .sort to alphabetize the menu items
        console.log(menu.sort())

        // 2 Use an array method to remove the 1st item from the array.
        menu.shift()
        console.log(menu)

        // 3 Use an array method to remove the 3rd item from the array.
        menu.splice(2,1)
        console.log(menu) // from 2

        // Prompt a user for what they would like to eat from the menu. For example, if the user answers "chicken", check if the item exists in the array using an array method, and either console.log:
        // "Sure, the chicken will be served in 15 minutes" OR
        // "Sorry, we don't have that".
        // const wouldLikeToEat = prompt('what you would like to eat from the menu?')
        // console.log(wouldLikeToEat)
        // console.log(menuMain.includes(wouldLikeToEat))
        // console.log(menuMain)
        // console.log(menu)
        // if(menuMain.includes(wouldLikeToEat)){
        //     console.log(`Sure, the ${wouldLikeToEat} will be served in 15 minutes.`)
        // } else {
        //     console.log(`Sorry, we don't have that.`)
        // }

// The Solar System, Part 1
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

    // 1 Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
        console.log(solarSystem[4].name)
    // 2 Print the name of Neptune's moon "Nereid" to the console.
        console.log(solarSystem[7].moons[1])
    // 3 Add a new moon called "Endor" to Venus' moons array.
        solarSystem[1].moons.push("Endor")
        console.log(solarSystem[1].moons[0])

    // 4 Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
        const PlutoIsAPlanet = { name: 'Pluto', ringSystem: false, moons: ["Charon"] }
        //console.log(PlutoIsAPlanet)
        solarSystem.push(PlutoIsAPlanet)
        console.log(solarSystem) 
    // 5 Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
        solarSystem[2].diameter = "7,917.5 mi"
    // 6 Change Mercury's ringSystem boolean to true.
        solarSystem[0].ringSystem = true
        console.log(solarSystem)
    // 7 Change Uranus' moon "Umbriel" to "Oberon"
        solarSystem[6].moons[3] = "Oberon"
        console.log(solarSystem)
    // 8 Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
        for(let i = 0; i<solarSystem.length;i++){
            if(solarSystem[i].ringSystem = true){
                console.log(solarSystem[i])
            }
        }

// The Solar System, Part 2
        // solution in object.js
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
        
        // 1 Print the mass of Mercury
            console.log(system.Mercury.mass)
        
        // 2 Print the eccentricity of Venus
            console.log(system.Venus.eccentricity)
        
        // 3 Print the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
            let satellitesNumber = 0
            const satellitesPlanet = ["Jupiter", "Saturn", "Uranus", "Neptune"]
            for(let planet in system){
                for(let j=0;j<4;j++ ){
                    if (planet === satellitesPlanet[j]){
                        console.log(planet)
                        console.log(system[planet].satellites)
                        satellitesNumber+=system[planet].satellites
                    }
                }
            }
            console.log(satellitesNumber)
        
        // 4 Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
            if(typeof system.Mercury.radiusp === "string"){
                system.Mercury.radiusp = system.Mercury.radiuse
            }
        
        // 5 Print Mercury's radiusp (should be 2439, not 'same').
            console.log(system.Mercury)
        
        // 6 Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
            let momentumJupiter = (system.Jupiter.velocity * system.Jupiter.mass)
            let momentumPluto = (system.Pluto.velocity * system.Pluto.mass)
        
            console.log(momentumJupiter-momentumPluto)

// The Reading List

    // 1a. Create an array of 5 objects, where each object is a book containing a title (a string), author (a string), 
    // and alreadyRead (a boolean indicating if you read it yet).
        let books = {
            book1:
            {name : "The Intelligent Investor",
            author: "Benjamin Graham",
            alreadyRead: true },
            book2:
            {name : "Principles",
            author: "Ray Dalio",
            alreadyRead: true },
            book3:
            {name : "The Barefoot Investor",
            author: "Scott Pape",
            alreadyRead: false },
            book4:
            {name : "How to win friends and influence people",
            author: "Dale Carnegie",
            alreadyRead: true },
            book5:
            {name : "Sell like crazy",
            author: "Sabri Suby",
            alreadyRead: false },
        }
    // 1b. Iterate through the array of books. For each book, log the book title and book author like so
    //: "The Hobbit by J.R.R. Tolkien".
        for(let book in books){
            // console.log(book)
            // console.log(books[book].name)
            console.log(`${books[book].name} by ${books[book].author}`)
        }
    // 1c. Now update the code from 1b to use an if/else statement to output one of the two following strings, 
    //depending on whether you've read it yet:
    // "You already read The Hobbit by J.R.R. Tolkien"
    // "You still need to read The Hobbit by J.R.R. Tolkien."
        for(let book in books){
            if(books[book].alreadyRead===true){
                console.log(`You already read ${books[book].name} by ${books[book].author}`)
            } else {
                console.log(`You still need to read ${books[book].name} by ${books[book].author}`)
            }
        }