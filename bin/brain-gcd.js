#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { randomNumber } from '../src/randomNumber.js';
import { getDivisor } from '../src/numbersExpression.js';
import algorithm from '../src/index.js';
import sayHello from '../src/cli.js';

function greatestDivisor() {
  const name = sayHello();
  let attempts = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (attempts < 3) {
    const randomNumberFirst = randomNumber();
    const randomNumberSecond = randomNumber();

    const question = `${randomNumberFirst} ${randomNumberSecond}`;
    console.log(`Question: ${question}`);
    const correctAnswer = getDivisor(randomNumberFirst, randomNumberSecond);
    attempts = algorithm(question, correctAnswer.toString(), name, attempts);
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

greatestDivisor();

export default greatestDivisor;
