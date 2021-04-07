$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $("header").css("background" , "#000000");
      }
      else{
        $("header").css("background" , "#ffffff00");   
      }
    })
  })