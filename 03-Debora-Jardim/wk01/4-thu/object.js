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
  
  
  //1. Print the array of Jupiter's moons to the console 
  //(no _for loop_, just print the entire array).
  
    //   console.log(solarSystem)
    console.log(solarSystem[4])

    // 1. Print the name of Neptune's moon "Nereid" to the console.
    console.log(solarSystem[7][1]) //didnt work 

// 1. Add a new moon called "Endor" to Venus' moons array.


// 1. Add a Pluto object to the solarSystem array using .push. 
// The object should contain Pluto's name, ringSystem boolean, and moons array 
// (which includes "Charon").

// 1. Add a new key value pair to the the Earth object: the key should be 'diameter', 
// and the value should be Earth's diameter in miles represented as a string.

// 1. Change Mercury's ringSystem boolean to true.

// 1. Change Uranus' moon "Umbriel" to "Oberon"

// 1. Iterate through the solarSystem array 
// and print only the objects that have a ringSystem (where ringSystem: true),
// and ignore the others. 
// You want to make a loop that goes over each item in the array, 
// and include an if statement.