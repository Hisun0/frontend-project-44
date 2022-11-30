/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function greatestDivisor() {
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

  let count = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (count < 3) {
    const randomNumberFirst = Math.round(Math.random() * 100);
    const randomNumberSecond = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
    const result = getDivisor(randomNumberFirst, randomNumberSecond);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Unlucky! Correct answer was: ${getDivisor(randomNumberFirst, randomNumberSecond)}`);
      break;
    }
  }
}
greatestDivisor();

export default greatestDivisor;
