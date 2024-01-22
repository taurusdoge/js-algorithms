function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const leftSorted = sort(left);
  const rightSorted = sort(right);

  const merged = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSorted.length ||
    rightArrIndex < rightSorted.length
  ) {
    if (
      leftArrIndex >= leftSorted.length ||
      leftSorted[leftArrIndex] > rightSorted[rightArrIndex]
    ) {
      merged.push(rightSorted[rightArrIndex]);
      rightArrIndex++;
    } else {
      merged.push(leftSorted[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return merged;
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);

// Time complexity
// Best - O(n * log n)
// Average - O(n * log n)
// Worst - O(n * log n)
