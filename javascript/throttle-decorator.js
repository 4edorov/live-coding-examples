function f(a) {
  console.log(a)
}

function throttleDecorator(fn, delay = 1000) {
  let isWaiting = false;
  let curArgs = null;
  let curThis = null;
  return function(...args) {
    if (!isWaiting) {
      isWaiting = true;
      return fn.apply(curThis, args);
    }

    curArgs = args;
    curThis = this;

    setTimeout(() => {
      isWaiting = false;
      if (curArgs) {
        fn.apply(curThis, curArgs);
        curArgs = null;
        curThis = null;
      }
    }, delay)
  }
}

const throttledF = throttleDecorator(f, 1000)

throttledF(1);
throttledF(2);
throttledF(3);
throttledF(4);
throttledF(5);
