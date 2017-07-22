$(document).ready(function(){

  $('.nav-burger').click(function(){
    $(this).toggleClass('nav-burger--hamburger nav-burger--close');
    $('.main-nav').toggleClass('main-nav--open');
  })

  function anchorScroll(boxAnchorLink){
    $(boxAnchorLink + ' a').on('click', function(e){
        e.preventDefault();
        var attr = $(this).attr('href').substring(1);
        var currentPosition = $(document).scrollTop();
        var idPosition = $('#'+attr).offset().top;
        var scrollTime = Math.abs(currentPosition - idPosition) / 4; // Math.abs - модуль числа.
        $('body,html').animate({'scrollTop':idPosition},scrollTime);
    });
  };

  anchorScroll('.main-nav');


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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

if ($(window).width() < 767){
  $('.contacts-place__location').on('click', function(event){
    event.preventDefault();
    console.log('click');
    $('contacts').addClass('contacts-place__info');
    $('.contacts-place__info').slideDown(400);
  });
 }

if ($(window).width() < 767){
  $('.contacts-place__close').on('click', function(event){
    $('contacts').removeClass('contacts-place__info');
    $('.contacts-place__info').slideUp(400);
  });
}

// if ($(window).width() < 767){
//   $('.price__country').click(function(event){
//     event.preventDefault();
//     // $('.price__table').hide();
//     $(this).toggleClass('price__country--active'); 
//   });
// };



$(document).ready(function(){
 
    var tabContainers = $('.price__content > div');
    tabContainers.hide().filter(':first').show();
 
    $('ul.price__list li a').click(function(){
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('ul.price__list a').parent('li').removeClass('price__country--active');
        $(this).parent('li').addClass('price__country--active');
        return false;
        }).filter(':first').click();
     
    });

  })
