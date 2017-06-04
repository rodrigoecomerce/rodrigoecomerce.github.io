(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
  
  function showHome(){
      $('.contato').addClass( "hide" )
    $('#linkContato').removeClass( "active" )
    $('.page-body').removeClass( "hide" )
        $('#linkHome').addClass( "active" )
  }
  function cleanForm(){
    $('#name').val('');
    $('#phone').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#body').val('');
  }
    function hideHome(){
    $('.page-body').addClass( "hide" )
          $('#linkHome').removeClass( "active" )
        $('.contato').removeClass( "hide" )
          $('#linkContato').addClass( "active" )
  }
  
$('.slider').slider();
  $('.contact').click(function(){hideHome()});
  
  $('#logo-container').click(function(){showHome();
                                       cleanForm();});
  
 // $('#submit').click(function(){
//  $('.contato').addClass( "hide" )
 //   $('.page-body').removeClass( "hide" )
 // });
  
  $("#form").submit(function(event) {
   event.preventDefault();
   cleanForm();
    showHome();
    
 this.submit();
  });
  
    $('#cancel').click(function(){showHome();
                                 cleanForm();});
  
})(jQuery); // end of jQuery name space
