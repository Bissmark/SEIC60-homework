const body = document.body;
// 1.a
const createDuck = function () {
  const getDuck = document.createElement("div");
  getDuck.classList.add("duck");
  body.append(getDuck);

  // 1.b & 1.c
  function flap() {
    getDuck.classList.toggle("flap");
    getDuck.style.top = `${Math.random() * window.innerHeight}px`;
    getDuck.style.left = `${Math.random() * window.innerWidth}px`;
  }
  setInterval(flap, 250);

  //3.a
  getDuck.addEventListener("click", function () {
    getDuck.classList.add("shot");
    setTimeout(function () {
      getDuck.remove();
      checkForWinner();
    }, 500);
  });

  //4
  const checkForWinner = function () {
    const checkDuck = document.querySelectorAll(".duck");
    if (checkDuck.length === 0) {
      alert("YOU WIN!");
    }
  };
};

//2
for (let i = 0; i < 5; i++) {
  createDuck();
}

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
