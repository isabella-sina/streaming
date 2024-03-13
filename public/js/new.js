
//now playing
fetch(now_playing_url + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    //per ogni oggetto elemento di 'genres' prendiamo name e id
   makeCategoryElement("NowPlaying", data.results, "main-new");
});



//genre/movie/list -> ottengo tutte e 19 le categorie con i rispettivi id
fetch(genre_url + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    //per ogni oggetto elemento di 'genres' prendiamo name e id
    console.log("cat fetch");
    data.genres.forEach(genre =>{
        
        fetchMoviesListByGenresNew(genre.id, genre.name);
            
    })
});



const fetchMoviesListByGenresNew = (genre_id, genre_name) => {
    
    //discover/movie restituisce una lista di film
    //noi vogliamo una lista di film di un genre specifico
    fetch(new_discovery_url + new URLSearchParams({
        api_key: api_key,
        with_genres: genre_id,
        page: Math.floor((Math.random() * 3) + 1)
    }))
    .then(res => res.json())
    .then(data => {
        console.log(genre_name);
        var categoryTitle = genre_name.split(' ')[0];
        //background image
        if(`${genre_name}`== "Animation"){
            const mainNew = document.querySelector(".main-new");
            mainNew.style.backgroundImage = `linear-gradient(to bottom, transparent, #181818), url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;
                        
        }
        makeCategoryElement(`${categoryTitle}-new`, data.results, "main-new");
        initializeNewSwiper();
    })
    .catch(err => console.log(err));
}

function initializeNewSwiper() {
    const swiperNowPlaying = initializeSwiper("NowPlaying");
    const swiperActionNew = initializeSwiper("Action-new");
    const swiperAdventureNew = initializeSwiper("Adventure-new"); 
    const swiperAnimationNew = initializeSwiper("Animation-new");
    const swiperComedyNew = initializeSwiper("Comedy-new");
    const swiperCrimeNew = initializeSwiper("Crime-new");
    const swiperDocumentaryNew = initializeSwiper("Documentary-new");
    const swiperDramaNew = initializeSwiper("Drama-new");
    const swiperFamilyNew = initializeSwiper("Family-new");
    const swiperFantasyNew = initializeSwiper("Fantasy-new");  
    const swiperHistoryNew = initializeSwiper("History-new");
    const swiperHorrorNew = initializeSwiper("Horror-new");
    const swiperMusicNew = initializeSwiper("Music-new");
    const swiperMysteryNew = initializeSwiper("Mystery-new");
    const swiperRomanceNew = initializeSwiper("Romance-new");  
    const swiperScienceNew = initializeSwiper("Science-new");
    const swiperThrillerNew = initializeSwiper("Thriller-new");
    const swiperTVNew = initializeSwiper("TV-new");
    const swiperWarNew = initializeSwiper("War-new");
    const swiperWesternNew = initializeSwiper("Western-new");      
  
  };   
         
  