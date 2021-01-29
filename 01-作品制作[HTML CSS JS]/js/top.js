 $(".norenn").css('top',$(window).height()/3.8);
 $(".norenn").css('right',$(window).height()/4);
 $(".norenn").css('left',$(window).height()/10);
 $(".right_door").css('left',$(window).height()/3.5);
 $(".aaaa").css('left',$(window).height()/25);
 $(".right_door").css('top',$(window).height()/2.7);
 $(".aaaa").css('top',$(window).height()/3.2);  
 
 var windowWidth = $(window).width();

$(".bt").on('click', function(){
    $(".right_door").addClass("box");
    setTimeout(function(){ 
        window.location.href = "select.html";    
      }, 2000);
});

$(".right_door").removeClass("box");
