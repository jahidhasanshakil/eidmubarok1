$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //  infinite: true,
    arrows:false,
    dots: true,
    fade: true,
    autoplay:true,
    // autoplaySpeed: 10,
    // speed:2000,
    // cssEase: "linear"
   
});




$('.box_slider ').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    
    nextArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    prevArrow: '<i class="fa-solid fa-angle-right next"></i>',
    
   
});
$('.slider ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
    nextArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    prevArrow: '<i class="fa-solid fa-angle-right next"></i>',
    
   
});


new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


