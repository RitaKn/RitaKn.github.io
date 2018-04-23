$(document).ready(function () {

        $('#button').click(function(){
               let toAdd = "<input  type='checkbox'"+"id='chek'" + "class='ch'>" + 
		"<input type='text'" +
		"class='todo-item-done'" + "name='listItem'" + "id='new-todo-item'>" +  
		"<button class='delet'>" +"Del" + "</button>";
                 $('.list').append('<li>' + toAdd + '</li>');
            });


		$(document).on('click', '.ch', function(){
				$(this).parent().find('input').toggleClass("st");
		});


	/*	let a = $('.ch');

	a.on('click', function(){

	if ($('.todo-item-done').hasClass('strike')){
		$('.todo-item-done').removeClass('strike');
	} else {
	$('.todo-item-done').addClass('strike');
	}

	});*/

	$(document).on('click','.delet', function(){
        $(this).parent().fadeOut('slow');    
      });

    $('ul').sortable(); 

  });





   





