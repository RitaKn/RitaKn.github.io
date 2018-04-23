/*	
let but = $('#but');

but.on('click', function() {

	$.ajax( {
		url: 'data.json',
		data: '()',
		type: 'POST',
		success: function(data){

for(let i=0; i<data.length; i++) {

			let post = `
				<div class="d-flex">
				<div class="image1__a">
					<img class="frs_img" src="${data[i].image}" alt="Clohet">
				</div>
				<div class=" textarticle__a">
					<div class="captionarticle">
						<p>${data[i].title}</p>
					</div>
						<p class="dateofcaptionarticle"> ${data[i].date} | ${data[i].author} | <a href="#">${data[i].tag} </a> 
						</p>
					<div class="textarticle">
						<p class="textarticle__inner">${data[i].text}
						<a href="#" class="textarticle__inner__href"> <i class="fas fa-angle-right"></i></a>
						</p>
					</div>
					<p class="peoplelooks"> <i class="fas fa-eye"></i> ${data[i].views} <i class="far fa-comment"></i> <a href="#">0</a> 
					</p>
				</div>
				</div>				
			`;
			$('.new').append(post);
		}
	},
		error: function(){
			alert('server not work now');
		}
	});
});	*/