const images = ["0.jpg", "1.jpg", "2.jfif", "3.jfif", "4.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

const selectImage = document.createElement("img");
selectImage.src = `img/${randomImage}`;


document.body.appendChild(selectImage);