$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".navbar").css("background" , "#000000");
    }
    else{
      $(".navbar").css("background" , "#ffffff00");   
    }
  })
})

