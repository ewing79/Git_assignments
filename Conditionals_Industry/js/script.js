//Shannon Ewing-Sudds 22 Aug 2013 Conditionals_worksheet
//In this assignment I will decide if I have completed my ruck 
//march in enough time.
//First I will list the givens
var ruckWeight = prompt("what is your ruck wight");
//ruck weight has to be at least 30lbs
var milesCompleted = Prompt("How many miles did you complete");
//must complete at least 8 miles
var timeCompleted = prompt("how long did it take you to complete the ruck march?");
//Ruck March must be completed in 2 hours
var passWeight = 30;
//weight in lbs
var passMiles = 8;
//must ruck march 8 miles
var passTime = 2;
//must complete ruck march in 2 hours
if(ruckWeight != 30)
{
    console.log("You didn't have enough weight");
}
