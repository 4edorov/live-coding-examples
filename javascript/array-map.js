const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => item * 2);
console.log(result);

Array.prototype.myMap = function(cb) {
  let result = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    result[i] = (cb(this[i], i, this));
  }

  return result;
}

const myResult = arr.myMap((item) => item * 2);
console.log(myResult);
