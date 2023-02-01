let isRequesting = false;
let page_number = 1

const searchFlickr = function (keywords) {

    if (isRequesting) {
        return;
    }

    isRequesting = true;
    const flickrURL = 'https://api.flickr.com/services/rest';
    //look at this section for changing result pages
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        page: page_number,
        text: keywords,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages).done(function (info) {
        console.log(info);
        isRequesting = false;
    });
    page_number += 1
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
        '_q.jpg'
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        $('img').remove();
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <  300) {
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});