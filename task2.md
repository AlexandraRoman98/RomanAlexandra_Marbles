# Task 2

## Original code

```js
const user = { name: "Sara", score: 10 };
const backup = user;

backup.score = 25;

console.log(user.score);
console.log(backup.score);

1. What is printed by the two console.log() calls?
Both console logs are printing 25.
2. Why do both variables show the same score?
Both variables show the same score because backup does not create a new object. It points to  the same object as user
3. Does backup contain a copy of the object, or something else?
Backup contains a reference to the same object, not a copy!
4. Why is this important when writing functions?
This is important because if a function changes an object, the same change may affect other parts of the program that uses object, therefore unexpected bugs can be created.

