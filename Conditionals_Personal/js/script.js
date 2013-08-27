//Shannon Ewing-Sudds 22 Aug 2013 Conditionals_Personal

///prompt for Husband's Name
var husbandsName = prompt("What is your Husband's name?");
//Prompt for Son's name
var sonsName = prompt("What is your son's name?");
//prompt for Dog's Name
var dogsName = prompt("What is your dog's name?");
//correct Husband's name is "Michael"
var correctHusbandName = "Michael";
//correct Son's nameis "Malachi"
var correctSonName = "Malachi";
//correct dog name's is "Domino"
var correctDogName = "Domino";
//if Husabnd's name does not match
if(husbandsName != "Michael");
{
    console.log("This is not your Husband's Name!!");
}
//if Son's name doesn't match
if(sonsName != "Malachi")
{
    console.log("This is not your son's name!!");
}
//if Dog's name doesn't match
if(dogsName != "Domino")
{
  console.log("This is not your dog's name!!");
}
//if husband, son, and dog names match
if(husbandsName === "Michael" && sonsName === "Malachi" && dogsName === "Domino")
{
    console.log("This is my family, and I love them very much!");
}
