// Rewrite the 'calcAverageHumanAge' function from Challenge #2,
// but this time as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
//§ Data 2: [16, 6, 10, 5, 6, 1, 4]
//GOOD LUCK

function calcAverageHumanAge(ages) {
  const averageAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return averageAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
