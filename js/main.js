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

//////

// Call the changeImg function when the window has finished loading
window.onload = changeImg;

