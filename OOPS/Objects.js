//There are mainly two ways to create js objects.
//Objects are the real world entity which is having its own properties and behaviours (Variables and Methods)
// 1.

const student = {
    fullName : "Khalil Nayakawadi",
    marks : 7.71,
    printMarks : function (){
        console.log("your marks is ", this.marks);
    },

}


//when we are talking about an object it comes with the prototype.
//prototype is an object which associated with every object it consists of various utility methods and properties.
// we can also create our own prototype using obj1.__proto__ = obj2

const company ={
    calTax(){
        console.log("tax rate is 10 %");
    }
};

const employee1 ={
    name : "suresh",
    salary : 30000
};


//creating prototype for employee
employee1.__proto__ = company;
console.log(employee1);
