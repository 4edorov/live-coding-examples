// диапазон чисело от 1 до N
// выкинули одно число, остальные перемешали. Получился массив arr
// найти пропущенное число
// [1,2,3,5,6,7] -> 4

function findMissingNumber(arr) {
  const n = arr.length + 1;
  let num = 1;
  while (num <= n) {
    if (!arr.includes(num)) {
      return num;
    }
    num++;
  }
  return null;
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7])); // 4
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // 9
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11
