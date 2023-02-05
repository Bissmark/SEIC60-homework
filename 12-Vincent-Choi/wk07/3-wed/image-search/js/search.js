// console.log($.fn.jquery, _.VERSION); to check if the two files are working!
let currentPage = 1;
let totalPages;

const searchFlickr = function (keywords) { // defining function can be done outside the document ready cause we aren't actually putting event handlers on them
    if (currentPage > totalPages){
        return;
    } 
    console.log('Searching for', keywords);

     const flickrURL = 'https://api.flickr.com/services/rest';

     $.getJSON(flickrURL, { // other options would be: jQuery.get(), jQuery.post() something needs to be added here to load different pages
        method: 'flickr.photos.search', // check the documentation for this ^^
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: currentPage++,
        nojsoncallback: 1, // don't bother looking this up: JSONP needed to make it work 
        }).done(function(data) {
        showImages(data);
        totalPages = data.photos.pages;
        }).done(function(info) {
        console.log(info);
        });
};

const showImages = function (results) {
    const urls = _(results.photos.photo.map(generateURL));
    _(urls).each(function (url) {
        const $img = $('<img>').attr('src', url)
        $img.appendTo('#images');
    });
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

$(document).ready(function () { // this helps put stuff that is waiting for the DOM to work first!
    $('#search').on('submit', function (event){
        event.preventDefault();
        
        const searchTerms = $('#query').val(); // get the search terms
        $('#images').empty(); // clear the content of the #images element
        currentPage = 1; // reset to the beginning
        searchFlickr(searchTerms); // search Flickr for those terms

    });
    const debouncedSearch = _.debounce(function(searchTerms) {
        searchFlickr(searchTerms);
      }, 500); // adjust the debounce time to whatever works for you
      
      $(window).on('scroll', function() {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 500) { // adjust this value to whatever works for you
          const searchTerms = $('#query').val();
          debouncedSearch(searchTerms);
        }
      });
    // // Reset the currentPage variable when a new search term is entered
    //     $('#query').on('change', function() {
    //     currentPage = 1;
    //     $('#images').empty(); // clear the content of the #images element
    // });
});
