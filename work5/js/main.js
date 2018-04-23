$(document).ready ( function(){
	let p = $('#number');
	let a = +$('#number').text();
	let price = +$('#price').text();
	let all = $('.all');
	let total = 0;
	$('.add').on('click', function(){
		let b = ++a;	
		p.text(b); 
		let total = b*price;
		all.text(total);	
	});

})