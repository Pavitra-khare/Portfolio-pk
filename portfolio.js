$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $(".navbar .logo-write a").css("color", "black");
          $(".navbar .logo-write a span").css("color", "black");
          $(".navbar .menu li a").css("color", "black");
          $(".menu-btn").css("color", "black");
          $(".navbar").addClass("sticky");
          $(".navbar .max-width .logo .logo-img img").attr("src","images/black-logo.png");


        }
        else{
            $(".navbar").removeClass("sticky");
            $(".navbar .logo-write a").css("color", "#FEE715FF");
          $(".navbar .logo-write a span").css("color", "#FEE715FF");
          $(".navbar .menu li a").css("color", "white");
          $(".menu-btn").css("color", "white");
          $(".navbar .max-width .logo .logo-img img").attr("src","images/yellow-logo.png");
        }
    });

    function animateValue(id, start, end, duration) {
      if (start === end) return;
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current + "%";
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }


    // responsive nav-bar
    $(".menu-btn").click(function(e){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
        e.preventDefault();
        $("*").css("overflow","hidden");
    })

    $(".menu-btn").click(function(e){
      
      e.preventDefault();
      $("*").css("overflow","auto");
  })



  // $(".card1").hover(function(){
    
  // })
  $(".card1").mouseenter(function(){
    $(".card1").css("background","#888888");
    $(".card1 .box-text").css("color","black");
    $(".html").css("background","chartreuse");
    $(".card1 .level").css("background","Black");
    // document.getElementsByClassName("card1").style.background ="#fee715ff";
    $(".html").css("width","95%");
    $("#percent1").css("display","flex");
    animateValue("percent1",0,95,50);
   
    
  })
  $(".card1").mouseleave(function(){
    $(".html").css("width","0");
    $("#percent1").css("display","none");
    $(".card1").css("background","#444444");
    $(".card1 .box-text").css("color","white");
    $(".html").css("background","chartreuse");
    $(".card1 .level").css("background","black");
  })

  $(".card2").mouseenter(function(){
    $(".card2").css("background","#888888");
    $(".card2 .box-text").css("color","black");
    $(".css").css("background","chartreuse");
    $(".card2 .level").css("background","black");
    $(".css").css("width","90%");
    $("#percent2").css("display","flex");
    animateValue("percent2",0,90,50);
  })
  $(".card2").mouseleave(function(){
    $(".css").css("width","0");
    $("#percent2").css("display","none");
    $(".card2").css("background","#444444");
    $(".card2 .box-text").css("color","white");
    $(".css").css("background","chartreuse");
    $(".card2 .level").css("background","black");
    
  })

  $(".card3").mouseenter(function(){
    $(".card3").css("background","#888888");
    $(".card3 .box-text").css("color","black");
    $(".bootstrap").css("background","chartreuse");
    $(".card3 .level").css("background","black");
    $(".bootstrap").css("width","80%");
    $("#percent3").css("display","flex");
    animateValue("percent3",0,80,50);
  })
  $(".card3").mouseleave(function(){
    
    $(".bootstrap").css("width","0");
    $("#percent3").css("display","none");
    $(".card3").css("background","#444444");
    $(".card3 .box-text").css("color","white");
    $(".bootstrap").css("background","chartreuse");
    $(".card3 .level").css("background","black");
  })

  $(".card4").mouseenter(function(){
    $(".card4").css("background","#888888");
    $(".card4 .box-text").css("color","black");
    $(".js").css("background","chartreuse");
    $(".card4 .level").css("background","black");
    $(".js").css("width","85%");
    $("#percent4").css("display","flex");
    animateValue("percent4",0,85,50);
  })
  $(".card4").mouseleave(function(){
    $(".js").css("width","0");
    $("#percent4").css("display","none");
    $(".card4").css("background","#444444");
    $(".card4 .box-text").css("color","white");
    $(".js").css("background","chartreuse");
    $(".card4 .level").css("background","black");
  })

  $(".card5").mouseenter(function(){
    $(".card5").css("background","#888888");
    $(".card5 .box-text").css("color","black");
    $(".jquery").css("background","chartreuse");
    $(".card5 .level").css("background","black");
    $(".jquery").css("width","80%");
    $("#percent5").css("display","flex");
    
    animateValue("percent5",0,80,50);
  })
  $(".card5").mouseleave(function(){
    $(".card5").css("background","#444444");
    $(".card5 .box-text").css("color","white");
    $(".jquery").css("background","chartreuse");
    $(".card5 .level").css("background","black");
    $(".jquery").css("width","0");
    $("#percent5").css("display","none");
  })

  $(".card6").mouseenter(function(){
    $(".card6").css("background","#888888");
    $(".card6 .box-text").css("color","black");
    $(".node").css("background","chartreuse");
    $(".card6 .level").css("background","black");
    $(".node").css("width","70%");
    $("#percent6").css("display","flex");
    animateValue("percent6",0,90,50);
  })
  $(".card6").mouseleave(function(){
    $(".card6").css("background","#444444");
    $(".card6 .box-text").css("color","white");
    $(".node").css("background","chartreuse");
    $(".card6 .level").css("background","black");
    $(".node").css("width","0");
    $("#percent6").css("display","none");
  })



});