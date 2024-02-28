function initializeSwiper(category){

    new Swiper(`.swiper${category}`, {
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup:1,

      breakpoints: {
       
        
        480: {
         slidesPerView: 2,
         spaceBetween: 10
        },
        
        640: {
         slidesPerView: 3,
         spaceBetween: 10
        },
       
        900: {
            slidesPerView: 4,
            spaceBetween: 10
           },
       
        1200: {
        slidesPerView: 5,
        spaceBetween: 10
        },

        1600: {
            slidesPerView: 6,
            spaceBetween: 10
            }
        
       },

      navigation: {
          nextEl: `.swiper${category}-button-next`,
          prevEl: `.swiper${category}-button-prev`,
        },
  });

}

//vogliamo mostrare la lista di film di un dato genre
//creiamo un container con id il nome della categoria

const main = document.querySelector('.main');

const makeCategoryElement = (category, data_category_sorted, container) => {
    var categorySwiper = "swiper"+(category.split(' ')[0]);
    var categorySwiperNext = "swiper"+(category.split(' ')[0])+"-button-next";
    var categorySwiperPrev = "swiper"+(category.split(' ')[0])+"-button-prev";
    var container = document.querySelector(`.${container}`);

     
    container.innerHTML += `    
    <div class="movie-list"> 
    <h2>${category}</h2>
        <div class="swiper-container">            
            <div class="swiper ${categorySwiper}">
                <div class="swiper-wrapper" id="${category}">
                </div>
            </div>
            <!-- arrows -->
            <div class="swiper-button-next ${categorySwiperNext}"></div>
            <div class="swiper-button-prev ${categorySwiperPrev}"></div>
        </div>
    </div> 
    `;

     makeCards(category, data_category_sorted);
}


const makeCards = (id, data_movie_list) => {
    const movieContainer = document.getElementById(id);

    data_movie_list.forEach( (item) =>{
        //alcuni film contengono l'img in backdrop_path 
        //altri in poster_path, altri ancora nulla
       
        if(item.backdrop_path != null){
            //pass movie id through url
            let title =item.title;
         

            if(item.title.length > 30){
                title = item.title.substring(0,28) + '...';
            }
           

            movieContainer.innerHTML +=  `
            <div class="swiper-slide">
                <div class="movie-cards" onclick="location.href = '/${item.id}'">
                    <img src="${img_url}${item.backdrop_path}" alt="">
                    <p class="heading-card">${title}</p>
                </div>                   
            </div>        
                  
            `;
            
            
        }
       
    }) 
}