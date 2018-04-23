

$(document).ready(function () {


let f = $('#fig');
let b1 = $('#button1');


b1.on('click', function() {
    let add = $('input[name=colorSquare]').val(); 
        f.css('background-color', '#'+add);

});


$('#viborform').on('click', function(){
    if ($('select').val()=== 'circle'){
    f.css('border-radius', '50%');
    } else if ($('select').val()=== 'square'){
    f.css({
        transform : 'rotate(0)',
        borderRadius : '0'
    })
    } else {
        f.css ({
            borderRadius: '0',
            transform: 'rotate(-45deg)'
        })
    }
});

let r =$('#r');
let g =$('#g');
let b =$('#b');

let add, add1, add2;
add=r.val();
add1 = g.val();
add2 = b.val();
    r.on('input' ,  function() {
            add = r.val();
            f.css('background-color', 'rgb(' + add + ',0,0)');

});
    g.on('input' ,  function() {
            add1 = g.val();
            f.css('background-color', 'rgb('+ add +',' + add1 +' ,0)');
});
    b.on('input' ,  function() {
            add2 = b.val();
            f.css('background-color', 'rgb(' + add + ','+ add1 + ',' + add2 + ')' );
});
});
