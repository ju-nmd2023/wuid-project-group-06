let iProduct = 0;
let imagesProduct = [];

imagesProduct[0] = "img/product-page/white-dress-1.jpg";
imagesProduct[1] = "img/product-page/white-dress-2.jpg";
imagesProduct[2] = "img/product-page/white-dress-3.jpg";
imagesProduct[3] = "img/product-page/white-dress-4.jpg";
imagesProduct[4] = "img/product-page/white-dress.jpg";

function startProduct() {
  document.getElementById(
    "product-slideshow-container-mobile"
  ).style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
}
// Function to move to the next image
function nextImageProduct() {
  // Increment index or reset to 0 if at the end of the array
  if (iProduct < imagesProduct.length - 1) {
    iProduct++;
  } else {
    iProduct = 0;
  }

  // Set the background image of the slideshow div
  document.getElementById(
    "product-slideshow-container-mobile"
  ).style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
}

// Function to move to the previous image
function prevImageProduct() {
  // Decrement index or set to the last index if at the beginning of the array
  if (iProduct > 0) {
    iProduct--; // = minus 1. So if i = 2, then i-- = 1
  } else {
    iProduct = imagesProduct.length - 1;
  }

  // Set the background image of the slideshow div
  document.getElementById(
    "product-slideshow-container-mobile"
  ).style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
}

let iProductTablet = 0;
let imagesProductTablet = [];

imagesProductTablet[0] = "img/product-page/white-dress-1.jpg";
imagesProductTablet[1] = "img/product-page/white-dress-2.jpg";
imagesProductTablet[2] = "img/product-page/white-dress-3.jpg";
imagesProductTablet[3] = "img/product-page/white-dress-4.jpg";
imagesProductTablet[4] = "img/product-page/white-dress.jpg";

function startProductTablet() {
  document.getElementById(
    "product-slideshow-container-tablet"
  ).style.backgroundImage =
    "url('" + imagesProductTablet[iProductTablet] + "')";
}
// Function to move to the next image
function nextImageProductTablet() {
  // Increment index or reset to 0 if at the end of the array
  if (iProductTablet < imagesProductTablet.length - 1) {
    iProductTablet++;
  } else {
    iProductTablet = 0;
  }

  // Set the background image of the slideshow div
  document.getElementById(
    "product-slideshow-container-tablet"
  ).style.backgroundImage =
    "url('" + imagesProductTablet[iProductTablet] + "')";
}

// Function to move to the previous image
function prevImageProductTablet() {
  // Decrement index or set to the last index if at the beginning of the array
  if (iProductTablet > 0) {
    iProductTablet--; // = minus 1. So if i = 2, then i-- = 1
  } else {
    iProductTablet = imagesProductTablet.length - 1;
  }

  // Set the background image of the slideshow div
  document.getElementById(
    "product-slideshow-container-tablet"
  ).style.backgroundImage =
    "url('" + imagesProductTablet[iProductTablet] + "')";
}

window.onload = function () {
  startProduct();
  startProductTablet();
};

function btnColor(button) {
  // Remove 'active' class from all buttons
  let buttons = document.querySelectorAll("#size-rectangle");
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  button.classList.add("active");
}

function heartIcon() {
  let icon = document.getElementById("heart");

  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
    document.getElementById("favourites-button").classList.add("active");
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
    document.getElementById("favourites-button").classList.remove("active");
  }
}

function wishlistTablet() {
  let wishlist = document.getElementById("wishlist-tablet");

  if (wishlist.classList.contains("far")) {
    wishlist.classList.remove("far");
    wishlist.classList.add("fas");
  } else {
    wishlist.classList.remove("fas");
    wishlist.classList.add("far");
  }
}

function wishlist() {
  let wishlist = document.getElementById("wishlist");

  if (wishlist.classList.contains("far")) {
    wishlist.classList.remove("far");
    wishlist.classList.add("fas");
  } else {
    wishlist.classList.remove("fas");
    wishlist.classList.add("far");
  }
}

function toggleBorder() {
  let chooseColour = document.getElementById("choose-colour");
  chooseColour.classList.toggle("clicked");
}

document.addEventListener("DOMContentLoaded", function() {
  var nextButton = document.getElementById("Next");
  var prevButton = document.getElementById("Prev");
  var slider = document.getElementById("Slider");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});
