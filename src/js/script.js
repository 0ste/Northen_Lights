$(document).ready(function(){

  $('.nav-burger').click(function(){
    $(this).toggleClass('nav-burger--hamburger nav-burger--close');
    $('.main-nav').toggleClass('main-nav--open');
  })



  $('#slider-id').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          nextArrow: '<span class="slider-next"></span>',
          prevArrow: '<span class="slider-prev"></span>'
        }
      }
    ]
  });


  $('#reviews-id').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 2,
        }
      }
    ]
  });




$(document).ready(function(){  
  $('.contacts-place__location').on('click', function(event){
    event.preventDefault();
    console.log('click');
    $('contacts').addClass('.contacts-place__info');
    $('.contacts-place__info').slideDown(400);
  });

  
  $('.contacts-place__close').on('click', function(){
    $('contacts').removeClass('.contacts-place__info');
    $('.contacts-place__info').slideUp(400);
  });
});


$(document).ready(function(){
  $('.price__country').click(function(event){
    event.preventDefault();
    $(this).toggleClass('price__country--active');
  });
});



