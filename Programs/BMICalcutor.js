// BMI = weight (lb) / height² (inches) * 703
function calculateBMI (weight,heightInMeters){
            BMI = weight/(heightInMeters * heightInMeters);
            console.log('your BMI for : ',weight,"kg weight and ",heightInMeters," height is : ", BMI);
            if(BMI<18.5)
            {
                console.log(" so you are Underweight");
            }
            else if(BMI>18.5 && BMI <= 29.9)
            {
                console.log("so you have perfect weight");
            }
            else{
                console.log("you are over weight");
                
            }
}

calculateBMI(55,1.61);

