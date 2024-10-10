//adding js file add testing it with the alert
alert("Welcome to JQuery Tutorial");

// selecting element just like document.querySelector() in js  
$("h2").css("color","RoyalBlue")

// adding class to element using Jquery just like a addClass() in js
$("h2").addClass("heading");

//cheking perticular element having perticular class associated with it or not
console.log($("h2").hasClass("heading")); // true;

// manipulating text of perticular element
$("h2").text(" JQuery Tutorial by Khalil")

// adding slide upanimation to h2 element
$("button").on("click", function(){
    $("h2").slideToggle(); // hide(), show(), toggle(), slideUp(), slideDown(), slideToggle(), fadeIn(), fadeOut(), fadeToggle() 
})

