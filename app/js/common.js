$(document).ready(function(){
// deny logo link on home page
if (document.querySelector(".overview")){
	$("a.navbar-brand").removeAttr("href");
	$("a.navbar-brand").on("click", function (e) {
		e.preventDefault();
	});
}
// deny images and links dragging
$('img, a').on('dragstart', function(event) { event.preventDefault(); });
//owl-caorusel function
var thumbsStatus = true;
if (document.querySelector(".overview")){thumbsStatus = false;}
$(".owl-carousel").owlCarousel({
	thumbs: thumbsStatus,
	thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
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
                  "position": "right",
                  "pageSelector": "#mm-page"
               }
            });
var api = $("#m-menu").data("mmenu");

$("#hamburger").on("click", function () {
	api.open();
});

api.bind("open:start", function () {
		$("#m-menu").css("display", "block");
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

// modal request window
$("#tour-name").html($(".header-image-description h1").html());
//$("#request-form").on("submit", function () { return false; });

});
$("#send-tour-request").on("click", function () {
	$(".modal-outer-holder").removeClass("hidden");
	$("#mm-page").addClass("blured");
	$("#date").datepicker();
});
$(".modal-outer-holder").on("click", function (e) {
	if (e.target.className === "modal-outer-holder") {
	$(".modal-outer-holder").addClass("hidden");
	$("#mm-page").removeClass("blured");
	}
});
$( "#accordion" ).accordion({
	heightStyle: "content"
});