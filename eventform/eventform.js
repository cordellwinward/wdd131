const form = document.querySelector("form")
const eventReceipt = document.querySelector("#event-receipt")

form.type.addEventListener("change", (item) => {
    let selection = item.target.value
    let studentId = document.querySelector("#studentId")
    let studentIdLabel = document.querySelector("#studentId-label")
    let accessCode = document.querySelector("#accessCode")
    let accessCodeLabel = document.querySelector("#accessCode-label")
    if (selection === ""){
        studentId.classList.remove("required");
        studentId.removeAttribute("required")
        studentIdLabel.classList.remove("required");
        accessCode.classList.remove("required");
        accessCode.removeAttribute("required")
        accessCodeLabel.classList.remove("required");
    }
    else if (selection === "student"){
        studentId.classList.add("required");
        studentId.setAttribute("required", "")
        studentIdLabel.classList.add("required");
        accessCode.classList.remove("required");
        accessCode.removeAttribute("required")
        accessCodeLabel.classList.remove("required");
    }
    else if (selection === "guest"){
        studentId.classList.remove("required");
        studentId.removeAttribute("required")
        studentIdLabel.classList.remove("required");
        accessCode.classList.add("required");
        accessCode.setAttribute("required", "")
        accessCodeLabel.classList.add("required");
    }
    });


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.type.value.trim();
    const eventDate = new Date(form.eventDate.value.trim() + "T00:00");
    const currentDate = new Date();
    console.log("1")
    console.log(currentDate)
    if (eventDate <= currentDate){
        console.log("2")
        eventReceipt.innerHTML = 
        `
        <p>Your event date must be in the future</p>
        `
    }
    else{
        eventReceipt.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${eventDate.getFullYear()}-${eventDate.getMonth() + 1}-${eventDate.getDate()}</p>
        `
        form.reset()
    }
});

form.studentId.addEventListener("invalid", (item) =>
{
    if (form.studentId.validity.patternMismatch){
        eventReceipt.innerHTML = 
        `
        <p>You must enter a valid I-number containing exactly 9 digits and only numbers.</p>
        `
    }
})
