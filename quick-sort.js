function sort(arr) {
  const copiedArr = [...arr];

  if (copiedArr.length <= 1) {
    return copiedArr;
  }

  const smallerElements = [];
  const biggerElements = [];
  const pivotEl = copiedArr.shift();
  const centerElements = [pivotEl];

  while (copiedArr.length) {
    const currentEl = copiedArr.shift();

    if (currentEl === pivotEl) {
      centerElements.push(currentEl);
    } else if (currentEl < pivotEl) {
      smallerElements.push(currentEl);
    } else {
      biggerElements.push(currentEl);
    }
  }

  const smallerElementsSorted = sort(smallerElements);
  const biggerElementsSorted = sort(biggerElements);

  return smallerElementsSorted.concat(centerElements, biggerElementsSorted);
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);

// Time complexity
// Best - O(n * log n)
// Average - O(n * log n)
// Worst - O(n^2)
