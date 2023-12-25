function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

// recursive findIndex
function findElementR(arr, element, shift = 0) {
  let start = 0;
  let end = arr.length - 1;
  const middle = Math.floor((end - start) / 2);

  if (arr[middle] === element) {
    return middle + shift;
  }

  if (arr[middle] < element) {
    start = middle + 1;
    shift = shift + middle + 1;
  } else {
    end = middle;
  }
  return findElementR(arr.slice(start, end + 1), element, shift);
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));
console.log(findElementR(arr, 99));
