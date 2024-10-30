const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
      let lastElement = merged[merged.length - 1]

      if (!lastElement) {
          merged.push(intervals[i]);
      } else if ((Math.max(...lastElement) < Math.min(...intervals[i])) 
          || (Math.min(...lastElement) > Math.max(...intervals[i]))) {
          merged.push(intervals[i]);
      } else {
          if (Math.min(...intervals[i]) < Math.min(...lastElement)) {
              merged[merged.length - 1][0] = Math.min(...intervals[i]);
          }
          if (Math.max(...intervals[i]) > Math.max(...lastElement)) {
              merged[merged.length - 1][1] = Math.max(...intervals[i]);
          }
      }
  }
  return merged;
};

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
