function min(numbers) {
  let min = numbers[0]
  for (const num of numbers) {
    if (num < min) {
      min = num
    }
  }
  return min;
}

function isEven(num) {
  return num % 2 === 0
}

const testNumbers = [45, 12, 85, 33, 90, 94, 72, 18, 67, 32, 14, 0, 56, 88, 21, 36, 40, 30, 66, 11];

console.log(min(testNumbers))