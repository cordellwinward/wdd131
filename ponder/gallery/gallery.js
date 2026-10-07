// 1. Retrieve elements for the DOM
const dialog = document.querySelector("dialog");
const gallery = document.querySelector(".gallery")
const dialogImage = dialog.querySelector("img")
const closeButton = dialog.querySelector('.close-viewer');

// 2. Add an event listener to show dialog

gallery.addEventListener("click", function(event){
    // console.log(event.target.src);

    // swap out source of dailog image
    if (event.target.src != undefined){
        dialogImage.src = event.target.src.replace("-sm", "-full");
        // show dialog box
        dialog.showModal();
        }

});

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

