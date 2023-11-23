let i = 0; // start point
let images = [];
let time = 5000; // 5000ms between each image

// image list
images[0] = "img/home-page/slideshow-1.jpg";
images[1] = "img/home-page/slideshow-2.png";
images[2] = "img/home-page/slideshow-3.jpeg";
images[3] = "img/home-page/slideshow-4.png";
images[4] = "img/home-page/slideshow-5.png";

// Change image

function changeImg() {
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

function nextImage() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";
}

function prevImage() {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }

    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";
}

function updateSliderBar() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (index === i) {
            bar.style.backgroundColor = '#ccc';
        } else {
            bar.style.backgroundColor = '#fff';
        }
}
)};

function changeImageByIndex(index) {
    i = index;
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";
    updateSliderBar();
};

function updateSliderBar() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (i === index) {
            bar.style.backgroundColor = '#ccc';
        } else {
            bar.style.backgroundColor = '#fff';
        }
    });
}

function updateSliderBar() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (i === index) {
            bar.style.backgroundColor = '#ccc';
        } else {
            bar.style.backgroundColor = '#fff';
        }
    });
}

function changeImg() {
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";

    updateSliderBar();

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

function nextImage() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";
    updateSliderBar();
}

function prevImage() {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }

    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')";
    updateSliderBar();
}

window.onload = changeImg;
