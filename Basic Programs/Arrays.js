// Arrays are collection of items

let heroes = ['ironman','spiderman','batman','superman','hulk'];
let marks = [90,67,87,77,74];
let info = ['khalil',24,'MCA',7.1,"Pune"]

for (const i of info) {
    console.log(i,'=',info[i]);
} 

// finding average marks of students 
let avgMarks = 0;
for (const i of marks) {
    avgMarks += i;
}
avgMarks = avgMarks/marks.length;
console.log(avgMarks);

let items = [55,500,225,160,430]; //prices of items.
// insert new prices by applying 10% discount on each item
console.log('original array ',items);
let i = 0;
for (const val of items) {
    let offer = val /10;
    items[i] -= offer
    i++
}
console.log('new array',items);