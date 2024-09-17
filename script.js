var mealCost = 25.99;

var tip = 0.18;

var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;

var numOfPeople = 2;

console.log(
  `Your meal cost $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
var mealCost = Number(prompt("How much was your meal? (25.99)"));
var tip = Number(prompt("Tip percentage? (0.18)"));

var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;

var numOfPeople = Number(prompt("How many people are eating? (2)"));

console.log(
  `Your meal cost $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(2)}. Hope it was delicious!

  `
);
