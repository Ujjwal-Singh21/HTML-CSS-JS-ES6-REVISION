// Q1: map vs forEach
//-------------------
// map does not modify the original Array, it actually returns a new Array and it can be piped/chained with other methods using dot operator like filer(), whereas forEach modifies the original Array and does not return anything and cannot be further piped with any other methods.

const arr = [2, 4, 7, 8, 9]

const mapResult = arr.map((e) => {
  return e + 10
})

const forEachResult = arr.forEach((e) => {
   e + 10
})

console.log(mapResult) // returns a new Array with modified values
console.log(forEachResult) // does not return anything

// map chained with filter
const mapFil = arr.map((e) => {
  return e + 10
}).filter(e => e > 14)

console.log(mapFil) // [17, 18, 19]

// modifying original array using forEach
arr.forEach((e, index) => {
  arr[index] = e + 20
})

console.log('After Modification', arr) // [22, 24, 27, 28, 29]

//-----------------------------------------------------------------------------------------------------

// Q2 : null vs undefined
//-----------------------
// null is actually a value for a variable and its type is object, whereas undefined means a variable is declared but it has not yet been initialized with any value.

let a;
let b = null;

console.log(a, typeof a); // undefined 'undefined'
console.log(b, typeof b); // null 'object'

console.log(null == undefined) // true -> == compares only both values/entities
console.log(null === undefined) // false -> === compares both entities as well as their types

//------------------------------------------------------------------------------------------------------

// Q3 : Event Delegation
//----------------------

document.querySelector("#products").addEventListener('click', (event) => {
  console.log(event)

  if(event.target.tagName === 'LI') {

    window.location.href += '#' + event.target.id
  }
})

//-----------------------------------------------------------------------------------------------------

// Q4: Array flattening 
//---------------------
let array = [[1, 2], 3, [4, 5], [6, 7, [8, 9]]]

var resultArr = [...array]
console.log(resultArr) // no changes -> [ [ 1, 2 ], 3, [ 4, 5 ], [ 6, 7, [ 8, 9 ] ] ]

var resultArr = [].concat(...array)
console.log(resultArr) // 1-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]

var resultArr = array.flat(1) 
console.log(resultArr) // 1-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]

var resultArr = array.flat(2) 
console.log(resultArr) // 2-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// polyFill for flat() method
//---------------------------
function flattenArr (arr, depth = 1) {

  let result = []

  arr.forEach((arr) => {

    if(Array.isArray(arr) && depth > 0) {

        result.push(...flattenArr(arr, depth - 1))

    } else {
        result.push(arr)
    }
  })

  return result
  
}

console.log('Custom Flat: ', flattenArr(array, 2))

//---------------------------------------------------------------------------------------------------------

// Q5: map vs flatMap
//-------------------

// map() method just makes a copy of original array and maps it according to given logic and returns that new copied array, whereas flatMap() does the same thing but also does flattening of array simultaneousaly.

const nums = [1, 2, 3, 4]
const strs = ['one', 'two', 'three', 'four']

const res1 = nums.map((e, index) => [e, strs[index]])
console.log('map result:', res1) // -> [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]

const res2 = nums.flatMap((e, index) => [e, strs[index]])
console.log('flatMap result:', res2) // -> [ 1, 'one', 2, 'two', 3, 'three', 4, 'four' ]


//-----------------------------------------------------------------------------------------------------------

// Q6: reduce vs reduceRight
//--------------------------

const strsArr = ['t', 's', 'e', 'b']

const reduceRes = strsArr.reduce((accumulator, value) => accumulator + value)
console.log('reduce result: ' + reduceRes) // tseb -> reduce() works from left to right 

const reduceRightRes = strsArr.reduceRight((accumulator, value) => accumulator + value)
console.log('reduceRight result: ' + reduceRightRes) // best -> reduce() works from right to left 

//------------------------------------------------------------------------------------------------------------

// Q7: copyWithin() in JS 
//-----------------------
// The Array.copyWithin() method considers an array first and then copies part of an array to the same array itself and returns it, without modifying its size but yet the modified data whatever user wishes to have in other’s place i.e, copies array element of an array within the same array.

// Syntax: array.copyWithin(target, start, end)
// Parameters: This method accepts three parameters as mentioned above and described below:  

// -> target: The index position to copy the elements to(Required).
// -> start: It is optional. The index position to start copying elements from (default is 0).
// -> end: It is optional. The index position to stop copying elements from (default is array.length).
// -> Return value: It returns the modified array. 

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

myArr.copyWithin(0, 4) 

console.log(myArr) // -> [5, 6, 7, 8, 9, 6, 7, 8, 9]

myArr.copyWithin(0, 4, 6) 

console.log(myArr) // -> [9, 6, 7, 8, 9, 6, 7, 8, 9] 

//-------------------------------------------------------------------------------------------------------

// Q8: Composition Polyfill (making a polyfill of compose() function)
//--------------------------------------------------------------------
const addFive = (a) => {
  return a + 5;
}

const subtractTwo = (a) => {
  return a - 2;
}

const multiplyFour = (a) => {
  return a * 4;
}

// Making custom compose() function that process elements from right to left,
// Here initial value of 'accumulator' is 5 which is passed as arg to evaluateFn(), and here 'value' is nothing but those 3 fns received as parameter by custom compose function using spread operator and hence it becomes an array of 3 fns, further getting processed and invoked from right to left using reduceRight() method.

const compose = (...functions) => {
  return (arg) => {
    return functions.reduceRight((accumulator, value) => value(accumulator), arg)
  }
}

const evaluateFn = compose(addFive, subtractTwo, multiplyFour)
console.log('Composition Polyfill: ', evaluateFn(5)); // 23


//--------------------------------------------------------------------------------------------------------
