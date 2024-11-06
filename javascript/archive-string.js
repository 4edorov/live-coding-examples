// Archive string in the following order:
// AAAABBBMMMJJJNNAGGGIIIILKAMMM -> A4B3M3J3N2AG3I4LKAM3
//

function archiveString(str) {
  let resStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!resStr) {
      resStr += str[i] + "1";
    } else {
      const lastChar = resStr[resStr.length - 2];
      const lastCount = +resStr[resStr.length - 1];

      if (lastChar === str[i]) {
        resStr = resStr.slice(0, -1) + (lastCount + 1);
      } else {
        if (lastCount === 1) {
          resStr = resStr.slice(0, -1);
        }
        resStr += str[i] + "1";
      }
    }
  }
  return resStr;
}

const res = archiveString("AAAABBBMMMJJJNNAGGGIIIILKAMMMAA");
console.log(res);
