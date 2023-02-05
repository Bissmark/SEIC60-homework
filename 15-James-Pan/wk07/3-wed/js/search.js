const searchFlickr = (function () {
  let currentPage = 1;
  let isSearching = false;
  let totalPages = 1;

  return function (keywords) {
    if (isSearching || currentPage > totalPages) {
      return;
    }

    console.log("Search for", keywords);
    const flickrURL = "https://api.flickr.com/services/rest";

    isSearching = true;
    $.getJSON(flickrURL, {
      method: "flickr.photos.search",
      api_key: "2f5ac274ecfac5a455f38745704ad084",
      text: keywords,
      format: "json",
      nojsoncallback: 1,
      page: currentPage,
    })
      .done(function (results) {
        showImages(results);
        isSearching = false;
        totalPages = results.photos.pages;
        currentPage += 1;
      })
      .fail(function () {
        isSearching = false;
      });
  };
})();

const showImages = function (results) {
  const photos = results.photos.photo;
  const urls = _(photos).map(generateURL);
  _(urls).each(function (url, i) {
    const photo = photos[i];
    const link = `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;
    const $img = $("<img>").attr("src", url);
    const $a = $("<a>").attr("href", link).append($img);
    $a.appendTo("#images");
  });
};

const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
  ].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault();
    const searchTerms = $("#query").val();
    $("#images").empty();
    searchFlickr(searchTerms);
  });

  $(window).on("scroll", function () {
    const scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 300) {
      const searchTerms = $("#query").val();
      searchFlickr(searchTerms);
    }
  });
});
