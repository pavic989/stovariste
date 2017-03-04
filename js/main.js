$(function(){
     $('.carousel').carousel({		//Carousel initalization
      interval: 4000
    });
});



$(document).ready(function(){
	$('li a').click(function(e){
		e.preventDefault();
		$("#main").load($(this).attr('href'),{},fadeFunction);
	});
});


function fadeFunction() {
    $(".content").fadeIn(700);
}

