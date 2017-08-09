$(document).ready(function(){

console.log('script started');
// deny images and links dragging
$('img, a').on('dragstart', function(event) { event.preventDefault(); });
//owl-caorusel function
 $(".owl-carousel").owlCarousel({
 	items: 1,
 	loop: true,
 	autoplay: true
 });
//mm-page mobile menu
$("#m-menu").mmenu({
               "extensions": [
                  "pagedim-black"
               ],
               "offCanvas": {
                  "position": "right"
               }
            });
var api = $("#m-menu").data("mmenu");

$("#hamburger").on("click", function () {
	api.open();
});

api.bind("open:start", function () {
		$("#hamburger").addClass("is-active");
		$("#hamburger").on("click", function () {
			api.close();
		});
});

api.bind("close:start", function () {
		$("#hamburger").removeClass("is-active");
});
 api.bind( "openPanel:finish", function( $panel ) {
         console.log( "This panel is now opened: #" + $panel.attr( "id" ) );
      });




});