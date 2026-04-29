# Task 1

## Task 1a

### Original code
```js
function calcTotal(prices) {
  let total = 0;
  for (let i = 1; i <= prices.length; i++) {
    total += price[i];
  }
  return total.toFixed(2)
}

Bugs and Mistakes:
1. The loop starts at 1 instead of 0, and this way the array  is skipped
2. The loop condition uses i<= prices.length, and this makes the code to try to access one index  past the end of the array
3. Also, the code uses price[i] instead of prices[i], and the effect of this, is that price is undefined, therefore the code crashes.
4. Code has inconsistent formatting and missing semicolons, which is not really fatal, but can make code less readable for others.
5. No validation of the input, which could cause incorrect results or runtim errors. 
(Improved Version can be found in Task1.js)
