$(document).ready(function () {

  		$.ajax({          //Select1 страны, а в Select2 - города
  			url: "data.json",
  			success: function(data){
          var a = data;
          
          for(var i=0; i<a.length; i++){
            var b = a[i];
            $("#country").prepend( $('<option>'+b["country name"]+'</option>'));  // Select1 названия стран
          }
          var b = a[0];       
          var c = b["delivery points"];
          for(var i=0; i<c.length; i++){
            var d = c[i];
            if(d["has delivery point"]){
              $("#city").prepend( $('<option>'+d["city"]+'</option>'));
            }else{
              $("#city").prepend( $('<option disabled>'+d["city"]+'</option>')); 

            }
          }
        }
  		})


$('#country').on('change', function() {       //Если в Select1 меняется,  
  $.ajax({
        url: "data.json",
        success: function(data){
          var a = data;
          for(var i=0; i<a.length; i++){
            var b = a[i];
            if($("select#country").val()==b["country name"]){
              $("#city").empty();                               // чистим Select2 и запишем новые значения
              var c = b["delivery points"];
              for(var j=0; j<c.length; j++){
                var d = c[j];
                if(d["has delivery point"]){
                  $("#city").prepend( $('<option>'+d["city"]+'</option>'));
                }else{
                  $("#city").prepend( $('<option disabled>'+d["city"]+'</option>'));

                }
              }
            }
          }
        }  
  })
})



  $('#submit').click(function(){ 

      if(!/^\w+[a-zA-Z0-9_.-]*@{1}\w{1}[a-zA-Z0-9_.-]*\.{1}\w{2,4}$/.test(jQuery("#email").val())){
        alert("Email некоректний!");
        return false;               //Проверка мейла
      }

      if(!/(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(jQuery("#pass").val())){
        alert("Пароль некоректний!");
        return false;               //Проверка пароля
      }                     
      
        $('.loader-container').css("display", "flex"); //Лоадер 

        var msg = {"name": $("#name").val(),"email": $("#email").val(), "pass": $('#pass').val(), "country": $("select#country").val(), "city": $("select#city").val(), "comment": $("#comment").val()}
        var str = JSON.stringify(msg);

        $.ajax({
          url: "server.php",
          type: "post",
          data: str,
		  beforeSend: function(){
							$('.loader-container').css("display", "flex");
		  },
          success: function() {       
            alert("Замовлення відпрвлено");
          },
          error: function(){  
            alert("Помилка: неможлови зрабити замовлення");
          },
		  comlete: function(){
			  $('.loader-container').css("display", "none"); 
		  }
        })

  })




})

