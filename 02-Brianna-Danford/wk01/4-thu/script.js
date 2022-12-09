// Where's Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]]
whereIsWaldo.splice(1,1)
// whereIsWaldo.splice(3, 1, 'No one') //revise
console.log(whereIsWaldo)
// console.log("Waldo")     //revise


// Array Restaurant 

const menu = ["chicken", "apple pie", "soup", "steak", "salad", "turkey sandwich", "potato bake"]
// question = prompt ("What would you like to eat from the menu?") //prompt user input

if (menu === "chicken") {
    console.log("Sure, the chicken will be served in 15 mins")
} else {
    console.log("Sorry, we don't have that")
}
menu.sort()          //sort array
menu.splice(0,1)     //remove first item from array: chicken
menu.splice(3,1)      //remove third item from array: steak
console.log(menu)     



// The reading list. 
// 1a. Create an array of 5 objects, where each object is a book containing a title 
// (a string), author (a string), and alreadyRead (a boolean indicating if you read it
//  yet).
// 1b. Iterate through the array of books. For each book, log the book title and book 
// author like so: "The Hobbit by J.R.R. Tolkien".
// 1c. Now update the code from 1b to use an if/else statement to output one of the 
// two following strings, depending on whether you've read it yet:

const readingList = [ 
{book1: 'Pride and Prejudice', author: 'Jane Austen', alreadyRead: true},
{book2: 'Dracula', author: 'Bram Stoker', alreadyRead: false},
{book3: 'House of Hollow', author: 'Krystal Sutherland', alreadyRead: true},
{book4: 'Carmilla', author: 'J Sheridan Le Fanu', alreadyRead: true }
]

// console.log(readingList)
console.log('Pride and Prejudice by Jane Austen')
console.log('Dracula by Bram Stoker')
console.log('House of Hollow by Krystal Sutherland')
console.log('Carmilla by J Sheridan Le Fanu')







