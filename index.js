let header = document.getElementById("header");
let content = document.getElementById("content");
let exitbtn = document.getElementById("exit");
let right = document.getElementById("right");
let left = document.getElementById("left");
let imgsrc;

function setListeners(){
    const images = document.querySelectorAll('.images');
    images.forEach(image => {
        image.addEventListener('mouseenter', (event) => {
            event.target.style.opacity = 0.4;
            event.target.style.filter = "alpha(opacity = 40)";
        });
        image.addEventListener('mouseleave', (event) => {
            event.target.style.opacity = 1;
            event.target.style.filter = "alpha(opacity = 100)";
        });
        image.addEventListener('click', (event) => {
            imgsrc = event.target.src.replace(/^.*[\\\/]/, '');
            header.style.display = "none";
            exitbtn.style.display = "block";
            right.style.display = "block";
            left.style.display = "block";
            let currentimg = parseInt(imgsrc.split("")[0]);
            content.innerHTML = `<img id="currentimg" src="images/${imgsrc}"><p>${selectText(currentimg)}</p>`
        });
    });
}

function exitfs() {
    right.style.display = "none";
    left.style.display = "none";
    header.style.display = "flex";
    exitbtn.style.display = "none";
    content.innerHTML = `
    <img class="images" src="images/1.png" alt="1">
        <img class="images" src="images/2.gif" alt="2">
        <img class="images" src="images/3.gif" alt="3">
        <img class="images" src="images/4.gif" alt="4">
        <img class="images" src="images/5.png" alt="5">
        <img class="images" src="images/6.png" alt="6">
        <img class="images" src="images/7.png" alt="7">
        <img class="images" src="images/8.png" alt="8">
    `
    setListeners();
}

function next() {
    let currentimg = parseInt(imgsrc.split("")[0]) + 1;
    if (currentimg == 2 ||  currentimg == 3 ||  currentimg == 4){
        imgsrc = `${currentimg}.gif`;
    } else if(currentimg == 9) {
        imgsrc = `1.PNG`
        currentimg = 1;
    } else {
        imgsrc = `${currentimg}.png`;
    }
    content.innerHTML = `<img id="currentimg" src="images/${imgsrc}"><p>${selectText(currentimg)}</p>`
}

function previous() {
    let currentimg = parseInt(imgsrc.split("")[0]) - 1;
    if (currentimg == 2 ||  currentimg == 3 ||  currentimg == 4){
        imgsrc = `${currentimg}.gif`;
    } else if(currentimg == 0) {
        currentimg = 8;
        imgsrc = `8.png`;
    } else {
        imgsrc = `${currentimg}.png`;
    }
    content.innerHTML = `
    <img id="currentimg" src="images/${imgsrc}">
    <p>${selectText(currentimg)}</p>
    `
}

function selectText(currentimg) {
    let text;
    switch(currentimg){
        case 1:
            text = "Concept Art - Architecture Project";
            break;           
        case 2:
            text = `Motion Design - Lug und Trug / Season 2 (SWR)<br> <a target="_blank" href="https://www.ardmediathek.de/video/landesschau-baden-wuerttemberg/lug-und-trug-e-mails-vom-falschen-chef/swr-bw/Y3JpZDovL3N3ci5kZS9hZXgvbzE3MzY3MjE">https://www.ardmediathek.de/video/landesschau-baden-wuerttemberg/lug-und-trug-e-mails-vom-falschen-chef/swr-bw/Y3JpZDovL3N3ci5kZS9hZXgvbzE3MzY3MjE</a>`;
            break;
        case 3:
            text = `Motion Design - Lug und Trug / Season 3 (SWR)<br> <a target="_blank" href="https://www.ardmediathek.de/video/landesschau-baden-wuerttemberg/lug-und-trug-taschendiebstahl/swr-bw/Y3JpZDovL3N3ci5kZS9hZXgvbzE3NzUwOTU">https://www.ardmediathek.de/video/landesschau-baden-wuerttemberg/lug-und-trug-taschendiebstahl/swr-bw/Y3JpZDovL3N3ci5kZS9hZXgvbzE3NzUwOTU</a>`;
            break;
        case 4:
            text = "Motion Design - Peep and Friends (Comedy Sitcom)";
            break;
        case 5:
            text = "Artwork for book cover";
            break;
        case 6:
            text = `Concept Art - Broke Boys (Animated TV Show) <br> <a target="_blank" href="https://wecouldnotaffordourdomain.com">https://wecouldnotaffordourdomain.com</a>`;
            break;
        case 7:
            text = `Concept Art - Broke Boys (Animated TV Show) <br> <a target="_blank" href="https://wecouldnotaffordourdomain.com">https://wecouldnotaffordourdomain.com</a>`;
            break;
        case 8:
            text = `Concept Art - Broke Boys (Animated TV Show) <br> <a href="https://wecouldnotaffordourdomain.com">https://wecouldnotaffordourdomain.com</a>`;
            break;
    }
    return text;
}

setListeners();