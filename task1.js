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
