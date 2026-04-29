//Task 1a

function calcTotal(prices) {
  if (!Array.isArray(prices)) {
    throw new Error("prices must be an array");
  }

  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    if (typeof prices[i] !== "number") {
      throw new Error("all prices must be numbers");
    }

    total += prices[i];
  }

  return total.toFixed(2);
}

console.log(calcTotal([10, 20, 5.5])); //35.50 is the answer

//TASK 1b

let highScore = 0;
let players = [];

function updateScore(name, points) {
  if (!players.includes(name)) {
    players.push(name);
  }

  if (points > highScore) {
    highScore = points;
  }

  const updatedPoints = points + 10;
  return `${name} now has ${updatedPoints}`;
}

console.log(updateScore("Tony", 40));
console.log(updateScore("Tony", 50));
console.log(updateScore("Rony", 150));
console.log(players);
console.log(highScore);

//Task 1c
