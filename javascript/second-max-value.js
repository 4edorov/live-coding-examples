// Return second max value from array of integers

const testArr1 = [6, 3, 5, 6, 7] // 6
const testArr2 = [3, 3] // 3
const testArr3 = [9, 6, 4, 6, 5] // 6

function max(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}

console.log(max(testArr1));
console.log(max(testArr2));
console.log(max(testArr3));

function optMax(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] <= max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

console.log(optMax(testArr1));
console.log(optMax(testArr2));
console.log(optMax(testArr3));
