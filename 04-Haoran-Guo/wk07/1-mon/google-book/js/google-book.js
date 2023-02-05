// initialisers 
const input = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.btn');
const result = document.querySelector('.search-log');
const bookCount = document.querySelector('#actual-count');

// create a function to connect to Google Book API 
const bookSearch = (title) => {

    $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(
        (data) => {
            // get the book title 
            const bookTitle = data["items"][0]["volumeInfo"]["title"];
            // get the book cover 
            const bookCover = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

            // create the outer div , class = card g-col-6 , append it to the 'search-log' div
            const card_div = $('<div>').attr('class', 'card g-col-6');
            $('.search-log').append(card_div);

            // create an image tag, class = card-img-top, append it to the outer div='card g-col-6', pass the book cover  to its src attribute
            const pic_tag = $('<img>').attr('class', 'card-img-top').attr('src',bookCover);
            card_div.append(pic_tag);

            // create a div tag, class = card-body, append it to the outer div='card g-col-6'
            const card_body = $('<div>').attr('class', 'card-body');
            card_div.append(card_body);

            //create a p tag, class = card-title, append it to the inner div='card-body', pass the book title to its attribute
            const card_title = $('<p>').attr('class', 'card-title').text(bookTitle);
            card_body.append(card_title);

            // count how many searches are made 
            const count = $('.search-log').children().length;
            if (count === 1){
                $('#actual-count').text() === `1 book`;
            } else {
                $('#actual-count').text() === `${count} books`;
            }

        }
    )

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    // xhr.send();
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
            // const data = JSON.parse(xhr.responseText);
            // console.log(data["items"][0]["volumeInfo"]["title"]);
            // console.log(data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
            
            // const card_div = document.createElement('div');
            // card_div.setAttribute('class','card g-col-6');

            // const pic = document.createElement('img');
            // pic.setAttribute('class', 'card-img-top');
            // pic.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
            // result.appendChild(card_div).appendChild(pic);

            // const card_title = document.createElement('h3');
            // card_title.setAttribute('class', 'card-title');
            // card_title.innerText = data["items"][0]["volumeInfo"]["title"];

            // const card_body = document.createElement('div');
            // card_body.setAttribute('class', 'card-body');
            // card_div.appendChild(card_body);
            // card_body.appendChild(card_title);

    //         const searchNo = result.childElementCount
    //         if(searchNo === 1){
    //             bookCount.innerText = `${searchNo} book`;
    //         }else{
    //             bookCount.innerText = `${searchNo} books`;
    //         }
            
    //     }
    // }
}

// add an event listener 

// searchBtn.addEventListener('click', () => {
//     bookSearch(input.value);
//     }
// );
$('.btn').on('click', function() {
    bookSearch($('.search-bar').val());
});