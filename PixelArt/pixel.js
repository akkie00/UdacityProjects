//getting the values entered by the user

var height, width, color;
// console.log("hery");
$('#sizeOfGrid').submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $('#inputWidth').val();
    // console.log(height+ " is height and width is "+width);

    makeGrid(height, width);
});

function makeGrid(h, w) {
    $('tr').remove();
    for(var i = 1; i <= h; i++){
        $('#gridMaker').append('<tr id=table'+i+'></tr>');  
        for(var j=1; j <= w; j++){
            $('#table'+i).append('<td></td>');
        }  
    }

    $('td').click(function addColor(){
        color = $('#colorPicker').val();
        
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:'+color);
        }
    })
}