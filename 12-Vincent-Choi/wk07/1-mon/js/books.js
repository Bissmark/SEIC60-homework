const fetchBookInfo = function () {
    const searchInfo = document.getElementById("searchInfo").value;
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchInfo}&json`);
    xhr.send(); 
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      const data = JSON.parse(xhr.responseText);
      console.log(data);
  
      let img = document.createElement('img');
      img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
      document.body.appendChild(img)
  
      let title = document.createElement('h1');
      title.innerText = data.items[0].volumeInfo.title;
      document.body.appendChild(title)
  
      let author = document.createElement('h2');
      author.innerText = data.items[0].volumeInfo.authors[0];
      document.body.appendChild(author)
    }
  }
  
  document.getElementById('fetch').addEventListener('click', fetchBookInfo);