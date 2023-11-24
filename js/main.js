// Initialize index for the current image
let i = 0; // start point

// Array to store image paths
let images = [];

// Time delay between each image change (in milliseconds)
let time = 5000; // 5000ms between each image

// Populate the image array with file paths
images[0] = "img/home-page/slideshow-1.jpg";
images[1] = "img/home-page/slideshow-2.png";
images[2] = "img/home-page/slideshow-3.jpeg";
images[3] = "img/home-page/slideshow-4.png";
images[4] = "img/home-page/slideshow-5.png";

// Function to update the appearance of the slider bar
function updateSliderBar() {
    // Select all elements with the class 'bar'
    const bars = document.querySelectorAll('.bar');

    // Iterate through each bar and set its background color based on the current index
    bars.forEach((bar, index) => {
        if (i === index) {
            // Highlight the bar if it corresponds to the current image
            bar.style.backgroundColor = '#ccc';
        } else {
            // Set background color to default if it does not correspond to the current image
            bar.style.backgroundColor = '#fff';
        }
    });
}

// Function to change the background image and update the slider bar
function changeImg() {
    // Set the background image of the slideshow div
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    // Update the slider bar to reflect the current image
    updateSliderBar();

    // Increment index or reset to 0 if at the end of the array
    if (i < images.length - 1) {
        i++; // = plus 1. So if i = 1, then i++ = 2
    } else {
        i = 0;
    }

    // Set a timeout to call the function recursively after a specified time
    setTimeout(changeImg, time);
}


// Function to move to the next image
function nextImage() {
    // Increment index or reset to 0 if at the end of the array
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // Set the background image of the slideshow div
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    // Update the slider bar
    updateSliderBar();
}

// Function to move to the previous image
function prevImage() {
    // Decrement index or set to the last index if at the beginning of the array
    if (i > 0) {
        i--; // = miunus 1. So if i = 2, then i-- = 1
    } else {
        i = images.length - 1;
    }

    // Set the background image of the slideshow div
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    // Update the slider bar
    updateSliderBar();
}

// Function to change the image based on the specified index
function changeImageByIndex(index) {
    // Set the index to the specified value
    i = index;

    // Set the background image of the slideshow div
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    // Update the slider bar
    updateSliderBar();
}

//Tablet//
// Initialize index for the current image on tablet
let iTablet = 0; // start point

// Array to store image paths on tablet
let imagesTablet = [];

// Time delay between each image change on tablet (in milliseconds)
let timeTablet = 5000; // 5000ms between each image

// Populate the image array with file paths on tablet
imagesTablet[0] = "img/home-page/slideshow-1.jpg";
imagesTablet[1] = "img/home-page/slideshow-2.png";
imagesTablet[2] = "img/home-page/slideshow-3.jpeg";
imagesTablet[3] = "img/home-page/slideshow-4.png";
imagesTablet[4] = "img/home-page/slideshow-5.png";

// Function to update the appearance of the slider bar on tablet
function updateSliderBarTablet() {
    // Select all elements with the class 'bar' in the tablet slider
    const bars = document.querySelectorAll('.sliderBar-tablet .bar');

    // Iterate through each bar and set its background color based on the current index
    bars.forEach((bar, index) => {
        if (iTablet === index) {
            // Highlight the bar if it corresponds to the current image
            bar.style.backgroundColor = '#ccc';
        } else {
            // Set background color to default if it does not correspond to the current image
            bar.style.backgroundColor = '#fff';
        }
    });
}

// Function to change the background image and update the slider bar on tablet
function changeImgTablet() {
    // Set the background image of the tablet slideshow div
    document.getElementById("slideshow-tablet").style.backgroundImage = "url('" + imagesTablet[iTablet] + "')";

    // Update the slider bar to reflect the current image
    updateSliderBarTablet();

    // Increment index or reset to 0 if at the end of the array
    if (iTablet < imagesTablet.length - 1) {
        iTablet++;
    } else {
        iTablet = 0;
    }

    // Set a timeout to call the function recursively after a specified time
    setTimeout(changeImgTablet, timeTablet);
}

// Function to move to the next image on tablet
function nextImageTablet() {
    // Increment index or reset to 0 if at the end of the array
    if (iTablet < imagesTablet.length - 1) {
        iTablet++;
    } else {
        iTablet = 0;
    }

    // Set the background image of the tablet slideshow div
    document.getElementById("slideshow-tablet").style.backgroundImage = "url('" + imagesTablet[iTablet] + "')";

    // Update the slider bar on tablet
    updateSliderBarTablet();
}

