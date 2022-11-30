/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function calcGame() {
  let count = 0;
  const ops = ['+', '-', '*'];

  console.log('What is the result of the expression?');

  while (count < 3) {
    const randomNumberFirst = Math.round(Math.random() * 10);
    const randomNumberSecond = Math.round(Math.random() * 10);
    const randomOps = ops[Math.round(Math.random() * 2)]
    
    console.log(`Question: ${randomNumberFirst} ${randomOps} ${randomNumberSecond}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomOps === '+') {
        if ((randomNumberFirst + randomNumberSecond) === Number(answer)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log('Unlucky! You can try again.');
            break;
        }
    } else if (randomOps === '-') {
        if ((randomNumberFirst - randomNumberSecond) === Number(answer)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log('Unlucky! You can try again.');
            break;
        }
    } else if (randomOps === '*') {
        if ((randomNumberFirst * randomNumberSecond) === Number(answer)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log('Unlucky! You can try again.');
            break;
        }
    }

  }

}
calcGame();
export default calcGame;
