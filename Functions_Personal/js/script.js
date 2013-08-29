//Shannon Ewing-Sudds 29 Aug 2013 Functions_Personal
//In this assingment I will create a function that calculates how many loads of clothes
//I have to wash in a week


function washClothes(loads)
{
    var daysWashed = 5;
    var washClothes = loads * daysWashed;
    console.log ("The number of loads of clothes that I have to wash a day is" + " " + washClothes);

    if (washClothes <= 25){
        console.log("That is quite a few clothes you have to wash");
    }
    else
    {
        console.log("My Goodness that is a lot of washing you have to do");
    }
}
washClothes(5);


