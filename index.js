$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
      $(".beautywise-navbar").addClass("fixed-top");
     
    }
     else {
      $(".beautywise-navbar").removeClass("fixed-top");
      
    }
  });

 



