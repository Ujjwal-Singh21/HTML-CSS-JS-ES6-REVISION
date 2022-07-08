// Q1 : Implement Caching/Memoized function 
//----------------------------------------- 
// The console.timeEnd() stops a timer that was previously started by calling console.time()

// Normal Approach:
//-----------------
// const clumsyProduct = (num1, num2) => {

//   for(let i = 1; i <= 100_00_00_00; i++) {}

//   return num1 * num2;
// }

// //First Call 
// console.time('First Call');
// console.log(clumsyProduct(4567, 6789));
// console.timeEnd('First Call');

// //Second Call 
// console.time('Second Call');
// console.log(clumsyProduct(4567, 6789));
// console.timeEnd('Second Call');


//---------------------------------------------------------------------------------------------------

// Memoized Approach
//------------------ 
//Expected Output -> { '4567,6789': 31005363 }

const memoizedFn = (fn, context) => {

  const resObj = {};

  return function(...args) {

    var argsCache = JSON.stringify(args);

    if(!resObj[argsCache]) {

      resObj[argsCache] = fn.call(context || this, ...args)
    } 

    return resObj[argsCache];
  }
}

const clumsyProduct = (num1, num2) => {

  for(let i = 1; i <= 100_00_00_00; i++) {}

  return num1 * num2;
}

const memoizedClumsyProduct = memoizedFn(clumsyProduct);

//First Call 
console.time('First Call');
console.log(memoizedClumsyProduct(4567, 6789));
console.timeEnd('First Call');

//Second Call 
console.time('Second Call');
console.log(memoizedClumsyProduct(4567, 6789));
console.timeEnd('Second Call');