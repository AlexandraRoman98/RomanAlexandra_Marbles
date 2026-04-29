# TASK 4
## refactored task 4 code 
see TASK4.JS

## Important improvements
1. I used better names
- "a" became "currentLight"
- "b" became "ticksInCurrentLight"
- "x()" became "updateTrafficLights()"

2. I tried to reduce duplication, where instead of repeating string values and logic in many nested "if" statements, I used "LIGHTS, MESSAGES, DURATIONS"

3. I avoided magic values! The numbers for how long each light lasts are now stored in "DURATIONS", and this makes it easier to understand and easier to be changed later.

4. I have also improved the structure by adding "resetTrafficLights()" to handle resetting in one place. I have also added "getNextLight()" to make the light transition clearer and easier. And lastly, I simplified the deeply nested if/else structures.

## Why this version is better?
The refactored version is much easier to read because the variable and function names clearly describes their purpose, and it is easier to maintain because repeated values are grouped into constants. Also, it is also easier to test because the logic is split into smaller functions with clear responsibilities for each of them. :)