$(document).ready(function(){
  $('.nav-burger').click(function(){
    $(this).toggleClass('nav-burger--hamburger nav-burger--close');
    $('.main-nav').toggleClass('main-nav--open');
  })
});



  $('.team__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.team').find('.team__manager').show();
      $(this).hide();
  });