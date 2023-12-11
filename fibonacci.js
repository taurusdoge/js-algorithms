const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function fib(idx) {
  const fibNumbers = [1, 1];

  let counter = 2
  while (counter <= idx) {
    fibNumbers.push(fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2])
    counter++
  }

  return fibNumbers[idx]
}

console.log(fib(6))
