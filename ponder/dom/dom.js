// How to manipulate the DOM with JavaSCript

// Grab our h1 from the page
let heading = document.querySelector("h1");
let hading = document.querySelectorAll("h1")

console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else!"

//change the text color
heading.style.color ="#0000FF"

// Pick your own style and change it

heading.style.fontSize = "60px"
heading.style.border = "1px solid #0000FF"

// retrieve an ID element
document.getElementById("topics").style.color = "red";
// This does the same thing
document.querySelector("#topics").style.color = "red";

// select the img tag
let image = document.querySelector("img")

console.log(image.getAttribute("src"))
image.setAttribute("src", "https://www.clipartmax.com/png/middle/44-442746_frisbee-golf-clipart-clip-art-disk-golf.png")


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})