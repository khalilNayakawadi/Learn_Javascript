// classes are blueprints for an objects 

class ToyotaCar {
    carName;
    setName(name)
    {
        this.carName = name;
    }


    startCar(){
        console.log(this.carName,"is Started");
        
    }


    stopCar(){
        console.log(this.carName,"is stopped");
        
    }
}



// creating object using class
let fortuner = new ToyotaCar(); // constructor call 
fortuner.setName('Fortuner');
fortuner.startCar();
fortuner.stopCar();

// creating objec2 using class
let lexus = new ToyotaCar(); // constructor call
lexus.setName('lexus');
lexus.startCar();
lexus.stopCar();


// constructor is a special member function same as class name which initialize the members of the class and object is created with the help of new keyword