//Shannon Ewing-Sudds 29 Aug 2013 Functions_Personal
//In this assingment I will create a function that calculates how many loads of clothes
//I have to wash in a week

function washClothes(loads)
{
    var daysWashed = 5;
    var washClothes = loads * daysWashed;
    console.log ("The number of loads of clothes that I have to wash a day is" + " " + washClothes)
}
if (washClothes <= 10)
{
    console.log("That's not too bad");
}
if (washClothes >= 20)
{
    console.log("That is quite a few clothes you hve to wash!!");
}
if (washCLothes >= 40)
{
    conosole.log("My Goodness That Is A Lot Of Washing!!");
}
washClothes(2);

