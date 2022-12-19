# Duck Hunt

![](https://media.giphy.com/media/TWxWXeuF8rIhG/giphy.gif)

For this exercise, you'll be building the classic Nintendo game, 
[Duck Hunt](https://en.wikipedia.org/wiki/Duck_Hunt).
# Duck Hunt

![](https://media.giphy.com/media/TWxWXeuF8rIhG/giphy.gif)

For this exercise, you'll be building the classic Nintendo game, [Duck Hunt]
(https://en.wikipedia.org/wiki/Duck_Hunt).

index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="duckhunt.css" />
    <title>Duck Hunt</title>
  </head>
  <body>
    <script src="duckhunt.js"></script>
  </body>
</html>

CSS
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url(images/background.png);
  background-size: cover;
  background-position: center;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: bicubic;
  overflow: hidden;
}

.duck {
  position: absolute;
  background-image: url(images/duckhunt.png);
  background-position: -100px -160px;
  width: 110px;
  height: 115px;
  transition: top 2s, left 2s;
  transition-timing-function: linear;
  background-repeat: no-repeat;
}

.duck.right {
  background-position: -200px -160px;
}
.duck.right.flap {
  background-position: -300px -160px;
}
.duck {
  background-position: -100px -160px;
}
.duck.flap {
  background-position: -430px -160px;
}
.duck.shot {
  background-position: center;
  background-image: url(images/shot.png);
}

JavaScript
const body = document.body