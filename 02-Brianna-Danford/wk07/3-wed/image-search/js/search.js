const state = {
    nextPage: 1,
    lastPageReached: false,
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached) return;
    
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com./services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',          
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.nextPage++,
        nojsoncallback: 1
    }).done(showImages).done(function (info) {
        console.log(info);
        if(info.photos.page >= info.photos.page) {
            state.lastPageReached = true;
        }
    });
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>').attr('src', url);
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
        '_q.jpg' //change q tosomething else for different sizes (see documentation)
    ].join('');
};

//form submit handler 
$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        state.nextPage = 1; //reset to the beginning
        state.lastPageReached = false;
        $('#images').empty();

//get the search terms 
        const searchTerms = $('#query').val();
        // console.log(searchTerms);

//search flickr for those terms
        searchFlickr(searchTerms);
//display the results 
    });

    const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true);

    $(window).on('scroll', function () {
    // console.log('scroll detected');
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 500) { //value can be adjusted
            const searchTerms = $('#query').val();
            relaxedSearchFlickr(searchTerms);
        }
    });
});




