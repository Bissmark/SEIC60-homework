// section 1
let age = 19
if(age <= 19){
    console.log("You're still a teenager!")
} else {
    console.log("You are old bro! go drink a beer")
}
// section 2
// if a % 2 is equal to 0, output "After running our calculations, the result is even"
// otherwise, output "After running our calculations, the result is odd"
let a = 5
if((a%2)=== 0) {
    console.log("After running our calculations, the result is even")
} else {
    console.log("After running our calculations, the result is odd")
}

// section 3
// Create a variable called b and assign it a random number between 0 and 100. Write a conditional that matches the following conditions:

// if b is less than or equal to 25, output "bottom quartile"
// if b is between 25 and/or equal to 50, output "lower quartile"
// if b is between 50 and/or equal to 75, output "upper quartile"
// if b is between 75 and/or equal to 100, output "top quartile"
let b = 25
if(b<=25){
    console.log("bottom quartile")
} else if(b<=50){
    console.log("lower quartile")
} else if(b<=75){
    console.log("upper quartile")
} else if (b<= 100){
    console.log("top quartile")
} else {
    console.log("error over than 100")
}

// section 4
// On the menu tonight: Steak, fruit salad, tofurkey, and pork chops.
let menu = prompt("Choose your meal Steak, fruit salad, tofurkey, or pork chops.")

if(menu == "fruit salad" || menu == "tofurkey"){
    console.log("This cuisine is vegan friendly.")
} else if(menu == "Steak" || menu == "pork chops"){
    console.log("Vegans beware!")
} else {
    console.log("no menu")
}

// section 5
//Laboratory Troubleshooting Flowcharts
let move = true
let moveShould = true
let noMoveShould = true

if(move === true){
    if(moveShould === true){
        console.log("No problem")
    } else {
        console.log("Use tape")
    }
} else {
    if(noMoveShould=== true){
        console.log("Wd-40 Lubricant Multi Purpose 255g from Woolworth, please")
    } else {
        console.log("No problem")
    }
}