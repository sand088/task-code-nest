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
})