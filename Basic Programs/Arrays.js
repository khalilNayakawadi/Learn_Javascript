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


// spread operator 

let marvalHeros = ["Ironman", "Thor", "Capton America", "Hulk"];
let indianHeros = ["Shaktiman", "Hatim", "Gunior G", "Balvir"];


let allHeros = [...marvalHeros, ...indianHeros] // spread operator implementation
console.log(allHeros.toString());


//destructuring of arrays
let arrCity = ["Pune", "Mumbai", "Hyderabad", "Bangalore", "Delhi"];
let [c1,c2,c3,c4,c5] = arrCity;
console.log(c1,c2,c3,c4,c5);

let [firstCity,,,,lastCity] = arrCity;
console.log(lastCity);

let arr1 = [10,20,30,[50,60]];
let [a1, a2, a3,a4] = arr1;
console.log(a4);

let [ele1,ele2] = a4;
console.log(ele2);

let [e1,e2,e3,[f1,f2]] = arr1;
console.log(f1);


//destructuring of objects

let obj = {
    firstname : "Khalil",
    lastname : "Nayakawadi",
    education : "MCA"
}

console.log(obj.firstname);

let{firstname,lastname,education} = obj;
console.log(firstname, lastname);
console.log(education);

let personDetails = {
    fname : "Anisa",
    lname : "Pathan",
    address :{
        pCity : "Kolhapur",
        street : "Anant Roto",
        housno : 14
    }
}

let{fname,lname,address:{pCity,street,housno}} = personDetails
console.log(fname,pCity);

let data ={
    id : "ID007",
    date:"28 April 2000",
    record :{
        totalUsers : 80,
        online : 70,
    },
    onlineStatus :{
        active : 57,
        away : 13,
        busy : 10
    }

} 

let{id,date,record:{totalUsers,online},onlineStatus:{active,away,busy}} =data;
console.log(id,date,online,active);