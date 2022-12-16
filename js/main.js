window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),  {
        slidestoShow: 3;
        slidesToScroll: 3;
        draggable: true;
        dots: '.dots',
        
    });
});

//new Glide('.images', {}).mount();
