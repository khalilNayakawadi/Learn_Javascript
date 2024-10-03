// 0,1,1,2,3,5,8

// let num1 = 0;
// let num2 = 1;
//  arr = [num1,num2]
// for(i = 1;i<=5;i++){
//     op = num1 + num2;
//     arr.push(op)
//     num1 = num2;
//     num2 = op;
// }
// console.log(arr.toString());

function fibonacciGenerator (n) {

    let arr = [0,1];
    i = 2;
    while(i < n){
        arr.push(arr[i-2] + arr[i-1]);
        i++;
    }
    console.log(arr)
}

fibonacciGenerator(5);

