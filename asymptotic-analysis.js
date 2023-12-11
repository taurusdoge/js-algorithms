function sumUp(n) {                 // n = 1 | n = 3 | n = 10 | n = n | number of executions/initializations
  let result = 0;                   //   1   |   1
  
  for (let i = 1; i <= n; i++ ) {   //   1   |  1  
      result = result + i;          //   1   |  3  |  10  |  n 
  }

  return result;                    //   1   |   1  |  1   |   1
}                                   //   T = 1 + 1 + n + 1 = 3 + n = 3 + 1 * n 

// generalize the formula
// T = a * n + b

// the fastest growing term ?
// a * n

// remove the coefficient
// n 

// O(n)