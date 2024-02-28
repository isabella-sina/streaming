
const searchInput = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-container");
const s = document.querySelector(".searchbar");
const iconX = document.querySelector(".fa-times");
const iconSearch = document.querySelector(".fa-search");

s.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    iconX.classList.toggle("active");
    iconSearch.classList.toggle("active");
    
})

searchInput.addEventListener("input", (e) =>{
    console.log(e.target.value);

    fetch(search_url + new URLSearchParams({
        query: e.target.value,
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
        //per ogni oggetto elemento di 'genres' prendiamo name e id
        console.log(data);
        searchContainer.innerHTML =  " ";
        data.results.forEach((movie) => {

            console.log(movie.title)
            makeSearchCard(movie);
        });
            
    } )

})

const makeSearchCard = (movie) => {
    

    if(movie.backdrop_path != null || movie.poster_path != null){


        let title =movie.title;
        if(movie.title.length > 30){
            title = movie.title.substring(0,28) + '...';
        }

        let img_path = "";

        if(movie.backdrop_path == null){
            img_path = img_url + movie.poster_path;
        }else{
            img_path = img_url + movie.backdrop_path;
        }


        searchContainer.innerHTML +=  `
        <div class="movie-cards search-result">
            <img src="${img_path}" alt="">
            <p class="heading-card">${title}</p>
        </div>         
            
        `;
    }


       
    
}


