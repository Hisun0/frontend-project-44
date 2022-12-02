

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

function algorithm(question, correctAnswer, rules) {
  const name = sayHello();

  let attempts = 0;

  console.log(rules);

  while (attempts < 3) {
    console.log(`Question: ${question}`);
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

export default algorithm;