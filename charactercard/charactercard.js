snortleblatCard ={
    name: "Snortleblat",
    imageURL : "snortleblat.webp",
    imageAlt : "Snortleblat monster in swamp",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,
    wasAttacked: function(){
        console.log("was attacked clicked")
        if (this.health > 20){
            this.health -=20;
        }
        else if (this.health <= 20){
            this.health = 0;
        }
        updateHTML();
        if (this.health <= 0){
            setTimeout(() => {
                alert(`Your character ${snortleblatCard.name} died`)},
                1
            );
        }
    },
    levelUp : function (){
        this.level ++;
        updateHTML();
    }
};

document.querySelector("#attack").addEventListener("click", (event) => {
    snortleblatCard.wasAttacked();
} );

document.querySelector("#levelUp").addEventListener("click", (event) => {
    snortleblatCard.levelUp();
})




function updateHTML(){
    const h1 = document.querySelector("h1");
    const cardImage = document.querySelector(".card-img")
    const stats = document.querySelector(".stats");
    h1.innerHTML = `${snortleblatCard.name}`
    cardImage.setAttribute("src", snortleblatCard.imageURL)
    cardImage.setAttribute("alt", snortleblatCard.imageAlt)
    stats.innerHTML = `
        <p id="class"><b>Class: </b>${snortleblatCard.class}</p>
        <p id="level"><b>Level: </b>${snortleblatCard.level}</p>
        <p id="health"><b>Health: </b>${snortleblatCard.health}</p>
    `
}


// relevant HTML
// <div class="name">
        //     <h1>Snortleblat</h1>
        // </div>
        // <div>
        //     <div class="stats">
                // <p id="class"><b>Class: </b>Swamp Beast Diplomat</p>
                // <p id="level"><b>Level: </b>8</p>
                // <p id="health"><b>Health: </b>100</p>
        //     </div>