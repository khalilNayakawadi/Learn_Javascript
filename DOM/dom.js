let div = document.getElementById("div1");
let para = document.getElementsByClassName("para")
let heading = document.getElementById("heading"); // getting the html element - heading - h2
console.log(heading.innerText); // accessed h2 element using id and displayed text on console
console.log(div.innerText); // displayed all the content on console peresent in div tag

// changing the text of html element dynamically
heading.innerText = "Hello User" // changes done in heading text

// adding style to perticular element using js
// when we use style object in js inline css will be applied to the html element
div.style.width = "300px";
div.style.height= "200px";
div.style.backgroundColor = "#6A9C89";
div.style.padding = "25px";

// adding class or attribute to html element
console.log(div.getAttribute("class"));
div.setAttribute("class","NewClsass");

//adding class to element
div.classList.add("NewClass");

//adding element in perticular element
//creating button to add on the webpage
let newBtn = document.createElement("button");
newBtn.innerText ="click me";
div.append(newBtn)

