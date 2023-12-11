const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function fib(idx) {
  const fibNumbers = [1, 1];

  let counter = 2;
  while (counter <= idx) {
    fibNumbers.push(
      fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2]
    );
    counter++;
  }

  return fibNumbers[idx];
}

console.log(fib(5));
console.log(fib(6));

function fibR(n, memo = {}) {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

console.log(fibR(5));
console.log(fibR(6));
