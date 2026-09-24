let modeSelect = document.querySelector("#mode-select");

modeSelect.addEventListener("change", changeMode);


function changeMode(){
    let mode = modeSelect.value;
    let byuiImage = document.querySelector("#byui-logo");
    let body = document.querySelector("body");

    if (mode === "light"){
        body.classList.remove("dark");
        byuiImage.setAttribute("src", "byui-logo.webp");
    }
    else if (mode === "dark")
        body.classList.add("dark");
        byuiImage.setAttribute("src", "byui-logo-white.png");
}