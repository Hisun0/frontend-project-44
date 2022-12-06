#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import sayHello from '../src/cli.js';
import algorithm from '../src/index.js';
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
    let correctAnswer;

    switch (randomOps) {
      case '+':
        correctAnswer = randomNumberFirst + randomNumberSecond;
        break;
      case '-':
        correctAnswer = randomNumberFirst - randomNumberSecond;
        break;
      case '*':
        correctAnswer = randomNumberFirst * randomNumberSecond;
        break;
      default:
        break;
    }

    console.log(`Question: ${randomNumberFirst} ${randomOps} ${randomNumberSecond}`);
    attempts = algorithm(correctAnswer.toString(), name, attempts);
  }
  if (attempts === 3) console.log(`Congratulations, ${name}!`);
}

calcGame();

export default calcGame;
