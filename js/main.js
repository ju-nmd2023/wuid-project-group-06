var i = 0; // start point
var images = [];
var time = 5000; // 5000ms between each image

// image list
image[0] = 'slideshow-1.jpg'
image[1] = 'slideshow-2.png'
image[2] = 'slideshow-3.jpeg'
image[3] = 'slideshow-4.png'
image[4] = 'slideshow-5.png'

// Change image

function changeImg(){
    document.slide.src = images[i]; 

    if(i < images.length - 1){
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}