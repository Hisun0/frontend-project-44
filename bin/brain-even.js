/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function parityCheck() {
    const randomNumber = Math.floor(Math.random() * 100);
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
        console.log('Unlucky!');
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
        console.log('Unlucky!');
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
    }
}

export default parityCheck;
    