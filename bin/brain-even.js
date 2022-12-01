/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { randomNumber } from '../src/randomNumber.js';

function parityCheck() {
  const name = sayHello();

  let attempts = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (attempts < 3) {
    const randomNum = randomNumber();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      attempts += 1;
    } else if (randomNum % 2 === 0 && answer === 'no') {
      console.log('Unlucky! You can try again');
      break;
    } else if (randomNum % 2 !== 0 && answer === 'yes') {
      console.log('Unlucky! You can try again.');
      break;
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log('Unlucky! You can try again.');
      break;
    }
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

parityCheck();

export default parityCheck;
