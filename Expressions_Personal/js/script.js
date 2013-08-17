//EwingSudds, Shannon 16 August 2013 Expressions_Assignment

//Expressions_Personal
//This will be a calculator to determine how many days I would have shopped
// //for shoes and how many shoes I would have bought in 1 year depending on how many shoes I buy per month
alert("This is in the js file");
var days = 1;
var daysInAWeek =  7;
var week = days * 7;
var weeksInAMonth = 4;
var daysInAMonth = week * weeksInAMonth;
var monthsInAYear = 12;
var daysInAYear = monthsInAYear * daysInAMonth;
var shoesPerYear = monthsInAYear * prompt("how many shoes do you buy in a month");
console.log(shoesPerYear);



