# Task 3

## Original code

```js
let points = 5;

function addPoints(points) {
  points = points + 10;
  return points;
}

console.log(addPoints(2));
console.log(points);

1. What is printed by the first console.log()?
First console log prints 12
2. What is printed by the second console.log()?
Second console log prints 5
3. Why does the global variable points not change?
The global variable points doesnt change because the function parameter points is a separate local variable.
4. What does it mean that the parameter points “shadows” the outer variable?
This means that the parameter inside the function has the same name as the variable outside the function, therefore inside the function the local variable "hides" the outer one.
