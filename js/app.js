(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
$('.slider').slider();
  $('.contact').click(function(){
  $('.contato').removeClass( "hide" )
    $('.page-body').addClass( "hide" )
  });
  
  
 // $('#submit').click(function(){
//  $('.contato').addClass( "hide" )
 //   $('.page-body').removeClass( "hide" )
 // });
  
  $("#form").submit(function(event) {
   event.preventDefault();
    $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
 this.submit();
  });
  
    $('#cancel').click(function(){
  $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
  });
  
})(jQuery); // end of jQuery name space
