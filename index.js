
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
      $(".beautywise-navbar").addClass("fixed-top");
     
    }
     else {
      $(".beautywise-navbar").removeClass("fixed-top");
      
    }

  });

 


  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".beautywise-navbar").css("background" , "#fff");
      }
  
      else{
        $(".beautywise-navbar").css("background" , "#000");  	
      }
    })
  });
