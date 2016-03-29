$(document).ready(function(){

$('#space').hide();
$('#players').hide();

$('li').hover( 
	function () {
		$('#arena').css({
			'background': 'url("'+ $(this).attr('data-hover')+'")',
			'background-size': 'cover',
			'background-repeat': 'no-repeat',
			'background-position': 'center'
	}
	)},
	function () {
		$('#arena').css('background', 'black' ) 
	}
);

$('li').click(function(){
	$('li').unbind();
	$('#selArena').hide();
	$('#players').show();
});

$('#play1').change(function(){
	$('#playerOne').css({
		'background': 'url("' + $('#play1').val() +'")',
		'background-size': 'contain',
		'background-position': 'center',
		'background-repeat': 'no-repeat'
	})
});
$('#play2').change(function(){
	$('#playerTwo').css({
		'background': 'url("' + $('#play2').val() +'")',
		'background-size': 'contain',
		'background-position': 'center',
		'background-repeat': 'no-repeat'
	});
	$('#selPlayer').hide();
	$('#space').show();
});






})