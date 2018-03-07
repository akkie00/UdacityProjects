/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    // console.log(length);
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

//created a function that accepts the argument
function buildTriangle(width){
    // console.log("hey!");
       var triangle="";    //assigned a string variable to store the resultant triangle
       //this for loop checks the limit of the triangle width and passes the value to the makeLine function when
       //it is being called.
       for(var i= 1; i <= width; i++){
         //storing the result string in the variable triangle
        triangle += makeLine(i);
        // console.log(i);
       }
       return triangle;
}
// console.log(makeLine(4));
// test your code by uncommenting the following line
console.log(buildTriangle(10));
