function sumOfArray(numbers) {
  let acc = 0; 
  // for (let i = 0; i < sourceArr.length; i++) {
  //   acc += sourceArr[i]
  // }
  for (let num of numbers) {
    acc += num;
  }

  return acc;
}

const arr = [1,2,3,4,5,6,6,7,8,9,9]
console.log(sumOfArray(arr))