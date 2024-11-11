// Code a function, fib(n), that takes in the sequence number in a series ("n") and returns the Fibonacci value at that index.

const fib = function(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
console.log(fib(20)); // 6765
console.log(fib(25)); // 75025
