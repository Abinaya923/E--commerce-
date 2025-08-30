const API_KEY = "YOUR_API_KEY"; // put your TMDB key here
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const searchInput = document.getElementById("search");
const moviesContainer = document.getElementById("movies");

searchInput.addEventListener("keyup", async (e) => {
  if (e.target.value && e.key === "Enter") {
    const query = e.target.value.trim();
    const res = await fetch(SEARCH_API + query);
    const data = await res.json();
    displayMovies(data.results);
  }
});

function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
      <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : "https://via.placeholder.com/500x750"}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    `;
    moviesContainer.appendChild(div);
  });
}
