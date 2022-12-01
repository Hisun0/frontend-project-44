/* eslint-disable no-console */
/* eslint-disable import/extensions */

function isPrime(n) {
  let d = 2;
  while (n % d !== 0) {
    d += 1;
  }
  return d === n;
}

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

export { isPrime, getDivisor };
