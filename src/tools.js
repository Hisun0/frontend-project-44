const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

const getOperator = (oper, num1, num2) => {
  let correctAnswer = 0;
  let question = '';

  switch (oper) {
    case '+':
      correctAnswer += num1 + num2;
      question += `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer += num1 - num2;
      question += `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer += num1 * num2;
      question += `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  return [question, String(correctAnswer)];
};

export {
  getRandomNumber,
  getOperator,
};
