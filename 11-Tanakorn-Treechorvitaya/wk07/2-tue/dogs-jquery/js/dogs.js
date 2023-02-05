$('#search').on('submit',function(event) {
    event.preventDefault();
    $.ajax('https://random.dog/woof.json').done(function(data) {
        const dog = data.url;
        console.log(dog);
        $('#dog').attr( 'src' , dog );
    });
    $.ajax('https://dog-api.kinduff.com/api/facts?raw=true').done(function(data) {
        const fact = data;
        $('#fact').html(fact);
    });
});