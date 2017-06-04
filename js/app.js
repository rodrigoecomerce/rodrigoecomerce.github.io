(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
$('.slider').slider();
  $('.contact').click(function(){
  $('.contato').removeClass( "hide" )
    $('.page-body').addClass( "hide" )
  });
  
  
  $('.submit').click(function(){
  $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
  });
  
    $('.cancel').click(function(){
  $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
  });
  
})(jQuery); // end of jQuery name space
