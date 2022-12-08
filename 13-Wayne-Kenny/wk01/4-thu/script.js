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
// arr = menu.sort((a, b) => a.localeCompare(b));
// console.log(arr)

///Removing the 1st element
// menu.shift();
// console.log(menu)

///Removing the 3rd element
// menu.splice(2, 1)
// console.log(menu)

// Prompt a user for what they would like to eat from the menu.
// For example, if the user answers "chicken", check if the item 
// exists in the array using an array method, and either console.log:
// "Sure, the chicken will be served in 15 minutes" OR
// "Sorry, we don't have that".
// let userChoice = parseInt(prompt('What would you like to eat?'));
// if (userChoice === menu) {
//     console.log('Sure, the chicken will be served in 15 minutes');
// } else if (userChoice !== menu) {
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

// solarSystem[0][1] = 'Endor'
// console.log(solarSystem)

//   console.log('jupiters'.moons)