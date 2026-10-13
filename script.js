const searchform = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
 
const inputBox = document.querySelector('.inputBox');



// Function to fetch movie details using OMDB API 
const getMovieInfo = async (movie) => {
    const myApikey = Rajputakshita21 (use your own api key);
    const url  = `http://www.omdbapi.com/?apikey=${myApikey}&t=${movie}`;

    const response = await fetch(url); 
    const data = await response.json();

    console.log(data); 

    showMovieData(data); 

}

// Function to show movie data on screen
const showMovieData = (data) => {
    movieContainer.innerHTML = ""; 
     movieContainer.classList.add("api-loaded");


    // Use Destructuring assignment to extract properties from data object
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;

    const movieElement = document.createElement('div'); 
       movieElement.classList.add('movie-info'); 
    movieElement.innerHTML = `<h2>${Title}</h2>
                              <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`; 



   const movieGenreElement = document.createElement('div'); 
   movieGenreElement.classList.add('movie-genre'); 

   Genre.split(",").forEach(Element => {
    const p = document.createElement('p'); 
    p.innerText = Element; 
    movieGenreElement.appendChild(p); 
   }); 
                        

   movieElement.appendChild(movieGenreElement); 


   movieElement.innerHTML += `<p><strong>Released Date: </strong>${Released}</p>
                             <p><strong>Duration: </strong>${Runtime}</p>
                             <p><strong>Cast: </strong>${Actors}</p>
                             <p><strong>Plot: </strong>${Plot}</p>`; 


// Creating a movie Poster 

const moviePosterElement = document.createElement('div'); 
moviePosterElement.classList.add('movie-poster'); 
moviePosterElement.innerHTML = `<img src="${Poster}"/>`;

    movieContainer.appendChild(moviePosterElement); 
    movieContainer.appendChild(movieElement); 


}




// Adding event listener to search form 
searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if(movieName !== ''){
        getMovieInfo(movieName); 
    }
    // else{
    //     movieContainer.innerHTML = `<h2>Enter movie name to get information</h2>`;
    // }
}); 

