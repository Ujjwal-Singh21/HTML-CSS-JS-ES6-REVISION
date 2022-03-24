// different methods in Array Object

// push
let array = [5, 7, 8, 9, 4]

console.log(array.push(11))
console.log('Initially: ' + array)

// pop
let array1 = [5, 7, 8, 9, 4]
console.log(array1.pop())
console.log("After Pop: " + array1)

// shift
let array2 = [5, 7, 8, 9, 4]
console.log(array2.shift()) // -> shifted to left once hence 5 gets removed
console.log("After Shift: " + array2)

// unshift
let array3 = [55, 77, 88, 99, 44]
console.log(array3.unshift(45)) // -> returns new length of array and adds element passed
console.log("After Unshift: " + array3)

//splice
let array4 = [5, 7, 8, 9, 4]
console.log(array4.splice(2))
console.log("Splice: " + array4)

// spice (deleting specified no of elements)
let array5 = [5, 7, 8, 9, 4]
console.log(array5.splice(2, 1))
console.log("Splice2: " + array5)

// spice (deleting specified no of elements , also adding new element)
let array6 = [5, 7, 8, 9, 4]
console.log(array6.splice(2, 1, 66, 77))
console.log("Splice3: " + array6)
