const searchFlickr = function(keywords){
    console.log('Searching for', keywords);

    const flickrURL = `https://api.flickr.com/services/rest`;

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // don't bother looking this up: JSONP
    }).done(showImages).done(function(info){
        console.log(info); // show images and show objects info
    });
};

const showImages = function(results){
    const urls =_(results.photos.photo).map(generateURL);
    _(urls).each(function(url){
        const $img =$('<img>').attr('src', url).click(function(){
            window.location.href = url;
        });
        $img.appendTo('#images');
    });
};

const generateURL = function(p){
    return [
        'https://farm',
        p.farm,
        '.staticflickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to someting else for different sizes (see documentation)
    ].join('');
}

let keywordRecord = '';

$(document).ready(function() {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        // get the search terms
        const searchTerms = $('#query').val();
        
        if (keywordRecord !== '' && keywordRecord !== searchTerms) {
            $('#images').empty();
            searchFlickr(searchTerms);
        } else {
            searchFlickr(searchTerms);
        }
        // search Flickr for those terms

        keywordRecord = searchTerms;
    });

    $(window).on('scroll', function() {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 500) { // adjust this value to whatever works for you.
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});
