/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { randomNumber } from '../../src/randomNumber.js';
import algorithm from '../../src/index.js';
import sayHello from '../../src/cli.js';

function parityCheck() {
  const name = sayHello();
  let attempts = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (attempts < 3) {
    const randomNum = randomNumber();
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    attempts = algorithm(randomNum, correctAnswer, name, attempts);
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

parityCheck();

export default parityCheck;
