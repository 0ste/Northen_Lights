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

});


