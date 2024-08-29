// In programming we use loops to perform task repetatively
// 1. for loop   2.while loop    3.do while loop   4.for of loop   5.for in loop

for(let i = 1; i<=5 ;i++)
{
    console.log(i,"khalil Nayakawadi");
}

let j = 1;

while (j<=5) {
    console.log(j,"Anisa Pathan");
    j++;
}


// for of loop
let name = 'khalilnayakawadi';
let len = 1;
for (const iterator of name) {
    console.log(len," = ",iterator);
    len++;
}


//for in loop 

let student = {
    name : 'khalil nayakawadi',
    age : 24,
    cgpa : 7.71,
    isPass : true,
};
for (const key in student) {
    console.log(key, ' = ', student[key]); // key value pair
}