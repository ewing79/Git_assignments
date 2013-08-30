//Shannon Ewing-Sudds 29 Aug 2013 Functions_Wacky
//How much wood would a woodchuck chuck If a woodchuck could chuck wood?
//He would chuck, he would, as much as he could,
//And chuck as much as a woodchuck would. If a woodchuck could chuck wood.

function chuckedWood(chucked)
{
    var hoursChucked = 5;
    var chuckedWood = chucked * hoursChucked;
    console.log ("He would chuck, he would, as much as he could, And chuck as much as a woodchuck would," + " " + chuckedWood + " " + "pounds of wood he could");

    if (chuckedWood <= 25){
        console.log("If a woodchuck could chuck wood");
    }
    else
    {
        console.log("That woodchuck chucked a whole Tree!!!");
    }
}
chuckedWood(2);

