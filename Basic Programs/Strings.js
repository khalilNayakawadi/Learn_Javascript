// 1.Strings are the sequence of characters enclosed within the single / double quotes which represents text.
//2.String are immutable.

// creation of string
let str1 = 'hello world';
let str2 = "hey babe what's up !";

//properties of string
// 1.length  

//template literals is used to print values with string
let name  = 'khalilnayakawadi';
let age = 24;
let sentence = `My name is ${name} and my age is ${age}.`;
console.log(sentence);

//escape characters : \n, \t, 

// Methods in string : block of code used manipulate the string
// 1. toUppercase()   2.toLowercase()  3. trim() 4.concat() 5. replace() 6. chatAt() 7.slice(start, end)  8.replaceAll() 9.startsWith() 10.endsWith()


//generating username 
//username should like this @fullname_fullnamelength

let username = '@'.concat(name).concat(name.length)
console.log(username);