$(function(){
     $('.carousel').carousel({		//Carousel initalization
      interval: 4000
    });
});




$(document).ready(function(){
	$('li a').click(function(e){
		e.preventDefault();
		$("#main").load($(this).attr('href')).hide().fadeIn('slow');
	});
});


$(function(){
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();                   
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});