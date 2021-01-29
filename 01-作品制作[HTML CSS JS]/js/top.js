 $(".norenn").css('top',$(window).height()/3.8);
 $(".norenn").css('right',$(window).height()/4);
 $(".norenn").css('left',$(window).height()/10);
 $(".right_door").css('left',$(window).height()/3.5);
 $(".aaaa").css('left',$(window).height()/25);
 $(".right_door").css('top',$(window).height()/2.7);
 $(".aaaa").css('top',$(window).height()/3.2); 
 let num = 0;
//$(".right_door").css('top',$(window).height()/5);
var windowWidth = $(window).width();
$(".bt").on('click', function(){
  num = 1;
  if(num === 1){
    $(".right_door").addClass("box");
    setTimeout(function(){
        num = 0; 
        window.location.href = "select.html";    
      }, 2000);
 }
});
