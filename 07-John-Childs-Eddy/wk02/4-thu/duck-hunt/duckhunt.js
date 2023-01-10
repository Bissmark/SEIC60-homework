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

// const createDuck = () => {
//     const node = document.createElement("div");
//     node.className = "duck";
//     document.querySelector(`body`).appendChild(node);
//     }


// const body = document.body;

//     createDuck();

    const createDuck = () => {

        const node = document.createElement("div");
        node.className = "duck";
        document.querySelector(`body`).appendChild(node);
        

        function flapping() {
            const duck = document.querySelector(`.duck`)
            duck.classList.toggle(`flap`);
          

        const top = Math.floor(Math.random() * window.innerHeight);
        const left = Math.floor(Math.random() * window.innerWidth);

        duck.style.top = `${top}px`;
        duck.style.left = `${left}px`;
        }

    setInterval(flapping, 250);

    const shot = function () {
        duck.classList.add('shot')

        setTimeout(removeDuck, 1000)
    };

    duck.addEventListener('click', shot);
  
    const removeDuck = function () {
        //call the checkForWinner function
        checkForWinner();

        // remove the duckDiv from the DOM
        duck.remove();
    }

    const numberDucks = 5;

    for ( let i = 0; i < numberDucks; i++) {
    createDuck();
}

    let shotDucks = [];
    const checkForWinner = function () {
        // console.log(document.querySelector('.duck'));
        shotDucks.push(document.querySelector('.duck.shot'));
        // console.log('shot duck', shotDucks.length)
        if (shotDucks.length === numDucks) {
            alert('YOU WIN 🥳🥳🥳🥳🥳');
        }
    };
}
        







  

//   const body = document.body;
//   console.log(body);
  

//         // createDuck();

// //   1.b. Next, use setInterval to toggle the "flap" class on the duck every 250ms
// //      (1/4 second)
// //      https://developer.mozilla.org/en-US/docs/Web/API/setInterval





// //   1.c. Fantastic!  We want the duck move to a different location every
// //      second using the "top" and "left" CSS properties. What did we use to
// //      do this several lines up?? We need another one.
// //      HINT: Use Math.random() * window.innerWidth    for "left"
// //            And Math.random() * window.innerHeight   for "top"
// //      NOTE: You'll need to set "top" and "left" to a number of
// //      pixels -- e.g., "400px" rather than simply "400".




//   1.e. Congratulations! Move on to part 2!

// ---------------------------- PART 2 ---------------------------------

// 2. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//    using our fancy new createDuck() function



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


const body = document.body;
console.log(body);

// createDuck
const createDuck = function (numDuck) {

    // create a <div> with the "duck" class and append to the body
    const duckDiv = document.createElement('div');
    duckDiv.classList.add('duck');
    console.log(duckDiv);
    body.prepend(duckDiv);

    // set toggle for the flag class
    const flapping = function () {
        // toggle the flag class
        duckDiv.classList.toggle("flap");

        //move the duck to a random location
        const top = Math.floor(Math.random() * window.innerHeight);
        const left = Math.floor(Math.random() * window.innerWidth);

        duckDiv.style.top = `${top}px`;
        duckDiv.style.left = `${left}px`;
    };

    // setInterval for calling the flapping function every 250ms
    setInterval(flapping, 250)
    // console.log(duckDiv.classList);

    // the event handler for the "click" event on the duck
    const shooting = function () {
        duckDiv.classList.add('shot')
        // console.log(duckDiv.classList)

        // remove the shot duck with 1s delay
        setTimeout(removeDuck, 1000)
    };

    // listen to the 'click' event 
    duckDiv.addEventListener('click', shooting);

    const removeDuck = function () {
        //call the checkForWinner function
        checkForWinner();

        // remove the duckDiv from the DOM
        duckDiv.remove();
    }

}

// number of ducks created in this game
const numDucks = 5;

// Create many ducks
for (let i = 0; i < numDucks; i++) {
    createDuck();
}

// check for the winner function
// the array of ducks shot
let shotDucks = [];
const checkForWinner = function () {
    // console.log(document.querySelector('.duck'));
    shotDucks.push(document.querySelector('.duck.shot'));
    // console.log('shot duck', shotDucks.length)
    if (shotDucks.length === numDucks) {
        alert('YOU WIN 🥳🥳🥳🥳🥳');
    }
};