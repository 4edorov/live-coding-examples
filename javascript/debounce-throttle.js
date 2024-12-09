const debounce = (func, delay = 500) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const debouncedFunc = debounce(() => console.log("delayed messgae in 1s"), 1000);
debouncedFunc();

const throtle = (func, delay = 500) => {
  let isWait = false;
  return function (...args) {
    if (!isWait) {
      func.apply(this, args);
      isWait = true;
      setTimeout(() => {
        isWait = false;
      }, delay)
    }
  }
}

const throtledFunc = throtle(() => console.log("throtled messgae in 1s"), 1000);
throtledFunc();
throtledFunc();
