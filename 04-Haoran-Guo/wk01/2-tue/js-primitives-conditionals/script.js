// section 1

// const age = 34; 

// if (age <=19){
//     console.log("You're still a teenager.");
// }

//section 2
// const a = 1987;

// if (a % 2 === 0){
//     console.log("After running our calculations, the result is even")
// } else {
//     console.log("After running our calculations, the result is odd")
// }

// section 3
// const b = 37;

// if (b <=25){
//     console.log("bottom quartile")
// }else if(b>25 && b<=50){
//     console.log("lower quartile")
// }else if(b> 50 && b<=75){
//     console.log("upper quartile")
// }else if(b>75 && b<=100){
//     console.log("top quartile")
// }else{
//     console.log("invalid input")
// }

// section 4
// const menuMeat = ["steak", "pork chops"]
// const menuVegan = ["fruit salad", "tofurkey"]
// let yourChoice = prompt("what's your choice for food?")

// if (menuMeat.includes(yourChoice.toLocaleLowerCase())){
//     console.log("This cuisine is vegan friendly.")
// }else if (menuVegan.includes(yourChoice.toLocaleLowerCase())){
//     console.log("Vegans beware!")
// }else{
//     console.log("Invalid choice.")
// }


// section 5

const answer1 = prompt("Does it move?")
const answerYes2 = prompt("Shoud it?")

if (answer1.toLowerCase() === "yes"){
    if(answerYes2.toLocaleLowerCase() === 'yes'){
        console.log("No problem")
    }else{
        console.log("Duck Tape")
    }
}else{
    if(answerYes2.toLocaleLowerCase() === 'no'){
        console.log("No problem")
    }else{
        console.log("WD-40 Spray")
    }
}
