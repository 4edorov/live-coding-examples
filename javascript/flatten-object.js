const obj = {
  a: {
    b: {
      c: 1,
      d: 2
    },
    e: 3
  },
  f: 4,
  g: {
    h: {
      i: 5,
      j: {
        k: 6
      }
    },
    k: 7
  }
};

// Expected: {"a.b.c":1,"a.b.d":2,"a.e":3,"f":4,"g.h.i":5,"g.h.j.k":6,"g.k":7}

// Solution 1
const flattenObject = (obj) => {
  let result = {};

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const temp = flattenObject(obj[key]);
      for (const key2 in temp) {
        result[key + '.' + key2] = temp[key2];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}


const flattenedObj = flattenObject(obj);
console.log(JSON.stringify(flattenedObj));

// Solution 2
const flattenedObjVariant = (obj, resObj = {}, prevKey = "") => {

  Object.keys(obj).forEach((key) => {
    let newKey = prevKey + `${prevKey && "."}` + key
    if (typeof obj[key] === "object") {
      flattenedObjVariant(obj[key], resObj, newKey)
    } else {
      resObj[newKey] = obj[key]
    }
  });

  return resObj;
}

const flattenedObjVariantRes = flattenedObjVariant(obj);
console.log(JSON.stringify(flattenedObjVariantRes));
