const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter your question: ", (result) => {
  let question = result.split(" ");

  let num1 = +question[2];
  let num2 = +question[4];
  let oprnt = question[3];
  if (isNaN(num1) || isNaN(num2)) return console.log("not a number");
  let answer;
  switch (oprnt) {
    case "plus":
      answer = num1 + num2;
      break;
    case "minus":
      answer = num1 - num2;
      break;
    case "multiplied":
      answer = num1 * num2;
      break;
    case "divided":
      answer = num1 / num2;
      break;
    default:
      answer = "Invalid operator";
  }

  console.log(answer);
  rl.close();
});
