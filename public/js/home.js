

//https://api.themoviedb.org/3/genre/movie/list?


//genre/movie/list -> ottengo tutte e 19 le categorie con i rispettivi id
fetch(genre_url + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    //per ogni oggetto elemento di 'genres' prendiamo name e id
    data.genres.forEach(genre =>{
      
        fetchMoviesListByGenres(genre.id, genre.name);
          
    })
});

const mainHome = document.querySelector(".main-home");

const fetchMoviesListByGenres = (genre_id, genre_name) => {
    
    //film ordinati per votazione
    //noi vogliamo una lista di film di un genre specifico
    fetch(discovery_url + new URLSearchParams({
        api_key: api_key,
        with_genres: genre_id,
        //page: 1,2 o 3
        page: Math.floor((Math.random() * 3) + 1)
    }))
    .then(res => res.json())
    .then(data => {
        console.log(genre_name);
        var categroyTitle = genre_name.split(' ')[0];
        makeCategoryElement(`${categroyTitle}`, data.results, "main-home", "home");

        //background image, in futuro: seleziona il primo film in classifica del genere preferito dall'utente
        if(`${genre_name}`== "Animation"){

            mainHome.style.backgroundImage = `linear-gradient(to bottom, transparent, #181818), url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;
                       
        } 
        initializeHomepageSwiper();
    })
    .catch(err => console.log(err));
}



        
   
function initializeHomepageSwiper() {

  const swiperAction = initializeSwiper("Action");
  const swiperAdventure = initializeSwiper("Adventure"); 
  const swiperAnimation = initializeSwiper("Animation");
  const swiperComedy = initializeSwiper("Comedy");
  const swiperCrime = initializeSwiper("Crime");
  const swiperDocumentary = initializeSwiper("Documentary");
  const swiperDrama = initializeSwiper("Drama");
  const swiperFamily = initializeSwiper("Family");
  const swiperFantasy = initializeSwiper("Fantasy");  
  const swiperHistory = initializeSwiper("History");
  const swiperHorror = initializeSwiper("Horror");
  const swiperMusic = initializeSwiper("Music");
  const swiperMystery = initializeSwiper("Mystery");
  const swiperRomance = initializeSwiper("Romance");  
  const swiperScience = initializeSwiper("Science");
  const swiperThriller = initializeSwiper("Thriller");
  const swiperTV = initializeSwiper("TV");
  const swiperWar = initializeSwiper("War");
  const swiperWestern = initializeSwiper("Western");      

};   
       




