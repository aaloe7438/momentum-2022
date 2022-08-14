const images = ["0.jpg", "1.avif", "2.jfif", "3.jfif", "4.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

const selectImage = document.createElement("img");
selectImage.src = `img/${randomImage}`;

document.body.insertBefore(selectImage, document.getElementById("center-box"));

const img = document.querySelector("img");
img.classList.add("backgroundSet");