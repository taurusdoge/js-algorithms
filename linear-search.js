// findIndex actually
function findElement(arr, element) {
  let index = 0;
  for (const el of arr) {
    if (el === element) {
      return index;
    }
    index++;
  }
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));
