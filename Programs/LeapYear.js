// 1.Dvisible by 4 2.Should not devisible by 100 3.Divisible by 400 = leap year

class LeapYear {
    year;

    findLeapYear(year) {
        this.year  = year;
        if((this.year % 4 == 0 && this.year % 400 == 0) || this.year % 100 != 0){
            console.log(year, 'is leap year');
        } else{
            console.log(year, 'is not a leap year');
        }
    }

}


let checkLeapYear = new LeapYear;
checkLeapYear.findLeapYear(2000);

