var windowWidth = $(window).width();
$(".bt").on('click', function(){
    $(".right_door").addClass("box");
    setTimeout(function()  {
        window.location.href = "select.html";    
    }, 2000);
        
});
