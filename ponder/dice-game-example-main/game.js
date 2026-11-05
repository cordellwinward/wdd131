// 1. Add event listener to the rollButton
document.querySelector("#rollButton").addEventListener("click", event =>{
    // animate the die
        // get the rolling dice animation and apply it to all the the dice
        const images = document.querySelectorAll("#gameboard img");
        images.forEach(image => {
            if (isDieUnlocked(image)){
                image.src = "assets/die_rolling.gif";
            }
        })
        
        // change the value each die lands on randomly by changing the src image
        setTimeout(() =>{
            //run what is in here after x milliseconds
            images.forEach(image => {
                if (isDieUnlocked(image)){
                    // set the image to a random number
                    const roll = Math.ceil(Math.random() * 6);
                    image.src = `assets/white_dice_${roll}.gif`
                }

    })
    }, 500)
});

function isDieUnlocked(dieImage){
    // is the corresponding checkbox checked? return false
    const checkboxes = document.querySelectorAll("#gameboard input");
    // return a new array of just the unchecked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}