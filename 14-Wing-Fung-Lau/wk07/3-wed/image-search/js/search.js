let page = 1;
let pages
const searchFlickr = function (keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // don't bother looking this up: JSONP
        page: page
    }).done(showImages).done(function(info){
        console.log(info)
    })
};

const showImages = function (results) {
    $test = results
    pages = results.photos.pages
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>').attr('src', url[0]);
        const $a = $('<a>').attr({'href': url[1], "target": "_blank"})
        $img.appendTo($a);
        $a.appendTo('#images')
    }); 
};

const generateURL = function (p) {
    return [[
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join(''),`https://www.flickr.com/photos/${p.owner}/${p.id}`]
};








let timeout;

$(document).ready(function () {
    
    $('#btnFly').on('click', function(){
        let $imgs = $('img');
        $imgs.each(function(index){
            let $img = $(this);
            setTimeout(function() {
                $img.addClass('fly');
                console.log($img.attr('class'));
            }, 1000* (index + 1));
        });
    });


    document.getElementById("backTop").addEventListener("click", function() {
        document.getElementById("query").scrollIntoView({ behavior: "smooth", block: "center" });
    });


    $('#search').on('submit', function (event) {
        event.preventDefault();
        clearTimeout(timeout)
        timeout = setTimeout(function() {
        $('p').remove()
        $('br').remove()
        $('img').remove()
        const wiki = $('#query').val()
        const yourAPIkey = 'AIzaSyB78d32yWEekzTclS_gZO9CqWVCMNptHgY'
        const yourCSEid = 'e3218dc0a18944649'
        $.ajax(`https://www.googleapis.com/customsearch/v1?key=${yourAPIkey}&cx=${yourCSEid}&q=${wiki.replace(/ /g, '%20')}%20wikipedia`).done(function(data){
            try { 
                let wikiURL = data.items[0].link
                wikiTitle = wikiURL.substring(wikiURL.indexOf('/wiki/')+6)
                let dbpediaURL = `https://dbpedia.org/page/${wikiTitle}`
                $.ajax(dbpediaURL).done(function(data){
                let $elements = $.parseHTML(data);
                $($elements).each(function (i, el) {
                    if ($(el).is('title')) {
                        title = $(el).text()
                    }
                    if ($(el).is('meta')&& $(el).attr('property') === 'og:description' ){
                        title = wikiTitle.replace(/_/g, ' ')
                        description = $(el).attr('content')
                        $('#images').prepend(`<br>`)
                        $('#images').prepend(`<p>${ description }</p>`)
                        $('#images').prepend(`<p style="font-weight:bold">${ decodeURIComponent(title) }</p>`)
                        page = 1
                        const searchTerms = $('#query').val();
                        searchFlickr(searchTerms);
                    }
                })
                })
            }
            catch {
                $('#images').prepend(`<br>`)
                $('#images').prepend(`<p style="font-weight:bold">No result on Wikipedia</p>`)
                page = 1
                const searchTerms = $('#query').val();
                searchFlickr(searchTerms);
            }
        })
    },300)
    });



    
    $(window).on('scroll',  function() {
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            const scrollBottom = $(document).height() - $(window).height() -$(window).scrollTop()
            if (scrollBottom < 500) {
                if (page <= pages) {
                    const searchTerms = $('#query').val();
                    page = page + 1
                    searchFlickr(searchTerms);
                    if (page == pages && $('#noMorePhoto').length < 1) {
                        const $p = $('<p>').attr('id', 'noMorePhoto');
                        $p.text("No more photos!")
                        $p.appendTo('body')
                    }
                }
               
                    
         
            }
        }, 300)
    })



   

});