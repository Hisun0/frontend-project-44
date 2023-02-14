import { getRandomNumber, startGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);
  for (let i = progressionStep; i <= progressionStep * progressionLength; i += progressionStep) {
    arr.push(i);
  }
  arr[getRandomNumber(1, arr.length - 2)] = '..';
  const correctAnswer = arr[arr.indexOf('..') - 1] + progressionStep;
  const result = arr.join(' ');
  return [correctAnswer, result];
};

const progressionGame = () => {
  const answers = getProgression();
  const correctAnswer = answers[0];
  const question = answers[1];

  return [question, String(correctAnswer)];
};

const start = () => startGame(gameDescription, progressionGame);

export default start;
