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
const menu = ['chicken',
    'apple pie',
    'soup',
    'steak',
    'salad',
    'turkey sandwich',
    'potato bake']
menu.sort()
console.log(menu)
menu.shift()
menu.splice(1,1)
console.log(menu)

let choice = prompt("what would you like to eat?").toLowerCase()
while (choice === null || choice === ""){
    choice = prompt("No empty answer please.")
}
const checking = menu.filter(function(any){
    return any === choice
})
if (choice === checking[0]){
    console.log(`Sure, the ${choice} will be served in 15 minutes`)
    } else {
        console.log("Sorry, we don't have that")
    }
