$.ajax(
  "https://api.nasa.gov/planetary/apod?api_key=5lPyutrobECjSqv8q0vTfNEE8jqEwxYDWgv6Nrem"
).done(function (data) {
  const cover = data.hdurl;
  $("#cover").attr("src", cover);
});
