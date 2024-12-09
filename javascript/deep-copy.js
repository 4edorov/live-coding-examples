function deepCopy(obj) {
  let resObj = {}
  Object.keys(obj).forEach((key) => {
    const objValue = obj[key];

    if (typeof objValue !== "object" || objValue === null) {
      resObj[key] = objValue;
    } else if (Array.isArray(objValue)) {
      resObj[key] = objValue.map((item) => {
        if (typeof item === "object") {
          return deepCopy(item);
        } else {
          return item;
        }
      })
    } else if (typeof objValue === "object") {
      resObj[key] = deepCopy(objValue);
    }
  })

  return resObj;
}

const testObj = { a: 1, b: "test", c: [3, 4, { inCa: 1, inCb: 2 }], d: { inDa: 1, inDb: 2 } };

const copiedTestObj = deepCopy(testObj);

copiedTestObj.d.inDa = { new: 1 };

console.log(testObj);
console.log(copiedTestObj);
