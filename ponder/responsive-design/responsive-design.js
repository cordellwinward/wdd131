let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", function(e) {
    console.log("I am clicked")
    document.querySelector("nav").classList.toggle("not-hidden");
    console.log("testing")
    document.querySelector(".menu-btn").classList.toggle("change");
});

