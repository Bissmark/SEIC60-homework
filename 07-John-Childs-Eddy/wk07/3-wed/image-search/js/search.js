const state = {
    nextPage: 1,
    lastPageReached: false,
    requestInProgress: false
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached || state.requestInProgress) return;

    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    state.requestInProgress = true;

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: state.nextPage++
    }).done(showImages).done(function (info) {
        console.log(info);
        state.requestInProgress = false;
        if (info.photos.page >= info.photos.pages) {
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
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        state.nextPage = 1; // reset to the beginning
        state.lastPageReached = false;
        $('#images').empty()

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 500) { // adjust this value to whatever works for you
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});