import startGame from '../engine.js';
import { getRandomNumber } from '../tools.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);
  for (let i = progressionStep; i <= progressionStep * progressionLength; i += progressionStep) {
    arr.push(i);
  }
  const secretSpot = getRandomNumber(0, arr.length - 1);
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
