(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
  
  function showHome(){
      $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
  }
  
    function hideHome(){
      $('.contato').addClass( "hide" )
    $('.page-body').removeClass( "hide" )
  }
  
$('.slider').slider();
  $('.contact').click(hideHome());
  
  $('#logo-container').click(showHome());
  
 // $('#submit').click(function(){
//  $('.contato').addClass( "hide" )
 //   $('.page-body').removeClass( "hide" )
 // });
  
  $("#form").submit(function(event) {
   event.preventDefault();
   showHome();
 this.submit();
  });
  
    $('#cancel').click(showHome());
  
})(jQuery); // end of jQuery name space
