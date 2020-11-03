var images = ["fall.jpeg", "leaf.jpeg", "flowerPlant.jpeg"];

function changeBackground() {
  var randomNumber = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = "url(img/" + images[randomNumber] + ")";
}

window.onload = changeBackground;
