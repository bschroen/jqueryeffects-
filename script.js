
$(document).ready(function(){
    "use strict";

    $("#confetti").click(function() {
        $(this).fadeIn();
    });

   $('#confetti').fadeIn(500).delay(500).fadeOut(1500).delay(2000).fadeIn(1500);
    
   $("#balloons").click(function(){
        $(this).animate({
           top:'-=1060px',
        }, 5000);
    });

   $('#happybday').click(function(){
    $(this).css({
        "-webkit-transform": "rotate(340deg)",
        "-moz-transform": "rotate(340deg)",
        "transform": "rotate(340deg)" /* For modern browsers(CSS3)  */
    });

   $("#moreballoons").click(function(){
        $(this).animate({
           left:'-=250px',
           top: '-=250px',
        }, 3000);
    });

   $("#cupcakes").click(function(){
        $(this).animate({
           width: "200%",
           height: "200%",
           opacity: '0'}, 5000);
    });
   
    });


});


