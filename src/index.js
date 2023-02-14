import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

const startGame = (gameDescription, gameInfo) => {
  const playerName = sayHello();
  console.log(gameDescription);
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const gameData = gameInfo();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

const getOperator = (oper, num1, num2) => {
  let correctAnswer = 0;
  let question = '';

  switch (oper) {
    case '+':
      correctAnswer += num1 + num2;
      question += `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer += num1 - num2;
      question += `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer += num1 * num2;
      question += `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  return [String(correctAnswer), question];
};

export {
  getRandomNumber,
  startGame,
  getOperator,
};
