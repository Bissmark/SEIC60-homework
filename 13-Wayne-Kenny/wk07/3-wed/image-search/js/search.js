// create variable for page number to be able to increase on additional requests
let num = 1

// create variable for scrolled to ensure it starts and resets back to zero once user reaches the bottom and the page relaods with more photos to stop glitches
let scrolled = 0

// create variable for stopping page requests once current page and available pages are equal
let requestPage = false

const searchFlickr = function (keywords) {
    // console.log('searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        page: num,
        format: 'json', // lets server know you want json format to come back
        nojsoncallback: 1, // this just makes it work. don't look this up
    }).done(showImages).done(function (info) {
        console.log(info);
    });
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>').attr('src', url);
        if (results.photos.pages === num) {
            $img.appendTo('#images')
            $img.append('<h2>No more pictures</h2>')
            requestPage = true
        } else
        $img.appendTo('#images');
        ; // after new images are loaded scrolled resets to 0
    })
    const urls2 = _(results.photos.photo).map(generateURL2);
    _(urls2).each(function (url) {
        const $img2 = $('<img>').attr('src', url);
        $img2.appendTo('#largeimages');
        scrolled = 0
    })
};


const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};
const generateURL2 = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_z.jpg'
    ].join('');
};

// This will allow you to include script tags at the top of the page in html and ensure it still runs
$(document).ready(function (){
    $('#search').on('submit', function (event) {
        event.preventDefault();
        // reset images to blank when the submit botton or enter is pressed when a new search is made
        $('#images').html("");
        $('#largeimages').html("");


        // get the search terms from the DOM
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms)
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 600) {
            if (scrolled === 0) {
                if (!requestPage) {
                    const searchTerms = $('#query').val();
                    searchFlickr(searchTerms);
                    // when the request for additional pictures takes place the page number increases by one so we see a new page
                    num++;
                    scrolled = 1
                };

            };
        };
    });
});

