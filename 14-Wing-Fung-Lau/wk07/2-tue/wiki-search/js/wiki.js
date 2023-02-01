$('#search').on('submit', function (event) {
    event.preventDefault();
    const result = $('#wiki').val()
    const yourAPIkey = 'AIzaSyB78d32yWEekzTclS_gZO9CqWVCMNptHgY'
    const yourCSEid = 'e3218dc0a18944649'
    $.ajax(`https://www.googleapis.com/customsearch/v1?key=${yourAPIkey}&cx=${yourCSEid}&q=${result.replace(/ /g, '%20')}%20wikipedia`).done(function(data){
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

                    $('body').append(`<p style="font-weight:bold">${ title }</p>`)
                    $('body').append(`<p>${ description }</p>`)
                    $('body').append(`<br>`)
                }
            })
            })
        }
        catch {
            $('body').append(`<p style="font-weight:bold">No result on Wikipedia</p>`)
            $('body').append(`<br>`)
        }
    })
})