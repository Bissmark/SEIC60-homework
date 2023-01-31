const fetchData = function () {
    // get the value of "play" option
    const choice = $('#plays').val();
    // request the data based on the play option
    $.ajax(`https://www.folgerdigitaltexts.org/${choice}/synopsis/`).done(function (data) {
    // show the play synopsis
    console.log(data);
    $('.synopsis').html(data);
    })
};

$('#read').on('click', fetchData)
