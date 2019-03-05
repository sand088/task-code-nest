$(document).ready(function(){

    // nav bar
   
    var $mainNav = $('.mainNav');
    var isMenuVisible = false;
    $('#burgerMenu').click(function () {
      if(isMenuVisible){
        $mainNav.hide(300);
        isMenuVisible = false;
      } else {
        $mainNav.show(300);
        isMenuVisible = true;
      }
    });

    // slider

    // $('.carousel').carousel({
    //   interval: 2000
    // })

    $('.slickSlider').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.btnPrev'),
      nextArrow: $('.btnNext'),
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
})