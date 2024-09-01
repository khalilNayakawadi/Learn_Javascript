// Methods are the block of code which performs specific task
// 1.push()  - Adds elements at the end of Array
// 2.pop()  - removes the elements from end of array
// 3.concat - concate arrays togather
// 4.toString() - converts arrays to string
// 5.unshift()  - add elements to the start of array
// 6.shift()  - delete the elements from the start
// 7.slice(startind,endind)  - returns elements from startindx to endindx
// 8.splice(startind,delcount,newele)- delete,add elements to given index
// 9.map() - it perform operation on element and returns new array
// 10.filter - it perform operation and returns filtered array
let arr = [1,2,3,4];
console.log(arr);
arr.push(5,6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.toString());
console.log(arr.shift()); 
console.log(arr.shift());
arr.unshift(1,2);
console.log(arr);
let arr2 = [10,20,30,40];
console.log(arr.concat(arr2));
console.log(arr.slice(1,4));

// array method practice question
/* create an array to store companies ['bloomberg','Microsoft','uber','google','IBM','Netflix]
   1.remove the first company from the array
   2.remove uber and Add ola in its place
   3. add amazone at the end */
let companies = ['bloomberg','Microsoft','uber','google','IBM','Netflix'];

// adding amazon at the end 
companies.push('Amazon');
// removing the first company
companies.shift();
// removing and adding uber and ola
companies.splice(1,1,'ola');
console.log(companies);


