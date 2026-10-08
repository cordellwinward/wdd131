const gallery = document.querySelector(".gallery");
const dialog = document.querySelector("dialog");
let dialogImg = dialog.querySelector("img");
const closeButton = dialog.querySelector(".close-image");
const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("nav")

gallery.addEventListener("click", function(event)
{
if (event.target.src != undefined)
    {
    dialogImg.src = event.target.src.replace("-sm", "-full");
    dialog.showModal();
    }
})

closeButton.addEventListener("click", (event) => {
    if (event.target = closeButton)
        {
    dialog.close();
        }
})


menu.addEventListener("click", (event) =>{
    if (event.target = menu){
        console.log("hi")
        nav.classList.toggle("show")
    }
})

