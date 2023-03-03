import startGame from '../engine.js';
import { getOperator, getRandomNumber } from '../tools.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operands = '+-*';
  return operands[getRandomNumber(0, operands.length - 1)];
};

const calcGame = () => {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 20);
  const oper = getRandomOperator();
  const answers = getOperator(oper, randomNumber1, randomNumber2);
  const [question, correctAnswer] = answers;

  return [question, correctAnswer];
};

const start = () => startGame(gameDescription, calcGame);

export default start;
