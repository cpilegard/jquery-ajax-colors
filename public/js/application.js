$(document).ready(function(){
	$('#get_color').on('click', function(e) {
		e.preventDefault();
		$.post('/color', function(data) {
		}).done(function(response) {
			$('ul li:nth-child('+response.cell+')').css('background-color', response.color);
		});
	});
});