
//trending now
fetch(trending_url + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    //per ogni oggetto elemento di 'genres' prendiamo name e id
   makeCategoryElement("Trending", data.results, "main-pop");
   
});
//posso mettere un trattino che poi sostituisco con uno spazio


//genre/movie/list -> ottengo tutte e 19 le categorie con i rispettivi id
fetch(genre_url + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    //per ogni oggetto elemento di 'genres' prendiamo name e id
    console.log("cat fetch");
    data.genres.forEach(genre =>{
        
        fetchMoviesListByGenresPopular(genre.id, genre.name);
            
    })
});

const fetchMoviesListByGenresPopular = (genre_id, genre_name) => {
    
    //discover/movie restituisce una lista di film
    //noi vogliamo una lista di film di un genre specifico
    fetch(discovery_popular_url + new URLSearchParams({
        api_key: api_key,
        with_genres: genre_id,
        page: Math.floor((Math.random() * 3) + 1)
    }))
    .then(res => res.json())
    .then(data => {
        console.log(genre_name);
        categoryTitle= genre_name.split(' ')[0];
         //background image
        if(`${genre_name}`== "Animation"){
            const mainPop = document.querySelector(".main-pop");
            mainPop.style.backgroundImage = `linear-gradient(to bottom, transparent, #181818), url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`;
                        
        }
        makeCategoryElement(`${categoryTitle}-pop`, data.results, "main-pop");
        initializePopSwiper();
    })
    .catch(err => console.log(err));
}

function initializePopSwiper() {
    const swiperTrendingNow = initializeSwiper("Trending");
    const swiperActionPop = initializeSwiper("Action-pop");
    const swiperAdventurePop = initializeSwiper("Adventure-pop"); 
    const swiperAnimationPop = initializeSwiper("Animation-pop");
    const swiperComedyPop = initializeSwiper("Comedy-pop");
    const swiperCrimePop = initializeSwiper("Crime-pop");
    const swiperDocumentaryPop = initializeSwiper("Documentary-pop");
    const swiperDramaPop = initializeSwiper("Drama-pop");
    const swiperFamilyPop = initializeSwiper("Family-pop");
    const swiperFantasyPop = initializeSwiper("Fantasy-pop");  
    const swiperHistoryPop = initializeSwiper("History-pop");
    const swiperHorrorPop = initializeSwiper("Horror-pop");
    const swiperMusicPop = initializeSwiper("Music-pop");
    const swiperMysteryPop = initializeSwiper("Mystery-pop");
    const swiperRomancePop = initializeSwiper("Romance-pop");  
    const swiperSciencePop = initializeSwiper("Science-pop");
    const swiperThrillerPop = initializeSwiper("Thriller-pop");
    const swiperTVPop = initializeSwiper("TV-pop");
    const swiperWarPop = initializeSwiper("War-pop");
    const swiperWesternPop = initializeSwiper("Western-pop");      
  
  };   
         