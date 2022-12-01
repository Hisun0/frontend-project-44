function randomNumber() {
  return Math.round(Math.random() * 100);
}

function randomIndex() {
  return Math.round(Math.random() * 2);
}

function randomStep() {
  return Math.round(Math.random() * 20);
}

function randomSpot() {
  return Math.round(Math.random() * 9);
}

export {
  randomIndex, randomNumber, randomStep, randomSpot,
};
