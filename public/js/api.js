let api_key = "35c2500396e3092d2b41073a09d49691";
let img_url = "https://image.tmdb.org/t/p/w300";
let original_img_url = "https://image.tmdb.org/t/p/original";
let genre_url = "https://api.themoviedb.org/3/genre/movie/list?";
let discovery_url= "https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&";
let movie_details_url= "https://api.themoviedb.org/3/movie";
let now_playing_url= "https://api.themoviedb.org/3/movie/now_playing?";
let upcoming_url= "https://api.themoviedb.org/3/movie/upcoming?";
let year_2024_url= "https://api.themoviedb.org/3/discover/movie?year=2000&";
let latest_url= "https://api.themoviedb.org/3/movie/latest?";
let new_discovery_url="https://api.themoviedb.org/3/discover/movie?primary_release_year=2024&";
let discovery_popular_url="https://api.themoviedb.org/3/discover/movie?";
let trending_url="https://api.themoviedb.org/3/trending/movie/week?";
let search_url="https://api.themoviedb.org/3/search/movie?";

/* genre = categorie
la chiamata genre/movie/list restituisce un array con 19 oggetti: 
ogni oggetto è un genere di film identificato da un id e da un nome 
ci sono 19 categorie

*/

/* 
la chiamata discover/movie restituisce una lista di film ordinati o filtrati 
secondo vari parametri 
restituisce un array "results" dove ogni oggetto contiene alcuni dettagli di un film
*/