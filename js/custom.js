$(function(){


  
  $(window).on('scroll', function(){

    var scrolling = $(this).scrollTop();      
    if(scrolling > 500){
      $('.uppish').fadeIn(500)
    }
    else{
        $('.uppish').fadeOut(500)
    }
    });

    $('.uppish').click(function(){
      $('html,body').animate({scrollTop:0},600)
    });





    $('.main-counter').counterUp({
        delay: 50,
        time: 5000
    });
    
    $('.course-main').slick({  
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    speed:2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        vertical:true,
        autoplaySpeed: 2000,
        speed:1500
      }
    },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            vertical:true
          }
        }
      ]

    });



    $('.testimonial-slider').slick({  
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    vertical:true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical:true,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical:true,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
    ]
    });


    $('.teachers-main').slick({  
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    speed:1500,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2000,
          speed:1500
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical:true,
        }
      }
    ]
    });


    $('.gallery-main').slick({  
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    speed:1500
    });
    

    
      
  
})