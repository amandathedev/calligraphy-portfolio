// $( '.navbar-toggler' ).click(function(){
//     $('.navbar-collapse').slideToggle('slow');
// });

// https://stackoverflow.com/questions/36721959/slow-opening-hamburger-menu


console.log("hello");

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});