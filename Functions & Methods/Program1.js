// // block of code which performing addition 

// function addition(x,y){
//     let addition = x + y;
//     return addition;
// }

// const functionName = (par1,par2)=>{
//     console.log('printing parameters of functions',par1,par2);
    
// }

function findVovels(){
    let s = 'hello khalil';
    let count = 0;
    for(let c of s){
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
        {
            count++;
        }
}
    console.log(count);
}

findVovels();


// printing square array elements
let sqr = 0;
let numarr = [2,4,5,6,7,8];
numarr.forEach(element => {
    sqr = element*element;
    console.log(sqr);
    
});