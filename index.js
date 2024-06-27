$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
      $(".beautywise-navbar").addClass("fixed-top");
      $(".beautywise-navbar").css("background" , "black");
    }
     else {
      $(".beautywise-navbar").removeClass("fixed-top");
    }
  });



  