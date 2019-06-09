$(document).ready(function(){
  "use strict";
  
  //------- Initialising Slick Slider
  $('.item-slider').slick({
    arrows: false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  //------- Custom Arrows click functionality
  $(document).on('click', '.prevSlide', function(){
    $('.item-slider').slick('slickPrev');
  });
  
  $(document).on('click', '.nextSlide', function(){
    $('.item-slider').slick('slickNext');
  });
  
  //------- Click to filter slides according to user's choice
  
  $(document).on('click', '.filter-option li a', function(){
      $('.filter-option li a').removeClass('active');
        $(this).addClass('active');

        var cat = $(this).attr('data-category');

        if(cat !== 'all'){
          $('.item-slider').slick('slickUnfilter');

          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });

          $('.item-slider li[data-match='+ cat +']').addClass('slide-shown');

          $('.item-slider').slick('slickFilter', '.slide-shown');
        }
    
        else{
          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.item-slider').slick('slickUnfilter');
        }
      });
  
});