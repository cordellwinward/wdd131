
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Shawshank Redemption", date: "September 23, 1994", description: "A banker forms an unlikely friendship while finding hope during decades in prison.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/ShawshankRedemptionMoviePoster.jpg", imgAlt: "The Shawshank Redemption movie poster", ages: "16+", genre: "Drama", stars: "★★★★★"
      },
      {
        title: "The Godfather", date: "March 24, 1972", description: "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/The_Godfather.jpg", imgAlt: "The Godfather movie poster", ages: "16+", genre: "Crime/Drama", stars: "★★★★★"
      },
      {
        title: "The Dark Knight", date: "July 18, 2008", description: "Batman faces a criminal mastermind who pushes Gotham and its heroes toward chaos.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/The_Dark_Knight_(2008_film).jpg", imgAlt: "The Dark Knight movie poster", ages: "13+", genre: "Action/Crime", stars: "★★★★★"
      },
      {
        title: "Inception", date: "July 16, 2010", description: "A skilled thief who steals secrets through dreams is offered a chance to erase his past.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Inception_(2010)_theatrical_poster.jpg", imgAlt: "Inception movie poster", ages: "13+", genre: "Action/Science Fiction", stars: "★★★★★"
      },
      {
        title: "Interstellar", date: "November 7, 2014", description: "Explorers travel through a wormhole in search of a new home for humanity.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Interstellar_film_poster.jpg", imgAlt: "Interstellar movie poster", ages: "10+", genre: "Science Fiction/Drama", stars: "★★★★★"
      },
      {
        title: "Jaws", date: "June 20, 1975", description: "A police chief, marine biologist, and fisherman hunt a great white shark threatening a seaside town.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Jaws_movie_poster.jpg", imgAlt: "Jaws movie poster", ages: "13+", genre: "Thriller/Adventure", stars: "★★★★"
      },
      {
        title: "Jurassic Park", date: "June 11, 1993", description: "A theme park filled with cloned dinosaurs becomes a fight for survival when the animals escape.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Jurassic_Park_poster.jpg", imgAlt: "Jurassic Park movie poster", ages: "10+", genre: "Science Fiction/Adventure", stars: "★★★★★"
      },
      {
        title: "Titanic", date: "December 19, 1997", description: "A romance unfolds between two passengers from different social classes aboard the ill-fated Titanic.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Titanic_(1997)_poster.png", imgAlt: "Titanic movie poster", ages: "13+", genre: "Romance/Drama", stars: "★★★★"
      },
      {
        title: "Avatar", date: "December 18, 2009", description: "A former Marine becomes torn between following orders and protecting the people of Pandora.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Avatar-Teaser-Poster.jpg", imgAlt: "Avatar movie poster", ages: "10+", genre: "Action/Science Fiction", stars: "★★★★"
      },
      {
        title: "Toy Story", date: "November 22, 1995", description: "A cowboy toy feels threatened when a flashy new space ranger joins his owner's collection.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Toy_Story.jpg", imgAlt: "Toy Story movie poster", ages: "6+", genre: "Animation/Comedy", stars: "★★★★★"
      },
      {
        title: "Finding Nemo", date: "May 30, 2003", description: "A timid clownfish crosses the ocean to find his captured son and learns to trust others along the way.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Finding_Nemo.jpg", imgAlt: "Finding Nemo movie poster", ages: "6+", genre: "Animation/Adventure", stars: "★★★★★"
      },
      {
        title: "Up", date: "May 29, 2009", description: "A widower attaches balloons to his house and begins an unexpected adventure to South America.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Up_(2009_film).jpg", imgAlt: "Up movie poster", ages: "6+", genre: "Animation/Adventure", stars: "★★★★★"
      },
      {
        title: "WALL-E", date: "June 27, 2008", description: "A small waste-collecting robot begins a journey across the stars that could save humanity.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/WALL-E.jpg", imgAlt: "WALL-E movie poster", ages: "6+", genre: "Animation/Science Fiction", stars: "★★★★★"
      },
      {
        title: "Ratatouille", date: "June 29, 2007", description: "A talented rat dreams of becoming a chef and secretly helps a young kitchen worker succeed.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/RatatouillePoster.jpg", imgAlt: "Ratatouille movie poster", ages: "6+", genre: "Animation/Comedy", stars: "★★★★★"
      },
      {
        title: "Inside Out", date: "June 19, 2015", description: "The emotions inside a young girl's mind struggle to guide her through a major life change.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Inside_Out_(2015_film)_poster.jpg", imgAlt: "Inside Out movie poster", ages: "6+", genre: "Animation/Comedy", stars: "★★★★★"
      },
      {
        title: "Coco", date: "November 22, 2017", description: "An aspiring musician enters the Land of the Dead and uncovers his family's hidden history.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Coco_(2017_film)_poster.jpg", imgAlt: "Coco movie poster", ages: "6+", genre: "Animation/Fantasy", stars: "★★★★★"
      },
      {
        title: "The Incredibles", date: "November 5, 2004", description: "A family of superheroes is forced back into action to stop a dangerous new threat.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/The_Incredibles.jpg", imgAlt: "The Incredibles movie poster", ages: "6+", genre: "Animation/Action", stars: "★★★★★"
      },
      {
        title: "Monsters, Inc.", date: "November 2, 2001", description: "Two monsters discover that a little human child is not dangerous and work to return her home.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Monsters,_Inc._poster.jpg", imgAlt: "Monsters Inc. movie poster", ages: "6+", genre: "Animation/Comedy", stars: "★★★★★"
      },
      {
        title: "The Lion King", date: "June 24, 1994", description: "A young lion prince must reclaim his kingdom after his uncle betrays and exiles him.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/The_Lion_King_poster.jpg", imgAlt: "The Lion King movie poster", ages: "6+", genre: "Animation/Drama", stars: "★★★★★"
      },
      {
        title: "Frozen", date: "November 27, 2013", description: "A fearless princess teams up with an ice harvester to find her sister and end an eternal winter.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Frozen_(2013_film)_poster.jpg", imgAlt: "Frozen movie poster", ages: "6+", genre: "Animation/Musical", stars: "★★★★"
      },
      {
        title: "Moana", date: "November 23, 2016", description: "A determined teenager sails across the ocean to restore the heart of a goddess and save her island.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Moana_(2016_film)_poster.jpg", imgAlt: "Moana movie poster", ages: "6+", genre: "Animation/Adventure", stars: "★★★★★"
      },
      {
        title: "Zootopia", date: "March 4, 2016", description: "A determined rabbit police officer teams up with a clever fox to solve a mysterious case.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Zootopia.jpg", imgAlt: "Zootopia movie poster", ages: "6+", genre: "Animation/Mystery", stars: "★★★★"
      },
      {
        title: "How to Train Your Dragon", date: "March 26, 2010", description: "A Viking teenager befriends an injured dragon and changes the way his village sees their enemies.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/How_to_Train_Your_Dragon_poster.jpg", imgAlt: "How to Train Your Dragon movie poster", ages: "6+", genre: "Animation/Adventure", stars: "★★★★★"
      },
      {
        title: "Kung Fu Panda", date: "June 6, 2008", description: "A clumsy panda discovers that he may be the legendary warrior needed to save his valley.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Kung_Fu_Panda_poster.jpg", imgAlt: "Kung Fu Panda movie poster", ages: "6+", genre: "Animation/Action", stars: "★★★★"
      },
      {
        title: "The Little Mermaid", date: "November 17, 1989", description: "A mermaid princess makes a dangerous deal to experience life on land and pursue true love.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/The_Little_Mermaid_(1989_film)_poster.jpg", imgAlt: "The Little Mermaid movie poster", ages: "6+", genre: "Animation/Musical", stars: "★★★★"
      },
      {
        title: "Beauty and the Beast", date: "November 22, 1991", description: "A kind young woman finds love and compassion in an enchanted prince trapped in a beast's form.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Beauty_and_the_Beast_(1991_film)_poster.jpg", imgAlt: "Beauty and the Beast movie poster", ages: "6+", genre: "Animation/Fantasy", stars: "★★★★★"
      },
      {
        title: "Aladdin", date: "November 25, 1992", description: "A streetwise young man uses a magical lamp to win the heart of a princess and defeat a power-hungry vizier.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Aladdin_(1992_Disney_film)_poster.jpg", imgAlt: "Aladdin movie poster", ages: "6+", genre: "Animation/Musical", stars: "★★★★"
      },
      {
        title: "Rocky", date: "November 21, 1976", description: "A small-time boxer receives a once-in-a-lifetime chance to fight the heavyweight champion.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Rocky_poster.jpg", imgAlt: "Rocky movie poster", ages: "13+", genre: "Drama/Sports", stars: "★★★★"
      },
      {
        title: "Top Gun: Maverick", date: "May 27, 2022", description: "A legendary pilot returns to train an elite group of graduates for a dangerous mission.", imgSrc: "https://en.wikipedia.org/wiki/Special:FilePath/Top_Gun_Maverick_Poster.jpg", imgAlt: "Top Gun Maverick movie poster", ages: "13+", genre: "Action/Drama", stars: "★★★★★"
      },
    ];

    const removedMovieTitles = [
      "The Shawshank Redemption",
      "The Godfather",
      "Titanic",
      "Avatar",
      "WALL-E",
      "The Incredibles",
      "Monsters, Inc.",
      "Moana",
      "How to Train Your Dragon",
      "Kung Fu Panda",
      "The Little Mermaid",
    ];

    removedMovieTitles.forEach(title => {
      const index = movies.findIndex(movie => movie.title === title);
      if (index !== -1) movies.splice(index, 1);
    });


    movies.forEach(movie => {

        // Code for going through each movie and creating content for that movie
    
    });

let dynamicHTML = ``

let movieList = document.querySelector("#movie-list")

movies.forEach(item => {
    dynamicHTML += `
    <article class="movie">
      <h2>${item.title}</h2>
      <img src="${item.imgSrc}" alt="${item.imgAlt}">
      <p><strong>Release Date:</strong>${item.date}</p>
      <p><strong>Recommended Age:</strong>${item.ages}</p>
      <p><strong>Genre:</strong> ${item.genre}</p>
      <p><strong>Rating:</strong> <span>${item.stars}</span></p>
      <p id='desc'>${item.description}</p>
    </article>`
})
movieList.innerHTML += dynamicHTML
