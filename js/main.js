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
function changeImg(){
    document.getElementById("slideshow").style.backgroundImage = "url('" + images[i] + "')"; 

    if(i < images.length - 1){
        i++
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;
