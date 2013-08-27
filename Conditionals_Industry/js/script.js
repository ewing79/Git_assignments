//Shannon Ewing-Sudds 22 Aug 2013 Conditionals_worksheet
//In this assignment I will decide if I have completed my ruck 
//march in enough time.
//First I will list the givens
//Shannon Ewing-Sudds 22 Aug 2013 Conditionals_worksheet
//In this assignment I will decide if I have completed my ruck 
//march in enough time.
//First I will list the givens
var ruckWeight = 28;
//weight in lbs
var milesCompleted = 8;
//must ruck march 8 miles
var timeCompleted = 2;
//must complete ruck march in 2 hours

if(ruckWeight != 30)
{
    console.log("You didn't have enough weight");
}
if(milesCompleted != 8)
{
    console.log("You didn't complete enough miles");
}
if(timeCompleted != 2)
{
    console.log("You didn't finish in enough time");
}
if(ruckWeight >= 30 && milesCompleted ===8 && timeCompleted <= 2)
{
    console.log("Congratulations, You have passed the 8 mile ruck march");
}
