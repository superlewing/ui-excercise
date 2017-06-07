$(document).ready(function(){
	$('.btn-sidebar').click(function(){
		//$('aside').toggle(200);
		$('body').toggleClass('hide-sidebar');
		$('aside').toggle(200);
	});
});