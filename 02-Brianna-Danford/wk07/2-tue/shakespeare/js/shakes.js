$('#search').on('submit', function (event) {
    event.preventDefault();
    const synopsis = $('#synopsis').val();
	$.ajax('https://www.folgerdigitaltexts.org/Rom/synopsis', true).done(function (data) {
		const summary = data.synopsis;
		$('#sumary').attr('src', summary);
	});
});

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.folgerdigitaltexts.org/Rom/synopsis", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send();
