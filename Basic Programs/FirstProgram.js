// Printing any data on the console
// .js is an extension is used to save javascript file


//code for displaying content on console
let printStatement = "Hello World - Javascript is easy";
console.log(printStatement);


//code for displaying content on browser

//document.getElementById is used for targeting html element by id and stored it inside variable
let printArea = document.getElementById("printstmt");

// printArea is the variable for targeted html element and innerHTML is used to print assigned value on viewport
printArea.innerHTML = printStatement;

printArea.style = "color:royalblue; background-color:black";