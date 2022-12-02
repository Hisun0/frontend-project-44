/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { randomStep, randomSpot } from '../src/randomNumber.js';

function progressionGame() {
  const name = sayHello();
  let attempts = 0;

  console.log('What number is missing in the progression?');

  while (attempts < 3) {
    const result = [];
    const step = randomStep();
    const randomIndex = randomSpot();

    for (let i = step; i <= step * 10; i += step) {
      result.push(i);
    }

    result[randomIndex] = '...';
    const progression = result.join(' ');

    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = result[randomIndex - 1] + step;

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`Unlucky! Correct answer was ${correctAnswer}`);
      break;
    }
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

progressionGame();

export default progressionGame;
