function fact(n) {
  let result = 1
  let i = 1
  while (i <= n) {
    result = i * result
    i++
  }
  return result
}

function factR(n) {
  if (n === 1) {
    return n
  }

  return n * factR(n - 1)  
}

console.log(fact(3))
console.log(fact(5))

console.log(factR(3))
console.log(factR(5))