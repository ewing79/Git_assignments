//Shannon Ewing-Sudds 21 Aug 2013 Conditionals_Wacky
//Has SpongeBob cooked enough Crabby Patties to feed all the customers.
//Their are 100 customers in the Crusty Crab. SpongeBob needs to figure out if
//he has cooked enough patties or how many more does he need to cook.
//First I will list the givens
//There are 100 sea creatures at the Crusty Crab
var customers = 100;
//How many patties has SpongeBob cooked?
var pattiesCoocked = 12;
if(customers - pattiesCoocked <= 0)
{
    console.log("Yes, SpongeBob has cooked enough Crabby Patties!");
}
else
{
//since there are 100 customers and SpongeBob has only cooked 12 patties he still needs to cook 88 more Crabby Patties
    console.log("You need to cook 88 more Crabby Patties to make Mr. Crabs a happy man!");
}