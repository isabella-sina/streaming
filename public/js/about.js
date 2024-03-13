let movie_id = location.pathname;
console.log("movie_id");
console.log(movie_id);

//fetching movie details
fetch (`${movie_details_url}${movie_id}?` + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    showMovieInfo(data);
})



const showMovieInfo = (data) => {
    
    const movieTitle = document.querySelector('.movie-title');
    const movieGenres = document.querySelector('.movie-date-genres');
    const movieDescription = document.querySelector('.movie-description');
    const movieStarring = document.querySelector('.movie-starring');
    const movieBackdrop = document.querySelector('.movie-info');

    movieTitle.innerHTML = data.title;
    //release year + genres
    movieGenres.innerHTML = ( data.release_date.split('-')[0] + " |" );
    for(let i = 0; i < data.genres.length; i++){
        if (i == data.genres.length-1){
            movieGenres.innerHTML += (" " + data.genres[i].name );
        }else{
            movieGenres.innerHTML += (" " + data.genres[i].name +" -" );
        }
        
    }

    //backdrop images
    if(data.backdrop_path == null){
        data.backdrop_path == data.poster_path;
    }

    movieBackdrop.style.backgroundImage = `url(${original_img_url}${data.backdrop_path})`;
    

    movieDescription.innerHTML = data.overview.substring(0,200) + '...';
   
    //fetching cast info
    fetch (`${movie_details_url}${movie_id}/credits?` + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
       
       const cast = document.querySelector('.movie-starring');
       for(let i=0; i < 5; i++){
            
            if (i == 4){
                cast.innerHTML += (" " + data.cast[i].name );
            }else{
                cast.innerHTML += (" " + data.cast[i].name +", " );
            }
       }
    })

    //fetching video trailers
    fetch (`${movie_details_url}${movie_id}/videos?` + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
       
       let trailerContainer = document.querySelector('.trailer-container');
       let maxClips = (data.results.length > 3) ? 3 : data.results.length;

       for(let i = 0; i < maxClips; i++){
            trailerContainer.innerHTML += `
            <iframe  class="trailer" src="https://youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen; web-share" allowfullscreen></iframe>
            `;
       }
       
    })

    //fetching recommendation
    fetch (`${movie_details_url}${movie_id}/recommendations?` + new URLSearchParams({
        api_key: api_key
    }))
    .then(res => res.json())
    .then(data => {
       console.log(data);
       let rec_container = document.querySelector('.recommendations-container');
       for(let i = 0; i < 3; i++){
        console.log(data.results[i]);
            if(data.results[i].backdrop_path != null){
                console.log(i);

                var title = data.results[i].title;

                if(title.length > 30){
                    title = title.substring(0,28) + '...';
                }

                rec_container.innerHTML += `
                <div class="movie-recommendation" onclick="location.href = '/${data.results[i].id}'">
                    <img src="${img_url}${data.results[i].backdrop_path}" alt="">
                    <p class="heading-card" >${title}</p>
                </div>
                `;

            }
          
       }
       
    })
}

