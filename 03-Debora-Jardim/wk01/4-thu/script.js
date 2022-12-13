// // WHERE IS WALDO
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]]
// console.log(whereIsWaldo[0]);
// console.log(whereIsWaldo[1]);
// console.log(whereIsWaldo[2]);
// console.log(whereIsWaldo[3]);
whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[1][2]);
whereIsWaldo[1][2] = `No one`
// console.log(whereIsWaldo[1][2]);
console.log(whereIsWaldo[2][1][1]);


// ARRAY RESTAURANT
const restaurant = [`Chicken`, `Apple Pie`, `Soup`, `Steak`, `Salad`, `Turkey Sand`, `Potato bake`]

// Use the array method `.sort` to alphabetize the menu items
restaurant.sort();
// console.log(restaurant)

// Use an array method to remove the 1st item from the array.
restaurant.splice(0,0);
// console.log(restaurant);

// Use an array method to remove the 3rd item from the array.
restaurant.splice(2,1);
console.log(restaurant);

// // 1. Prompt a user for what they would like to eat from the menu.

const clientChoice = prompt(`Whats your choice?`)
let ourChoice = restaurant.includes(clientChoice);
if (ourChoice){
    window.alert(`Sure, the ` + clientChoice + `will be ready in 15 min`);
}else{
    window.alert(`Sorry we dont have that`+ ` ` + clientChoice);
}
// console.log(clientChoice)

    

