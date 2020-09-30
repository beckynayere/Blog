$(document).ready(function(){
    $("#profbutton").click(function(){
      $("#profbutton").slideDown('1500').hide('1000');
      $("#form").show('1500');
    });
    $("#submit").click(function(){
      $("#profbutto").slideUp('1500');
      $("#form").slideDown('1500');
    });



    $("#showform").click(function(){
        $("#profileupdate").slideDown('2500');
      });
      $("#submit").click(function(){
        $("#profileupdate").slideUp('1500');
  
      });
    
  });
 