const body = document.body;

let imageArray = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg"];
let i = 0;

const imageSwitcher = () => { 
    body.style.backgroundImage = 'url(' + imageArray[i] + ')';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    i++;

    if (i >= imageArray.length) {
        i = 0;
    }
}

setInterval(imageSwitcher, 5000);