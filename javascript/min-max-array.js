// Find min and max element in array

const arr1 = [3, 5, -1, 20, 32, 45]; // -1, 45
const arr2 = [32, 4, 53, 32, 0, 1]; // 0, 53

const findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

const res = findMinMax(arr1);
console.log(res);
