$(document).ready(function(){
  $('.nav-burger').click(function(){
    $(this).toggleClass('nav-burger--hamburger nav-burger--close');
    $('.main-nav').toggleClass('main-nav--open');
  })
});



var slideWidth=300;
var sliderTimer;
$(function(){
$('.slider').width($('.slider').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,4000);
    $('.slide-section__info').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,4000);
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slider').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slider').children().size())
    {
        currentSlide=0;   
    }
    $('.slider').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}







  $('.team__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.team').find('.team__manager').show();
      $(this).hide();
  });