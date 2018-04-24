//getting the values entered by the user

var height, width, color;
console.log("hery");
$('#sizeOfGrid').submit(function(event){
    console.log("hey");
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);
    console.log(height+ " is height");

});

function makeGrid(){
    
}