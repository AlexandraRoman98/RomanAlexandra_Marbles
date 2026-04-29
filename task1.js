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


function registerAttendance(students) {
  let presentCount = 0;

  const messages = students.map((student) => {
    const status = student.status ? student.status : { present: false };

    if (status.present === true) {
      presentCount++;
      return `${student.name} is present`;
    }

    return `${student.name} is absent`;
  });

  return {
    messages,
    presentCount
  };
}

const students = [
  { name: "Ava" },
  { name: "Noah", status: { present: false } },
  { name: "Mia", status: { present: true } }
];

const attendanceResult = registerAttendance(students);

console.log(attendanceResult.messages);
console.log(attendanceResult.presentCount);
console.log(students);
