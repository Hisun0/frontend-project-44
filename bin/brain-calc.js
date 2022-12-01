/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { randomNumber, randomIndex } from '../src/randomNumber.js';

function calcGame() {
  const name = sayHello();

  let attempts = 0;
  const ops = ['+', '-', '*'];

  console.log('What is the result of the expression?');

  while (attempts < 3) {
    const randomNumberFirst = randomNumber();
    const randomNumberSecond = randomNumber();
    const randomOps = ops[randomIndex()];

    console.log(`Question: ${randomNumberFirst} ${randomOps} ${randomNumberSecond}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomOps === '+') {
      if ((randomNumberFirst + randomNumberSecond) === Number(answer)) {
        console.log('Correct!');
        attempts += 1;
      } else {
        console.log(`Unlucky! Correct answer was: ${randomNumberFirst + randomNumberSecond}`);
        break;
      }
    } else if (randomOps === '-') {
      if ((randomNumberFirst - randomNumberSecond) === Number(answer)) {
        console.log('Correct!');
        attempts += 1;
      } else {
        console.log(`Unlucky! Correct answer was: ${randomNumberFirst - randomNumberSecond}`);
        break;
      }
    } else if (randomOps === '*') {
      if ((randomNumberFirst * randomNumberSecond) === Number(answer)) {
        console.log('Correct!');
        attempts += 1;
      } else {
        console.log(`Unlucky! Correct answer was: ${randomNumberFirst * randomNumberSecond}`);
        break;
      }
    }
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

calcGame();

export default calcGame;
