import { filename } from "./index.js";

console.log(filename);

function setPicture(imgsrc) {
    let im = document.getElementById("fs-image");
    im.innerHTML = `<img id="currentimg" src="images/${imgsrc}">`;
}

setPicture(filename);