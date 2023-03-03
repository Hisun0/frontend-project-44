import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const startGame = (gameDescription, gameInfo) => {
  const playerName = sayHello();
  console.log(gameDescription);
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const gameData = gameInfo();
    const [question, correctAnswer] = gameData;
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
