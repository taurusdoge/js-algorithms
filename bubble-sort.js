function sort(arr) {
  const resultArr = [...arr];

  for (let i = 0; i < resultArr.length; i++) {
    for (let j = i + 1; j < resultArr.length; j++) {
      if (resultArr[i] > resultArr[j]) {
        let temp = resultArr[j];
        resultArr[j] = resultArr[i];
        resultArr[i] = temp;
      }
    }
  }

  return resultArr;
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);

// Time complexity
// Best - O(n)
// Average - O(n^2)
// Worst - O(n^2)
