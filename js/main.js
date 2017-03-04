$(function(){
     $('.carousel').carousel({		//Carousel initalization
      interval: 4000
    });
});

function fadeFunction() {
    $(".content").fadeIn(700);
}


$(document).ready(function(){
	$('li a').click(function(e){
		e.preventDefault();
		$("#main").load($(this).attr('href'), {}, fadeFunction);
	});
});




// function iAmACallbackFunction() {
// $("#contents").fadeIn(700);
// }

// $('#studies').load("external.html", {}, iAmACallbackFunction);