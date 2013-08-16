//EwingSudds, Shannon 16 August 2013 Expressions_Assignment

//Expressions_Personal
//This will be a calculator to determine how many shoes I will have bought in 1 year if i bought a pair of shoes every week for four weeks a month
alert("This is in the js file");
// Set the unit values in days
var daysPerWeek = 7;
var daysPerMonth = daysPerWeek * 4;
var daysPerYear = daysPerMonth * 12;
var shoesPerMonth = prompt("How many shoes do you buy a week");
var shoesPerYear = shoesPerMonth / daysPerYear;
console.log(shoesPerYear);
