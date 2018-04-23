$(document).ready ( function(){
	$('.open__links').on('click', function(){
		$(this).next().slideToggle(500);
		
		let a = $(this).find('button').text();
		console.log(a);
		if (a =='+'){
    	$(this).find('button').text('-');
    }else {
    	$(this).find('button').text('+');
    }
});

})	

