import startGame from '../engine.js';
import { getRandomNumber } from '../tools.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let resultForA = a;
  let resultForB = b;
  while (resultForA !== resultForB) {
    if (resultForA > resultForB) {
      resultForA -= resultForB;
    } else if (resultForA < resultForB) {
      resultForB -= resultForA;
    }
  }
  return resultForA;
};

const gcdGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2);

  return [question, String(correctAnswer)];
};

const start = () => startGame(gameDescription, gcdGame);

export default start;
