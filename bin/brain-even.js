/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function parityCheck() {
  let count = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log('Unlucky! You can try again');
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log('Unlucky! You can try again.');
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      count += 1;
    }

  }

}
export default parityCheck;
