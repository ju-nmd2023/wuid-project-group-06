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

function wishlistMobile() {
  let wishlistMobile = document.getElementById("wishlist-mobile");

  if (wishlistMobile.classList.contains("far")) {
    wishlistMobile.classList.remove("far");
    wishlistMobile.classList.add("fas");
  } else {
    wishlistMobile.classList.remove("fas");
    wishlistMobile.classList.add("far");
  }
}


// Function to toggle between "far" and "fas" heart icons when the heart button is clicked
function wishlist(farId, fasId) {
  // Get references to the "far" and "fas" heart icons
  let heartFar = document.getElementById(farId);
  let heartFas = document.getElementById(fasId);

     // Check if the "far" icon is currently hidden (using the "hidden" class)
  if (heartFar.classList.contains("hidden")) {
    // If "far" is hidden, make it visible by removing the "hidden" class
    heartFar.classList.remove("hidden");
    // Hide the "fas" icon by adding the "hidden" class
    heartFas.classList.add("hidden");
  } else {
    // If "far" is visible, hide it by adding the "hidden" class
    heartFar.classList.add("hidden");
    // Make the "fas" icon visible by removing the "hidden" class
    heartFas.classList.remove("hidden");
  }
}

function toggleBorder() {
  let chooseColour = document.getElementById("choose-colour");
  chooseColour.classList.toggle("clicked");
}

/*slideshow 1*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next");
  let prevButton = document.getElementById("Prev");
  let slider = document.getElementById("Slider");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*slideshow 2*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-2");
  let prevButton = document.getElementById("Prev-2");
  let slider = document.getElementById("Slider-2");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*slideshow 3-cart page*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-3");
  let prevButton = document.getElementById("Prev-3");
  let slider = document.getElementById("Slider-3");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*mobile slideshow 1*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-mobile");
  let prevButton = document.getElementById("Prev-mobile");
  let slider = document.getElementById("Slider-mobile");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*mobile slideshow 2*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-mobile1");
  let prevButton = document.getElementById("Prev-mobile1");
  let slider = document.getElementById("Slider-mobile1");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*tablet slideshow 1*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-tablet1");
  let prevButton = document.getElementById("Prev-tablet1");
  let slider = document.getElementById("Slider-tablet1");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});

/*tablet slideshow 2*/

document.addEventListener("DOMContentLoaded", function() {
  let nextButton = document.getElementById("Next-tablet");
  let prevButton = document.getElementById("Prev-tablet");
  let slider = document.getElementById("Slider-tablet");

  nextButton.addEventListener("click", function() {
      slider.appendChild(slider.firstElementChild);
  });

  prevButton.addEventListener("click", function() {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  });
});


