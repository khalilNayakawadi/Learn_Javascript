/* write a program to print Fizz at the multiples of 3 and Buzz at the multiples of 5 from 1 to 100 */

for(i = 1; i<=100; i++){
    if(i % 3 == 0){
        console.log(' Fizz ');
    }else if(i % 5 == 0){
        console.log(' Buzz ');
    }else{
        console.log(+' ' +i+ ' ');
    }
}