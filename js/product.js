let iProduct = 0;
let imagesProduct = [];

imagesProduct[0] = "img/product-page/white-dress-1.jpg";
imagesProduct[1] = "img/product-page/white-dress-2.jpg";
imagesProduct[2] = "img/product-page/white-dress-3.jpg";
imagesProduct[3] = "img/product-page/white-dress-4.jpg";
imagesProduct[4] = "img/product-page/white-dress.jpg";

function startProduct () {
document.getElementById("product-slideshow-container-mobile").style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
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
  document.getElementById("product-slideshow-container-mobile").style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
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
  document.getElementById("product-slideshow-container-mobile").style.backgroundImage = "url('" + imagesProduct[iProduct] + "')";
}

window.onload = function (){
    startProduct();
}


function btnColor(button) {
    // Remove 'active' class from all buttons
    let buttons = document.querySelectorAll("#size-rectangle");
    buttons.forEach(function(btn) {
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

  function toggleBorder() {
    var chooseColour = document.getElementById('choose-colour');
    chooseColour.classList.toggle('clicked');
  }