$('#fetch').on('click', function() {
    $.ajax('https://api.chucknorris.io/jokes/random?json').done(function (data) {
        const fact = data.value;
        $('#fact').text(fact);
    });
});

// ---- Got this version working first ----  
// const fetchFact = function () {
//     const xhr = new XMLHttpRequest(); // this will get you back an object // state 0
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random?json'); // opens the request // state 1
//     xhr.send(); // This line is asynchronous // fires off the request // state 2


//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) {
//             return; // too soon. Our function will only run when we reach stage 4
//         }
//         const data = JSON.parse( xhr.responseText ); // turn the string into a JS object
//         const fact = data.value;
//         console.log(fact);

//         const p = document.createElement('p');
//         p.innerText = fact;
//         document.body.appendChild(p);
//     };
// };
// $('#fetch').on('click', fetchFact);