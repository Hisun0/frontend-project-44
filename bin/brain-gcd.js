/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { randomNumber } from '../src/randomNumber.js';

function greatestDivisor() {
  const name = sayHello();

  function getDivisor(a, b) {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    return a;
  }

  let attempts = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (attempts < 3) {
    const randomNumberFirst = randomNumber();
    const randomNumberSecond = randomNumber();

    console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
    const result = getDivisor(randomNumberFirst, randomNumberSecond);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`Unlucky! Correct answer was: ${getDivisor(randomNumberFirst, randomNumberSecond)}`);
      break;
    }
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

greatestDivisor();

export default greatestDivisor;
