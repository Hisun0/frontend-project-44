/* eslint-disable no-console */
/* eslint-disable import/extensions */

import algorithm from '../../src/index.js';
import sayHello from '../../src/cli.js';
import { isPrime } from '../../src/numbersExpression.js';
import { randomNumber } from '../../src/randomNumber.js';

function primeGame() {
  const name = sayHello();
  let attempts = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (attempts < 3) {
    const randomNum = randomNumber();
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    const question = `${randomNum}`;
    attempts = algorithm(question, correctAnswer, name, attempts);
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

primeGame();

export default primeGame;