// Function to move to the previous image on tablet
function prevImageTablet() {
    // Decrement index or set to the last index if at the beginning of the array
    if (iTablet > 0) {
        iTablet--;
    } else {
        iTablet = imagesTablet.length - 1;
    }

    // Set the background image of the tablet slideshow div
    document.getElementById("slideshow-tablet").style.backgroundImage = "url('" + imagesTablet[iTablet] + "')";

    // Update the slider bar on tablet
    updateSliderBarTablet();
}

// Function to change the image based on the specified index on tablet
function changeImageByIndexTablet(index) {
    // Set the index to the specified value
    iTablet = index;

    // Set the background image of the tablet slideshow div
    document.getElementById("slideshow-tablet").style.backgroundImage = "url('" + imagesTablet[iTablet] + "')";

    // Update the slider bar on tablet
    updateSliderBarTablet();
}

//Mobile//

// Initialize index for the current image on mobile
let iMobile = 0; // start point

// Array to store image paths on mobile
let imagesMobile = [];

// Time delay between each image change on mobile (in milliseconds)
let timeMobile = 5000; // 5000ms between each image

// Populate the image array with file paths on mobile
imagesMobile[0] = "img/home-page/slideshow-1.jpg";
imagesMobile[1] = "img/home-page/slideshow-2.png";
imagesMobile[2] = "img/home-page/slideshow-3.jpeg";
imagesMobile[3] = "img/home-page/slideshow-4.png";
imagesMobile[4] = "img/home-page/slideshow-5.png";

function updateSliderBarMobile() {
    // Select all elements with the class 'bar' in the tablet slider
    const bars = document.querySelectorAll('.sliderBar-mobile .bar');

    // Iterate through each bar and set its background color based on the current index
    bars.forEach((bar, index) => {
        if (iMobile === index) {
            // Highlight the bar if it corresponds to the current image
            bar.style.backgroundColor = '#ccc';
        } else {
            // Set background color to default if it does not correspond to the current image
            bar.style.backgroundColor = '#fff';
        }
    });
}

// Function to change the background image and update the slider bar on mobile
function changeImgMobile() {
    // Set the background image of the mobile slideshow div
    document.getElementById("slideshow-mobile").style.backgroundImage = "url('" + imagesMobile[iMobile] + "')";

    // Update the slider bar to reflect the current image on mobile
    updateSliderBarMobile();

    // Increment index or reset to 0 if at the end of the array on mobile
    if (iMobile < imagesMobile.length - 1) {
        iMobile++;
    } else {
        iMobile = 0;
    }

    // Set a timeout to call the function recursively after a specified time on mobile
    setTimeout(changeImgMobile, timeMobile);
}


// Function to move to the next image on mobile
function nextImageMobile() {
    // Increment index or reset to 0 if at the end of the array
    if (iMobile < imagesMobile.length - 1) {
        iMobile++;
    } else {
        iMobile = 0;
    }

    // Set the background image of the mobile slideshow div
    document.getElementById("slideshow-mobile").style.backgroundImage = "url('" + imagesMobile[iMobile] + "')";

    // Update the slider bar on mobile
    updateSliderBarMobile();
}

// Function to move to the previous image on mobile
function prevImageMobile() {
    // Decrement index or set to the last index if at the beginning of the array
    if (iMobile > 0) {
        iMobile--;
    } else {
        iMobile = imagesMobile.length - 1;
    }

    // Set the background image of the mobile slideshow div
    document.getElementById("slideshow-mobile").style.backgroundImage = "url('" + imagesMobile[iMobile] + "')";

    // Update the slider bar on mobile
    updateSliderBarMobile();
}

// Function to change the image based on the specified index on mobile
function changeImageByIndexMobile(index) {
    // Set the index to the specified value
    iMobile = index;

    // Set the background image of the mobile slideshow div
    document.getElementById("slideshow-mobile").style.backgroundImage = "url('" + imagesMobile[iMobile] + "')";

    // Update the slider bar on mobile
    updateSliderBarMobile();
}

// Call the changeImg function for all devices when the window has finished loading
window.onload = function () {
    changeImgMobile();
    changeImg();
    changeImgTablet();
};