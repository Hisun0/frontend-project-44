import startGame from '../engine.js';
import { getRandomNumber } from '../tools.js';

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const start = () => startGame(gameDescription, evenGame);

export default start;
