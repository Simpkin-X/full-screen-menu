
//will prevent unexpected menu close when using some components (like accordion, forms, etc)
{$(function() {
	window.prettyPrint && prettyPrint()
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
		e.stopPropagation()
})
})};

// nav bar animation
function myFunction(x) {
	x.classList.toggle("change");
};
