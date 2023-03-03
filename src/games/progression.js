import startGame from '../index.js';
import { getRandomNumber } from '../tools.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);
  const secretSpot = getRandomNumber(0, arr.length - 1);
  for (let i = progressionStep; i <= progressionStep * progressionLength; i += progressionStep) {
    arr.push(i);
  }
  const correctAnswer = arr[secretSpot];
  arr[secretSpot] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  const answers = getProgression();
  const [question, correctAnswer] = answers;

  return [question, String(correctAnswer)];
};

const start = () => startGame(gameDescription, progressionGame);

export default start;
