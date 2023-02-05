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

const imageDiplay = function(results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>').attr('src', url);
        $img.appendTo('#images');
    });
}

const flickrSearch = function (keywords) {
    console.log('Searching for', keywords);

    $.getJSON('https://api.flickr.com/services/rest', {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // don't bother looking this up: JSONP
    }).done(imageDiplay).done(function (info) {
        console.log(info);
    });
}

$(document).ready(function(){
    $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
    $('#search').on('submit', function (event) {
        event.preventDefault();

        const searchTerms = $('#query').val();
        console.log(searchTerms)
        flickrSearch(searchTerms);
    });
    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom > 0 && scrollBottom < 500) { // adjust this value to whatever works for you
            const searchTerms = $('#query').val();
            flickrSearch(searchTerms);
        }
    });
});