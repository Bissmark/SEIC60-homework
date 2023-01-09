const body = document.body

// ---------------------------- PART 1 ---------------------------------

// 1. Create a function called `createDuck`. Inside this function:
// NOTE: Make sure to call this function so you can test your createDuck
// function and work on it incrementally.

// 1.a. Create a <div> with the class "duck" and add it to the body.  Do this
//   step by step:
//      i.   create the element
//      ii.  add a class to the element
//      iii. append the element to the body

//   1.b. Next, use setInterval to toggle the "flap" class on the duck every 250ms
//      (1/4 second)
//      https://developer.mozilla.org/en-US/docs/Web/API/setInterval

//   1.c. Fantastic!  We want the duck move to a different location every
//      second using the "top" and "left" CSS properties. What did we use to
//      do this several lines up?? We need another one.
//      HINT: Use Math.random() * window.innerWidth    for "left"
//            And Math.random() * window.innerHeight   for "top"
//      NOTE: You'll need to set "top" and "left" to a number of
//      pixels -- e.g., "400px" rather than simply "400".

//   1.e. Congratulations! Move on to part 2!
function createDuck() {
  const duck = document.createElement("div")
  duck.classList.add("duck")
  body.appendChild(duck)
  
  selectDuck = document.querySelector('.duck')
  setInterval(function() {
    
    selectDuck.classList.toggle('flap')
  }, 250)
  setInterval(function(){
    let topPosition = Math.random() * window.innerHeight + 'px'
    let leftPosition = Math.random() * window.innerWidth + 'px'
    selectDuck.style.top = topPosition 
    selectDuck.style.left = leftPosition 
  },1000)
  }

  createDuck()

// ---------------------------- PART 2 ---------------------------------

// 2. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//    using our fancy new createDuck() function

// numberOfDucks = 5

// for (let i = 0; i < numberOfDucks; i++ ) {
//   createDuck(i)
//   console.log(i)
// }

// --------------------------- PART 3 ------------------------------------

// 3. BOOM. Inside the `createDuck` function:
//   3.a Attach a "click" handler that adds the "shot" class to the duck when
//     you click on it!
//   3.b. After a duck has been clicked on ("shot"), remove it from the DOM
//     after a short delay (1 second) Hint Hint...use setTimeout:
//     https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

// 4. Create a new function named checkForWinner() that reads the DOM to see
//     if there are any ducks left. (How can we check the DOM for more than
//     one element?, and how can we see how many elements we get back) If
//     there are no more ducks, alert "YOU WIN!". Call your checkForWinner
//     function each time a duck gets removed from the DOM.

// FIN. You win 1 trillion tokens.  Play the day away!

// Working Code (duck flie, with everything in one function .... more or less)
// function createDuck() {
//   const duck = document.createElement("div")
//   duck.classList.add("duck")
//   body.appendChild(duck)
  
//   selectDuck = document.querySelector('.duck')
//   setInterval(function() {
    
//     selectDuck.classList.toggle('flap')
//   }, 250)
//   setInterval(function(){
//     let topPosition = Math.random() * window.innerHeight + 'px'
//     let leftPosition = Math.random() * window.innerWidth + 'px'
//     selectDuck.style.top = topPosition 
//     selectDuck.style.left = leftPosition 
//   },1000)
//   }
  
