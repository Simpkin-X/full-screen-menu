//will prevent unexpected menu close when using some components (like accordion, forms, etc)
$(function() {
	window.prettyPrint && prettyPrint()
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
	  e.stopPropagation()
	})
})

// nav bar animation
function myFunction(x) {
	x.classList.toggle("change");
};

/*
bootstrap menu click 
collapse bootstrap navbar on click in responsive view. on same page click.
*/
/*
$(function(){ 
     var navMain = $(".navbar-collapse");
     
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
 */