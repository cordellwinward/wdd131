// calling an API in javascript using the fetch method
//fetch is asynchronous

async function getMovies() {
    const url = "https://raw.githubusercontent.com/jameswarnerbyui/static-apis/refs/heads/main/movies.json"

    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data.movies)
    displayMovies(data.movies)
};

getMovies();

function displayMovies(movies){
    const body = document.querySelector("body")

    movies.forEach(movie => {
        body.innerHTML += `
        <h1>Title : ${movie.title}</h1>
        <img src = "${movie.imgSrc}" alt = ${movie.imgAlt}>`
    })
}

