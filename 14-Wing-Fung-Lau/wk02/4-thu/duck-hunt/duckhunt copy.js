const body = document.body
const timer = document.querySelector('.timer')

// ---------------------------- PART 1 ---------------------------------

// 1. Create a function called `createDuck`. Inside this function:
// NOTE: Make sure to call this function so you can test your createDuck
// function and work on it incrementally.
const creatDuck = function(){
// 1.a. Create a <div> with the class "duck" and add it to the body.  Do this
//   step by step:
//      i.   create the element
    let duck = document.createElement('div');
//      ii.  add a class to the element
    duck.className = 'duck';
//      iii. append the element to the body
    body.appendChild(duck)

//   1.b. Next, use setInterval to toggle the "flap" class on the duck every 250ms
    setInterval(function() {duck.classList.toggle('flap')}, 250);
//      (1/4 second)
//      https://developer.mozilla.org/en-US/docs/Web/API/setInterval

//   1.c. Fantastic!  We want the duck move to a different location every
//      second using the "top" and "left" CSS properties. What did we use to
//      do this several lines up?? We need another one.
//      HINT: Use Math.random() * window.innerWidth    for "left"
//            And Math.random() * window.innerHeight   for "top"
//      NOTE: You'll need to set "top" and "left" to a number of
//      pixels -- e.g., "400px" rather than simply "400".
    const topleft = function(){
        duck.style.top = Math.random() * window.innerHeight + 'px'
        duck.style.left = Math.random() * window.innerWidth + 'px'
    }
    setInterval(topleft, 1000);


    duck.addEventListener('click', function(){
        let ducks = document.querySelectorAll('.duck')
        duck.classList.add('shot');
        setTimeout(function(){
                    duck.remove()
                    for (let j = 0; j < ducks.length; j++) {
                        ducks = document.querySelectorAll('.duck')
                    }
                }, 1000)

                setTimeout(function () {
                    if (ducks.length < 1) {
                        alert('YOU WIN!')
                        return
                    }
                    }
                , 1200)
        } 
    ) 
};
//   1.e. Congratulations! Move on to part 2!

// ---------------------------- PART 2 ---------------------------------

// 2. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//    using our fancy new createDuck() function
for (let i = 0; i <= 15; i++) {
    creatDuck();
}




// const timerInterval = setInterval(function() {timer.textContent = parseInt(timer.textContent) - 1}, 300);

// let ducks = document.querySelectorAll('.duck')

// body.addEventListener('click', function() {
//     setTimeout(function(){
//         ducks = document.querySelectorAll('.duck')
//         if (ducks.length < 1) {
//             clearInterval(timerInterval)
//             return
//     }}, 1200)
// })


// const timeCheck = setInterval(function() {
//     if (parseInt(timer.textContent) < 0) {
//         clearInterval(timeCheck)
//         clearInterval(timerInterval)
//         timer.textContent = 'GAME OVER'
//         alert('Game Over! LOSEERRRRR!!!!')
        
//         return ducks.forEach(function(duck) {
//             duck.classList.add('shot');
//             setTimeout(function() {
//                 duck.remove()
//             }, 500) 
//           });
//     }
// }, 100)






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
