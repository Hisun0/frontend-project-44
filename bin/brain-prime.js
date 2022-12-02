/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { isPrime } from '../src/numbersExpression.js';
import { randomNumber } from '../src/randomNumber.js';

function primeGame() {
  const name = sayHello();
  let attempts = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (attempts < 3) {
    const randomNum = randomNumber();
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      break;
    }
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

primeGame();

export default primeGame;
