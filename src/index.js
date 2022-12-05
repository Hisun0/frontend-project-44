/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

function algorithm(question, correctAnswer, name, attempts) {
  let count = attempts;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
    count = 4;
  }
  return count;
}

export default algorithm;
