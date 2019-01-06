// $( '.navbar-toggler' ).click(function(){
//     $('.navbar-collapse').slideToggle('slow');
// });

// https://stackoverflow.com/questions/36721959/slow-opening-hamburger-menu

console.log("hello");

// Add navbar color on scroll
$(window).scroll(function() {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// Change navbar font size on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("menu-items").style.fontSize = "1em";
  } else {
    document.getElementById("menu-items").style.fontSize = "1.2em";
  }
}

// Change navbar color on toggler click
$(".navbar-toggler").click(function(){
    $("nav").toggleClass("navbar-color");
    })