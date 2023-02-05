const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);
    const img = document.createElement("img");
    img.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;
    document.body.appendChild(img);
  };
  const book = document.querySelector("#book").value;
  xhr.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=title:" + book
  );
  xhr.send();
};

document.getElementById("fetch").addEventListener("click", fetchBook);
