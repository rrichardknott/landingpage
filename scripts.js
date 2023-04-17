const images = document.querySelectorAll("img");
let index = 0;

function showImage() {
  images[index].classList.add("active");
  index++;

  if (index >= images.length) {
    index = 0;
  }

  setTimeout(hideImage, 5000);
}

function hideImage() {
  images.forEach((image) => image.classList.remove("active"));
  showImage();
}

showImage();
