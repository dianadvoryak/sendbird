// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/app/libs/jquery/dist/jquery.min.js')
require('~/node_modules/jquery/dist/jquery.min.js')

document.addEventListener('DOMContentLoaded', () => {

  $('.menu__mobile').click(function(event){
		$('.menu__mobile, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

  $('.menu__link').click(function(event){
		$('.menu__mobile, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



  $('.acc-btn').on('click', function(){
  $('.acc-item').removeClass('active-b');
  $('.acc-txt').removeClass('active-t');
  $('.acc-btn').addClass('active-v');
  $(this).removeClass('active-v');
  $(this).parent().addClass('active-b');
  $(this).next().addClass('active-t');
});


})
