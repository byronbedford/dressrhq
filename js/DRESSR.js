$('.about').click( function(){

	console.log('clicking');
	// var imageSource = $(this).attr('src');
	// console.log(imageSource);
// });
// $('.lightbox img').attr('src', imageSource)
	$('.lightbox').fadeIn();

});


$('.lightbox').click(function(){
	$('.lightbox').fadeOut();
});