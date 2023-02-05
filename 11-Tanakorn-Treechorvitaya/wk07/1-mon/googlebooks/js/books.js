// fetchBook from google books api
    const fetchBook = function() {
        // Access list inside html element
            const list = document.getElementById('#list');
        // get data from search bar
            const searchInput = document.querySelector('.input').value;

        const xhr = new XMLHttpRequest(); // 0
        // fill search bar input into api link
        xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ searchInput }`)
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return; // too soon
            }
            
            // Get data from google books api
            const data = JSON.parse(xhr.responseText); // turn the string into an JS object
            // console.log(data);
            // Access data from google books api
            const p = document.createElement('p');
            p.innerText = data["items"][0]["volumeInfo"]["title"];
            // console.log(p)
            const img = document.createElement('img');
            img.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
            // console.log(img)

            //creating a li element for each result item
            const resultItem = document.createElement('div');
            // adding a class to each item of the results
            resultItem.classList.add('result-items');
            // appending the text to the result item
            resultItem.appendChild(p);
            resultItem.appendChild(img);

            // appending the result item to the list
            document.body.appendChild(resultItem);
        };
    };



// Add event listener
    // Search: Add event listener for search button
        document.getElementById('search').addEventListener('click', fetchBook);

    // Clear button: add event listener to the clear button
        document.getElementById('clear').addEventListener('click', () => {
            removeList = document.querySelectorAll('.result-items');
            removeList.forEach(e => e.remove());
        });