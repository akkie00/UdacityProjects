// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, color;
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    console.log(height+ " is height and width is "+width);
});

function makeGrid() {

// Your code goes here!

}
