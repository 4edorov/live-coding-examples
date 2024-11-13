// Merge two sorted arrays into one sorted array without duplicates
// num1 = [1, 4, 5, 7, 9, 24, 45]; num2 = [2, 4, 6, 7, 10]; res = [1, 2, 4, 5, 6, 7, 9, 10, 24, 45];

const num1 = [1, 4, 5, 7, 9, 24, 45];
const num2 = [2, 4, 6, 7, 10];

function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((a,b) => a - b))]
}

console.log(mergeArrays(num1, num2));

function mergeArraysVariant(a, b) {
  let resArray = [];
  let indexA = 0;
  let indexB = 0;

  while (indexA < a.length && indexB < b.length) {
    if (a[indexA] < b[indexB]) {
      resArray.push(a[indexA]);
      indexA++;
    } else if (a[indexA] > b[indexB]) {
      resArray.push(b[indexB]);
      indexB++;
    } else {
      resArray.push(a[indexA]);
      indexA++;
      indexB++;
    }
  }

  if (a.length > b.length) {
    resArray = resArray.concat(a.slice(b.length));
  } else {
    resArray = resArray.concat(b.slice(a.length));
  }

  return resArray;
}

console.log(mergeArraysVariant(num1, num2));
