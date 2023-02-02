const state = {
    nextPage: 1, 
    lastPageReached: false,
    requestInProgress: false
}

const searchFlickr = function(keywords) {

    if (state.lastPageReached || state.requestInProgress) return

    const flickrURL = 'https://api.flickr.com/services/rest'

    state.requestInProgress = true

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        page: state.nextPage++,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages).done(function(info) {
        console.log(info)
        state.requestInProgress = false
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true
        }
    })
}

const showImages = function(results) {
    const urls = _(results.photos.photo).map(generateURL)

    _(urls).each(function(url) {
        const $a = $('<a>').attr({
            href: url,
            target: '_blank'
        })
        
        const $img = $('<img>').attr('src', url)
        $img.appendTo($a)
        $a.appendTo('#image')
    })
}

const generateURL = function(p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change q to something else for different sizes (see documentation)
    ].join('')
}

$(document).ready(function() {
    
    $('#search').on('submit', function(event) {
        event.preventDefault()

        state.nextPage = 1 // reset to the beginning
        state.lastPageReached = false
        $('#image').empty()
        
        // get the search terms
        const searchTerms = $('#query').val()

        // search Flickr for those terms
        searchFlickr(searchTerms)
    })
    
    const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true) // leading edge
    
    $(window).on('scroll', function() { // twitchy!
        
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop()

        if (scrollBottom < 500) { // adjust this value to whatever works for you
            const searchTerms = $('#query').val()
            relaxedSearchFlickr(searchTerms)

        }
    })
})