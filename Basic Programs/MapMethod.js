let arr = [21,62,36,47,45,16,76,18,93,10];
// 1. Iterating js arrays 
arr.map((ele)=>{
	console.log(ele);
})

// 2.Performing operations on each array elements
let newArr = arr.map((ele) => ele + 10)
console.log(newArr.toString());


// 3. Filtering the elements on the basis of some conditions using filter method
newArr = arr.filter((ele)=> ele > 30)
console.log("elements > 30 : " + newArr.sort().toString());

// performing addition operation with each element in array using reduce(accumilator/initialval, currentval),valToInitVal
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let sum = arr2.reduce((initVal, currentVal) => initVal+currentVal , 0) // 0 will be assigned to initVal
console.log(sum);

arr2.splice(2,3,4)
console.log(arr2.toString());


