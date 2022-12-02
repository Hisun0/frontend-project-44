/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { randomNumber } from '../src/randomNumber.js';
import algorithm from '../src/index.js';

function parityCheck() {
  
  const correctAnswer = randomNumber() % 2 === 0 ? 'yes' : 'no';
  
  algorithm(randomNumber(), correctAnswer, 'Answer "yes" if the number is even, otherwise answer "no".');
}

parityCheck();

export default parityCheck;
