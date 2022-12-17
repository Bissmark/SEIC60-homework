const body = document.body;
// createDuck
const createDuck = function () {

    // create a <div> with the "duck" class and append to the body
    const duckDiv = document.createElement('div');
    duckDiv.classList.add('duck');
    body.prepend(duckDiv);

    // set toggle for the flag class
    const flapping = function () {

        duckDiv.classList.toggle("flap");

        //move the duck to a random location
        const top = Math.floor(Math.random() * window.innerHeight);
        const left = Math.floor(Math.random() * window.innerWidth);

        duckDiv.style.top = top + "px";
        duckDiv.style.left = left + "px";
    };

    // setInterval for calling the flapping function every 250ms
    setInterval(flapping, 250)

    // the event handler for the "click" event on the duck
    const shooting = function () {
        duckDiv.classList.add('shot')
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
    shotDucks.push(document.querySelector('.duck.shot'));
    if (shotDucks.length === numDucks) {
        alert('YOU WIN !');   }
};
