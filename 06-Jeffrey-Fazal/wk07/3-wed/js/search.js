const searchFlickr = function (keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // don't bother looking this up: JSONP
    }).done(showImages).done(notePage);
};

const showImages = function (results) {
    console.log(`RESULTS::: ${results}`)
    const urls = _(results.photos.photo).map(generateURL);
    // console.log(`URLS::: ${urls}`)
    _(urls).each(function (url) {
        // console.log(url)
        const $img = $('<img>').attr('src', url);
        $img.appendTo('#images');
    });
};

const notePage = function(data) {
    let firstPage = data.photos.page
    let lastPage= data.pages.pages
    console.log(`Pages are from ${firstPage} to last page ${lastPage}`)
}

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

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log('SCROLLBOTTOM:::' + scrollBottom)
        if (scrollBottom < 500) { // adjust this value to whatever works for you
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});
